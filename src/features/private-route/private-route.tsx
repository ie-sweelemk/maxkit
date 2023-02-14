import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute: React.FC = () => {
  const location = useLocation();
  const auth = false;
  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location  }} />
  );
};

export default PrivateRoute;
