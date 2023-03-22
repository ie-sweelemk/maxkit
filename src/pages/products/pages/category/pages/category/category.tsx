import { ProductCategories } from "features";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Heading, Icon } from "shared/ui";

const Category: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <Heading
        title="Product Categories"
        action={
          <Button
            prefix={<Icon name="add" />}
            label="Add new category"
            variant="primary"
            onClick={() => navigate({
              pathname: `${location.pathname}/new`,
            })}
          />
        }
      />
      <ProductCategories />
    </>
  );
};

export default Category;
