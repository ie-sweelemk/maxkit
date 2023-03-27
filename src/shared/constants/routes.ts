export const routes = {
  dashboard: "/",
  auth: {
    login: "/login",
    register: "/register",
  },
  products: {
    base: "products",
    all: "all",
    draft: "draft",
    category: "category",
    new: "new",
    edit: ":id/edit",
  },
  orders: "orders",
  customers: "customers",
  reviews: "reviews",
  checkouts: "checkouts",
  settings: {
    base: "settings",
    email: "email",
  },
};
