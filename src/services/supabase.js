import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gkbzwzsvftnfhkcjsbtj.supabase.co";
// cheers here is my db api key XD
const supabaseKey = "sb_publishable_X9vCb9ku_E3claw2j3gybg_k-WbPUqC";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
