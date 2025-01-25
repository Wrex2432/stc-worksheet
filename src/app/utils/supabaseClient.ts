import { createClient } from '@supabase/supabase-js';

// Fetching Supabase credentials from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create and export Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);