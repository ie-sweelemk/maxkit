import { supabase } from "shared/api";
import { ApiCategory } from "shared/types";

export const createCategory = async (category: ApiCategory) => {
  return await supabase
    .from("category")
    .insert([category]);
};
