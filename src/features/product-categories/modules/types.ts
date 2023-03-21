export type Category = {
  id: string;
  name: string;
  stock: string;
  products: string;
  variant: string;
  created_at: Date;
};
export type Categories = {
  data: Category[];
  count: number;
};
