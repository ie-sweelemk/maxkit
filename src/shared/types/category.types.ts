export type Category = {
  id: string;
  name: string;
  stock: string;
  products: string;
  variant: string;
  created_at: Date;
  updated_at: Date;
};
export type Categories = {
  data: Category[];
  count: number;
};

export type ApiCategory = Omit<Category, "id" | "created_at" | "updated_at">;
