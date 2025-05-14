/*
  # Create registrations table

  1. New Tables
    - `registrations`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text, unique)
      - `phone` (text)
      - `education` (text)
      - `experience_level` (text)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `registrations` table
    - Add policy for authenticated users to read their own data
    - Add policy for public to insert data
*/

CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  phone text NOT NULL,
  education text NOT NULL,
  experience_level text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can insert registrations"
  ON registrations
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can view own registration"
  ON registrations
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);
