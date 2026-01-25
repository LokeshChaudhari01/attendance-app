import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://onvtegrqdceufwuzqbvz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9udnRlZ3JxZGNldWZ3dXpxYnZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzMjMyMTEsImV4cCI6MjA4MTg5OTIxMX0.wqZnX8Qoc29Q4jRlef5nPqIdh_V938F66Lpy7iUM9NA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
