import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "features/private-route";
import { SplashScreen } from "shared/ui";
import { useStateSelector } from "features/store";
import { Dashboard } from "./dashboard";
import { Signin } from "./signin";
import { Signup } from "./signup";
import { isAppLoading } from "features/auth-provider/model";
import { AppLayout } from "widgets/app-layout";
import { routes } from "shared/constants";

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
            </Route>
          </Route>
          <Route path={routes.login} element={<Signin />} />
          <Route path={routes.register} element={<Signup />} />
        </Routes>
      )}
    </>
  );
};
