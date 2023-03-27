import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import {
  Content,
  Typography,
  Divider,
  ActionFooter,
  Input,
  ConfirmModal,
  errorToast,
  PageSpin,
} from "shared/ui";
import { Form, FormField } from "shared/ui/styled-components";
import { hasNonEmptyValues } from "shared/lib";
import { CategoryPageSpin, CategoryWrapper } from "./category-edit.styles";
import { Category } from "shared/types";
import { getCategoryById, updateCategoryById } from "./model/api";

const { Title } = Typography;

type CategoryEditForm = {
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

const CategoryEdit: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [isConfirmModalOpen, setConfirmModalOpen] = useState<boolean>(false);
  const [product, setProduct] = useState<Category>();

  const formik = useFormik<CategoryEditForm>({
    initialValues: product || initialState,
    validationSchema,
    onSubmit: (values) => {
      handleUpdate(values);
    },
    enableReinitialize: true,
  });

  const getCategoty = async (id: string) => {
    try {
      const { data, error } = await getCategoryById(id);
      console.log(data);
      
      if (error) {
        throw new Error(error.message);
      }
      setProduct(data[0]);
    } catch (error) {
      errorToast(error as string);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    params.id && getCategoty(params.id);
  }, [params.id]);

  const navigateToCategories = () => {
    navigate("/products/category");
  };

  const handleCloseModal = () => {
    setConfirmModalOpen(false);
  };

  const handleUpdate = async (values: CategoryEditForm) => {
    setLoading(true);
    const editCategory = { ...values, products: "35", variant: "120" };

    try {
      const { error } = await updateCategoryById(product!.id, editCategory);

      if (error) {
        throw new Error(error.message);
      }

      navigateToCategories();
    } catch (error) {
      errorToast(error as string);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CategoryPageSpin className="category-spin" spinning={loading}>
      <CategoryWrapper>
        <Content>
          <Title level={4}>Make some changes</Title>
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
                value={formik.values.name}
                disabled={loading}
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
                value={formik.values.stock}
                disabled={loading}
              />
            </FormField>
          </Form>
        </Content>
        <ActionFooter
          lastUpdated={product?.updated_at}
          handleCancel={() => {
            if (hasNonEmptyValues(formik.values)) {
              setConfirmModalOpen(true);
            } else {
              navigateToCategories();
            }
          }}
          okLabel="Save changes"
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
    </CategoryPageSpin>
  );
};

export default CategoryEdit;
