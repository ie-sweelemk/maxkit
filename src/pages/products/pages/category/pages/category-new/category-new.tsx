import { CategoryNew } from "features/category-new";
import { Heading } from "shared/ui";

const CategoryNewPage: React.FC = () => {
  return (
    <>
      <Heading
        title="Create new category"
        subtitle={<div>Some breadcrumbs</div>}
      />
      <CategoryNew />
    </>
  );
}

export default CategoryNewPage;