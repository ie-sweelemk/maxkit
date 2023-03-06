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
import { Account, SettingsRoot, Settings } from "./settings";

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
              <Route path={routes.settings.base} element={<SettingsRoot />}>
                <Route index element={<Settings />} />
                <Route path={routes.settings.account} element={<Account />} />
              </Route>
            </Route>
          </Route>
          <Route path={routes.auth.login} element={<Signin />} />
          <Route path={routes.auth.register} element={<Signup />} />
        </Routes>
      )}
    </>
  );
};
