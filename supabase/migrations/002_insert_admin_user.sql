-- Insert admin user
-- This will create the user in auth.users and users table
-- You need to run this after setting up Supabase

-- Note: In production, you should create users through the Supabase dashboard
-- or through your admin panel, not through SQL migrations

-- Create the user record in our users table (the auth user should be created via Supabase Auth)
INSERT INTO users (name, email) 
VALUES ('Administrador', 'g_dferreira@hotmail.com')
ON CONFLICT (email) DO NOTHING;

-- Note: The actual auth user needs to be created through Supabase Auth
-- You can do this by:
-- 1. Going to your Supabase dashboard
-- 2. Authentication -> Users
-- 3. Add user manually with email: g_dferreira@hotmail.com and password of your choice
-- OR use the admin panel at /admin route after creating the auth user