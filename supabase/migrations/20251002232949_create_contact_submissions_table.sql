/*
  # Create Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Full name of the person submitting
      - `email` (text) - Email address for contact
      - `phone` (text) - Phone number (optional)
      - `company` (text) - Company name (optional)
      - `loan_amount` (text) - Requested loan amount (optional)
      - `message` (text) - Message content
      - `created_at` (timestamptz) - Timestamp of submission
      - `status` (text) - Status of submission (new, contacted, closed)
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for service role to insert submissions
    - Add policy for authenticated admins to view all submissions
    
  3. Notes
    - This table stores all contact form submissions
    - Email notifications will be triggered via Edge Function
    - Default status is 'new' for all submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  loan_amount text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed'))
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert submissions (public form)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users can view submissions
CREATE POLICY "Authenticated users can view all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can update submission status
CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);