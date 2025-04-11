/**
 * Supabase Schema Definition (for reference)
 * 
 * This file doesn't actually create tables but documents the structure
 * to help understand how the database is organized.
 */

const schema = {
  tables: {
    // Automatically created by Supabase Auth
    profiles: {
      id: 'uuid references auth.users(id)', // Primary key tied to auth user
      updated_at: 'timestamp',
      full_name: 'text',
      avatar_url: 'text',
      email: 'text',
      website: 'text',
      bio: 'text',
      phone: 'text',
      location: 'text'
    },
    
    businesses: {
      id: 'uuid default uuid_generate_v4() primary key',
      created_at: 'timestamp with time zone default now()',
      updated_at: 'timestamp with time zone default now()',
      name: 'text not null',
      description: 'text',
      category: 'text',
      location: 'text',
      address: 'text',
      phone: 'text',
      email: 'text',
      website: 'text',
      hours: 'jsonb', // Store opening hours in JSON format
      image_url: 'text',
      owner_id: 'uuid references auth.users(id)', // Foreign key to users
      avg_rating: 'numeric(2,1) default 0',
      // Geolocation could be added if needed:
      // coordinates: 'geography(point)'
    },
    
    reviews: {
      id: 'uuid default uuid_generate_v4() primary key',
      created_at: 'timestamp with time zone default now()',
      updated_at: 'timestamp with time zone default now()',
      business_id: 'uuid references businesses(id) on delete cascade',
      user_id: 'uuid references auth.users(id) on delete cascade',
      rating: 'integer check (rating >= 1 and rating <= 5)',
      comment: 'text',
      images: 'jsonb' // Array of image URLs
    },
    
    categories: {
      id: 'uuid default uuid_generate_v4() primary key',
      name: 'text not null unique',
      description: 'text',
      icon: 'text'
    },
    
    saved_businesses: {
      id: 'uuid default uuid_generate_v4() primary key',
      user_id: 'uuid references auth.users(id) on delete cascade',
      business_id: 'uuid references businesses(id) on delete cascade',
      created_at: 'timestamp with time zone default now()',
      unique: '(user_id, business_id)' // Ensure no duplicate saves
    }
  },
  
  // Example RLS (Row Level Security) policies for tables
  policies: {
    businesses: [
      {
        name: 'Users can view all businesses',
        using: 'true', // Everyone can read businesses
        for: 'SELECT'
      },
      {
        name: 'Owners can update their businesses',
        using: 'auth.uid() = owner_id',
        for: 'UPDATE'
      },
      {
        name: 'Owners can delete their businesses',
        using: 'auth.uid() = owner_id',
        for: 'DELETE'
      },
      {
        name: 'Authenticated users can add businesses',
        using: 'auth.role() = \'authenticated\'',
        for: 'INSERT',
        with_check: 'owner_id = auth.uid()'
      }
    ],
    reviews: [
      {
        name: 'Everyone can read reviews',
        using: 'true',
        for: 'SELECT'
      },
      {
        name: 'Users can only add reviews when authenticated',
        using: 'auth.role() = \'authenticated\'',
        for: 'INSERT',
        with_check: 'user_id = auth.uid()'
      },
      {
        name: 'Users can only update their own reviews',
        using: 'auth.uid() = user_id',
        for: 'UPDATE'
      },
      {
        name: 'Users can only delete their own reviews',
        using: 'auth.uid() = user_id',
        for: 'DELETE'
      }
    ]
  }
};

export default schema;
