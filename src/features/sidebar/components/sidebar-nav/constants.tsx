import { ReactNode } from "react";
import { routes } from "shared/constants";
import { Icon } from "shared/ui";

export type SidebarRoute = {
  key: string,
  path: string,
  child?: SidebarRoute[],
  props?: {
    label: string,
    icon?: ReactNode;
  };
}

export const sidebarRoutes: SidebarRoute[] = [
  {
    key: "overview",
    path: routes.dashboard,
    props: {
      label: "Overview",
      icon: <Icon name="grid" />,
    },
  },
  {
    key: "products",
    path: routes.products.base,
    props: {
      label: "Products",
      icon: <Icon name="box" />,
    },
    child: [
      {
        key: "all",
        path: routes.products.all,
        props: {
          label: "All",
          icon: null,
        },
      },
      {
        key: "draft",
        path: routes.products.draft,
        props: {
          label: "Draft",
          icon: null,
        },
      },
      {
        key: "category",
        path: routes.products.category,
        props: {
          label: "Category",
          icon: null,
        },
      },
    ],
  },
  {
    key: "orders",
    path: routes.orders,
    props: {
      label: "Orders",
      icon: <Icon name="cart" />,
    },
  },
  {
    key: "customers",
    path: routes.customers,
    props: {
      label: "Customers",
      icon: <Icon name="users" />,
    },
  },
  {
    key: "reviews",
    path: routes.reviews,
    props: {
      label: "Manage Reviews",
      icon: <Icon name="star" />,
    },
  },
  {
    key: "checkout",
    path: routes.checkouts,
    props: {
      label: "Checkout",
      icon: <Icon name="bag" />,
    },
  },
];