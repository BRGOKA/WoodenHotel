import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gkbzwzsvftnfhkcjsbtj.supabase.co";
// cheers here is my db api key XD
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrYnp3enN2ZnRuZmhrY2pzYnRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxODAwNTAsImV4cCI6MjA5NDc1NjA1MH0.nwokyDnLT29SFH5x17XKcXwGFSJKqPT02ZpRh-G0QeU";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
