import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://zxitmpsztvlnconlpqmx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4aXRtcHN6dHZsbmNvbmxwcW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY0NzUwMzAsImV4cCI6MTk4MjA1MTAzMH0.4AhDTqnllVf6draQgda9oj824e4rjHWqUX9XTrnd_sg"
);

export default supabase;
