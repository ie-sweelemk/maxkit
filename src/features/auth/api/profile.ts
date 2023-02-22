import { supabase } from "shared/api";

export const getProfile = async (id: string) => {
  return await supabase.from('profile').select('id').eq('id', id);
};