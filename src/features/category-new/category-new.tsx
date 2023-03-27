import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  Content,
  Typography,
  Divider,
  ActionFooter,
  Input,
  ConfirmModal,
  errorToast,
  successToast,
} from "shared/ui";
import { Form, FormField } from "shared/ui/styled-components";
import { createCategory } from "./model/api";
import { CategoryWrapper } from "./category-new.styles";
import { hasNonEmptyValues } from "shared/lib";

const { Title } = Typography;

type ProductNewForm = {
  name: string;
  stock: string;
};

const initialState = {
  name: "",
  stock: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().label("Category name").required(),
  stock: Yup.string().label("Stocks").required(),
});

const CategoryNew: React.FC = () => {
  const navigate = useNavigate();
  const [isConfirmModalOpen, setConfirmModalOpen] = useState<boolean>(false);

  const formik = useFormik<ProductNewForm>({
    initialValues: initialState,
    validationSchema,
    onSubmit: (values) => {
      handleCreateCategory(values);
    },
    enableReinitialize: true,
  });

  const navigateToCategories = () => {
    navigate("/products/category");
  };

  const handleCloseModal = () => {
    setConfirmModalOpen(false);
  };

  const handleCreateCategory = async (values: ProductNewForm) => {
    const newCategory = { ...values, products: "35", variant: "120" };
    try {
      const { error } = await createCategory(newCategory);

      if (error) {
        throw new Error(error.message);
      }

      successToast(`Category "${values.name}" was added successfully.`);
      navigateToCategories();
    } catch (error) {
      errorToast(error as string);
    }
  };

  return (
    <>
      <CategoryWrapper>
        <Content>
          <Title level={4}>Input your new category</Title>
          <Divider />
          <Form>
            <FormField>
              <Input
                label="Category name"
                placeholder="Input your category name"
                onChange={(e) => {
                  formik.setFieldValue("name", e.target.value);
                }}
                state={formik.errors.name ? "error" : "default"}
              />
            </FormField>
            <FormField>
              <Input
                label="Stock"
                placeholder="Input number of stocks"
                onChange={(e) => {
                  formik.setFieldValue("stock", e.target.value);
                }}
                state={formik.errors.stock ? "error" : "default"}
              />
            </FormField>
          </Form>
        </Content>
        <ActionFooter
          handleCancel={() => {
            if (hasNonEmptyValues(formik.values)) {
              setConfirmModalOpen(true);
            } else {
              navigateToCategories();
            }
          }}
          handleOk={() => {
            formik.handleSubmit();
          }}
        />
      </CategoryWrapper>
      <ConfirmModal
        isOpened={isConfirmModalOpen}
        onClose={handleCloseModal}
        title="You are about leaving the page."
        text="Are sure you want to leave this page? This action cannot be undone and all of changes will be discard."
        onCancel={handleCloseModal}
        onOk={navigateToCategories}
      />
    </>
  );
};

export default CategoryNew;
