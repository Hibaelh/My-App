import { supabase } from '../lib/supabaseClient';

export const businessService = {
  // Get all businesses
  async getBusinesses(filters = {}) {
    try {
      let query = supabase
        .from('businesses')
        .select('*');
      
      // Apply filters if any
      if (filters.category) {
        query = query.eq('category', filters.category);
      }
      
      if (filters.location) {
        query = query.ilike('location', `%${filters.location}%`);
      }
      
      // Add pagination if provided
      if (filters.page && filters.perPage) {
        const from = (filters.page - 1) * filters.perPage;
        const to = from + filters.perPage - 1;
        query = query.range(from, to);
      }
      
      // Add sorting if provided
      if (filters.sortBy) {
        query = query.order(filters.sortBy, { ascending: filters.ascending !== false });
      }
      
      const { data, error, count } = await query;
      
      if (error) throw error;
      return { data, count };
    } catch (error) {
      console.error('Error fetching businesses:', error.message);
      throw error;
    }
  },

  // Get business by ID
  async getBusinessById(id) {
    try {
      const { data, error } = await supabase
        .from('businesses')
        .select(`
          *,
          reviews(*)
        `)
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error(`Error fetching business with ID ${id}:`, error.message);
      throw error;
    }
  },

  // Create a new business
  async createBusiness(businessData) {
    try {
      const { data, error } = await supabase
        .from('businesses')
        .insert([businessData])
        .select();
      
      if (error) throw error;
      return data[0];
    } catch (error) {
      console.error('Error creating business:', error.message);
      throw error;
    }
  },

  // Update business
  async updateBusiness(id, businessData) {
    try {
      const { data, error } = await supabase
        .from('businesses')
        .update(businessData)
        .eq('id', id)
        .select();
      
      if (error) throw error;
      return data[0];
    } catch (error) {
      console.error(`Error updating business with ID ${id}:`, error.message);
      throw error;
    }
  },

  // Delete business
  async deleteBusiness(id) {
    try {
      const { error } = await supabase
        .from('businesses')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      return true;
    } catch (error) {
      console.error(`Error deleting business with ID ${id}:`, error.message);
      throw error;
    }
  },

  // Upload business image
  async uploadBusinessImage(file, businessId) {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${businessId}-${Date.now()}.${fileExt}`;
      const filePath = `business-images/${fileName}`;
      
      const { error } = await supabase
        .storage
        .from('business-images')
        .upload(filePath, file);
      
      if (error) throw error;
      
      const { data } = supabase
        .storage
        .from('business-images')
        .getPublicUrl(filePath);
      
      return data.publicUrl;
    } catch (error) {
      console.error('Error uploading business image:', error.message);
      throw error;
    }
  }
};
