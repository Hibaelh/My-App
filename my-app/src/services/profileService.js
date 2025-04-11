import { supabase } from '../lib/supabaseClient';

export const profileService = {
  // Get user profile
  async getProfile(userId) {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error(`Error fetching profile for user ${userId}:`, error.message);
      throw error;
    }
  },

  // Create or update user profile
  async upsertProfile(profileData) {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .upsert(profileData)
        .select();
      
      if (error) throw error;
      return data[0];
    } catch (error) {
      console.error('Error updating profile:', error.message);
      throw error;
    }
  },

  // Upload avatar
  async uploadAvatar(file, userId) {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${userId}-${Date.now()}.${fileExt}`;
      const filePath = `avatars/${fileName}`;
      
      const { error: uploadError } = await supabase
        .storage
        .from('avatars')
        .upload(filePath, file);
      
      if (uploadError) throw uploadError;
      
      const { data } = supabase
        .storage
        .from('avatars')
        .getPublicUrl(filePath);
      
      // Update profile with new avatar URL
      await this.upsertProfile({
        id: userId,
        avatar_url: data.publicUrl
      });
      
      return data.publicUrl;
    } catch (error) {
      console.error('Error uploading avatar:', error.message);
      throw error;
    }
  }
};
