import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import 'react-native-url-polyfill/auto'

export const supabase = createClient(
  'https://whlcrfgmkodphgeiwaar.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndobGNyZmdta29kcGhnZWl3YWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2NjQ5OTksImV4cCI6MjA2MjI0MDk5OX0.29yT9GHXnghreMZJ2poA6sB9v-z5f1RrpkBjrLNSAFo',
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  })