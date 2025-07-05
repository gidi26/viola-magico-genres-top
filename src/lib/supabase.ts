import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://weturogomzotiocwyymj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndldHVyb2dvbXpvdGlvY3d5eW1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3MjUyNjEsImV4cCI6MjA2NzMwMTI2MX0.aPlH7TGTNE-6m7N87_K7zmycTBeGoam0nmfzPkEtl58'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)