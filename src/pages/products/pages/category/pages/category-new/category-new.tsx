import { ProductNew } from "features/product-new";
import { useLocation, useSearchParams } from "react-router-dom";
import { Heading } from "shared/ui";

const CategoryNew: React.FC = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  
  return (
    <>
      <Heading
        title="Create new category"
        subtitle={<div>Some breadcrumbs</div>}
      />
      <ProductNew />
    </>
  );
}

export default CategoryNew;