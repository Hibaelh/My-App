import { supabase } from '../lib/supabaseClient';

export const authService = {
  // Register a new user
  async register(email, password, userData = {}) {
    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData
        }
      });
      
      if (error) throw error;
      return { user };
    } catch (error) {
      console.error('Error registering user:', error.message);
      throw error;
    }
  },

  // Login user
  async login(email, password) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error logging in:', error.message);
      throw error;
    }
  },

  // Logout user
  async logout() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error logging out:', error.message);
      throw error;
    }
  },

  // Get current user
  async getCurrentUser() {
    try {
      const { data, error } = await supabase.auth.getUser();
      if (error) throw error;
      return data.user;
    } catch (error) {
      console.error('Error getting current user:', error.message);
      return null;
    }
  },

  // Reset password
  async resetPassword(email) {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error resetting password:', error.message);
      throw error;
    }
  }
};
