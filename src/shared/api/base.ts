import { API_KEY } from "shared/config/evn";
import { createClient } from "@supabase/supabase-js";
import { API_URL } from "shared/config";

const supabase = createClient(API_URL, API_KEY);

export { supabase };
