import { supabase } from "shared/api";

export const fetchCategories = async (
  from: number,
  to: number,
  searchString?: string
) => {
  if (searchString) {
    return await supabase
      .from("category")
      .select("*", { count: "exact" })
      .order("name", { ascending: true })
      .range(from, to)
      .textSearch("name", searchString, {
        type: "phrase",
        config: "english",
      });
  } else {
    return await supabase
      .from("category")
      .select("*", { count: "exact" })
      .order("name", { ascending: true })
      .range(from, to);
  }
};

export const deleteCategory = async (categories: string[]) => {
  return await supabase.from("category").delete().in("id", categories);
};
