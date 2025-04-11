-- Enable the UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create tables
-- Note: The profiles table is automatically created by Supabase Auth

-- Categories table
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  icon TEXT
);

-- Businesses table
CREATE TABLE businesses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  description TEXT,
  category TEXT,
  location TEXT,
  address TEXT,
  phone TEXT,
  email TEXT,
  website TEXT,
  hours JSONB,
  image_url TEXT,
  owner_id UUID REFERENCES auth.users(id),
  avg_rating NUMERIC(2,1) DEFAULT 0
);

-- Reviews table
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  images JSONB
);

-- Saved businesses table (for favorites/bookmarks)
CREATE TABLE saved_businesses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, business_id)
);

-- Enable Row Level Security
ALTER TABLE businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- Create policies for businesses
CREATE POLICY "Users can view all businesses"
  ON businesses FOR SELECT
  USING (true);

CREATE POLICY "Owners can update their businesses"
  ON businesses FOR UPDATE
  USING (auth.uid() = owner_id);

CREATE POLICY "Owners can delete their businesses"
  ON businesses FOR DELETE
  USING (auth.uid() = owner_id);

CREATE POLICY "Authenticated users can add businesses"
  ON businesses FOR INSERT
  WITH CHECK (auth.uid() = owner_id);

-- Create policies for reviews
CREATE POLICY "Everyone can read reviews"
  ON reviews FOR SELECT
  USING (true);

CREATE POLICY "Users can only add reviews when authenticated"
  ON reviews FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can only update their own reviews"
  ON reviews FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can only delete their own reviews"
  ON reviews FOR DELETE
  USING (auth.uid() = user_id);

-- Create policies for saved businesses
CREATE POLICY "Users can view their saved businesses"
  ON saved_businesses FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can add to their saved businesses"
  ON saved_businesses FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can remove from their saved businesses"
  ON saved_businesses FOR DELETE
  USING (auth.uid() = user_id);

-- Create policies for categories
CREATE POLICY "Everyone can view categories"
  ON categories FOR SELECT
  USING (true);

CREATE POLICY "Only admins can modify categories"
  ON categories FOR ALL
  USING (auth.uid() IN (SELECT id FROM auth.users WHERE is_admin = true));

-- Create function to update average rating when a review is added, updated, or deleted
CREATE OR REPLACE FUNCTION update_business_avg_rating()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE businesses
  SET avg_rating = (
    SELECT COALESCE(AVG(rating), 0)
    FROM reviews
    WHERE business_id = COALESCE(NEW.business_id, OLD.business_id)
  )
  WHERE id = COALESCE(NEW.business_id, OLD.business_id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers to update avg_rating
CREATE TRIGGER update_rating_on_insert
AFTER INSERT ON reviews
FOR EACH ROW
EXECUTE FUNCTION update_business_avg_rating();

CREATE TRIGGER update_rating_on_update
AFTER UPDATE OF rating ON reviews
FOR EACH ROW
EXECUTE FUNCTION update_business_avg_rating();

CREATE TRIGGER update_rating_on_delete
AFTER DELETE ON reviews
FOR EACH ROW
EXECUTE FUNCTION update_business_avg_rating();

-- Create storage buckets
-- Note: This needs to be done through the Supabase dashboard or API
-- INSERT INTO storage.buckets (id, name, public) VALUES ('avatars', 'avatars', true);
-- INSERT INTO storage.buckets (id, name, public) VALUES ('business-images', 'business-images', true);

-- Sample data for categories
INSERT INTO categories (name, description, icon) VALUES
('Restaurants', 'Places to eat and drink', 'restaurant'),
('Shopping', 'Retail stores and malls', 'shopping_bag'),
('Services', 'Professional services', 'business'),
('Beauty & Wellness', 'Salons, spas, and fitness centers', 'spa'),
('Entertainment', 'Fun activities and venues', 'local_activity');
