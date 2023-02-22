import { Routes, Route, Outlet } from "react-router-dom";
import { PrivateRoute } from "features/private-route";
import { SplashScreen } from "shared/ui";
import { useStateSelector } from "features/store";
import { Dashboard } from "./dashboard";
import { Signin } from "./signin";
import { Signup } from "./signup";
import { isAppLoading } from "features/auth-provider/model";

export const Routing = () => {
  const appLoading = useStateSelector(isAppLoading);

  return (
    <>
      {appLoading ? (
        <SplashScreen />
      ) : (
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route
              element={
                <div>
                  <div>Sidebar</div>
                  <div>
                    <Outlet />
                  </div>
                </div>
              }
            >
              <Route path="/" element={<Dashboard />} />
            </Route>
          </Route>
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      )}
    </>
  );
};
