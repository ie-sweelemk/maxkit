import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { Category, ApiCategory } from 'shared/types';
import { supabase } from "shared/api";

export const getCategoryById = async (id: string): Promise<PostgrestSingleResponse<Category[]>> => {
  return await supabase
    .from("category")
    .select("*")
    .eq('id', id);
};

export const updateCategoryById = async (id: string, body: ApiCategory) => {
  return await supabase
    .from("category")
    .update(body)
    .eq('id', id);
};
