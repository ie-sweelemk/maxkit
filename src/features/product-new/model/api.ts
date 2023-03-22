import { supabase } from "shared/api";
import { CreateCategory } from "shared/types";

export const createCategory = async (category: CreateCategory) => {
  return await supabase
    .from("category")
    .insert([category]);
};
