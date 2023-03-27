import { useEffect } from "react";
import { Outlet, useLocation, useNavigate, } from "react-router-dom";
import { routes } from "shared/constants";

const ProductsRoot: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.split("/").slice(-1)[0] === routes.products.base) {
      navigate(routes.products.all, { replace: true });
    }
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProductsRoot;
