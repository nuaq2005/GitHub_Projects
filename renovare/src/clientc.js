import { createClient } from '@supabase/supabase-js'


const URL = 'https://lugogrgfnxbuwuzukllx.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1Z29ncmdmbnhidXd1enVrbGx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2NjkzNjQsImV4cCI6MjA0NjI0NTM2NH0.P6f66QORcIUFC0W_1EM0_8HekDMKF1eWisq7Fiig6pM';

export const supabase = createClient(URL, API_KEY);