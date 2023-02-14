import PrivateRoute from "features/private-route/private-route";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./dashboard";
import { Login } from "./login";

export const Routing = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
