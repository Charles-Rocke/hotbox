import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kwljegxjladlmxeacnkc.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3bGplZ3hqbGFkbG14ZWFjbmtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1Nzc4ODQsImV4cCI6MjAwODE1Mzg4NH0.dMGHMXvWMWJbEYTLRzcANo0xety8TYKmh_pmK5VOg9M"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;