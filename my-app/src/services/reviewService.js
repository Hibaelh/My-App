import { supabase } from '../lib/supabaseClient';

export const reviewService = {
  // Get reviews for a business
  async getReviewsForBusiness(businessId) {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select(`
          *,
          profiles:user_id (id, full_name, avatar_url)
        `)
        .eq('business_id', businessId)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error(`Error fetching reviews for business ${businessId}:`, error.message);
      throw error;
    }
  },

  // Create a new review
  async createReview(reviewData) {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .insert([reviewData])
        .select();
      
      if (error) throw error;
      return data[0];
    } catch (error) {
      console.error('Error creating review:', error.message);
      throw error;
    }
  },

  // Update a review
  async updateReview(id, reviewData) {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .update(reviewData)
        .eq('id', id)
        .select();
      
      if (error) throw error;
      return data[0];
    } catch (error) {
      console.error(`Error updating review with ID ${id}:`, error.message);
      throw error;
    }
  },

  // Delete a review
  async deleteReview(id) {
    try {
      const { error } = await supabase
        .from('reviews')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      return true;
    } catch (error) {
      console.error(`Error deleting review with ID ${id}:`, error.message);
      throw error;
    }
  }
};
