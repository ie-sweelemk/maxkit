import { CategoryEdit } from "features/category-edit";
import { Heading } from "shared/ui";

const CategoryEditPage: React.FC = () => {
  return (
    <>
      <Heading
        title="Edit category"
      />
      <CategoryEdit />
    </>
  )
}

export default CategoryEditPage;