import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "features/private-route";
import { SplashScreen } from "shared/ui";
import { useStateSelector } from "features/store";
import { Dashboard } from "./dashboard";
import { Signin } from "./signin";
import { Signup } from "./signup";
import { isAppLoading } from "features/auth-provider/model";
import { AppLayout } from "widgets";
import { routes } from "shared/constants";
import { Email, SettingsRoot, Settings } from "./settings";
import {
  AllProducts,
  Category,
  CategoryEdit,
  CategoryNew,
  CategoryRoot,
  DraftProducts,
  ProductsRoot,
} from "./products";

export const Routing = () => {
  const appLoading = useStateSelector(isAppLoading);

  return (
    <>
      {appLoading ? (
        <SplashScreen />
      ) : (
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route element={<AppLayout />}>
              <Route path={routes.dashboard} element={<Dashboard />} />
              <Route path={routes.products.base} element={<ProductsRoot />}>
                <Route path={routes.products.all} element={<AllProducts />} />
                <Route
                  path={routes.products.draft}
                  element={<DraftProducts />}
                />
                <Route
                  path={routes.products.category}
                  element={<CategoryRoot />}
                >
                  <Route index element={<Category />} />
                  <Route path={routes.products.new} element={<CategoryNew />} />
                  <Route
                    path={routes.products.edit}
                    element={<CategoryEdit />}
                  />
                </Route>
              </Route>
              <Route path={routes.settings.base} element={<SettingsRoot />}>
                <Route index element={<Settings />} />
                <Route path={routes.settings.email} element={<Email />} />
              </Route>
              <Route path="*" element={<div>Not found</div>} />
            </Route>
          </Route>
          <Route path={routes.auth.login} element={<Signin />} />
          <Route path={routes.auth.register} element={<Signup />} />
        </Routes>
      )}
    </>
  );
};
