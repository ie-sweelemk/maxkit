import { useEffect, useMemo, useRef, useState } from "react";
import { useDebounce, usePagination } from "shared/hooks";
import {
  Button,
  ConfirmModal,
  Content,
  errorToast,
  Icon,
  Input,
  Table,
} from "shared/ui";
import { deleteCategory, fetchCategories } from "./model/api";
import { ColumnDef } from "@tanstack/react-table";
import {
  CategoryActions,
  ProductCategoriesContainer,
  SearchContainer,
  TableContainer,
} from "./product-categories.styles";
import { Categories, Category } from "shared/types";

const ProductCategories: React.FC = () => {
  const countPageRef = useRef<number>(0);
  const [deleteRow, setDeleteRow] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [queryString, setQueryString] = useState<string>("");
  const pageDepth = 10;
  const [categories, setCategories] = useState<Categories>({
    count: 0,
    data: [],
  });

  const searchQuery = useDebounce(queryString, 500);

  const countPages = useMemo(() => {
    return Math.ceil(categories.count / pageDepth);
  }, [categories.count]);

  const closeModal = () => {
    setDeleteRow([]);
  };

  const deleteCategoryies = async (ids: string[]) => {
    try {
      const data = await deleteCategory(ids);

      if (data.error) {
        throw new Error(data.error.message);
      }

      getCategories(countPageRef.current);
    } catch (error) {
      errorToast(error as string);
    }
  };

  const getCategories = async (page: number = 0, query?: string) => {
    countPageRef.current = page;
    const { from, to } = usePagination(page, pageDepth);

    try {
      const { count, data, error } = await fetchCategories(from, to, query);

      if (error) {
        throw new Error(error.message);
      }

      setCategories({
        count: count!,
        data,
      });
    } catch (error) {
      errorToast(error as string);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories(0, searchQuery);
  }, [searchQuery]);

  const columns = useMemo<ColumnDef<Category>[]>(() => {
    return [
      {
        accessorKey: "name",
        header: () => "Category name",
      },
      {
        accessorKey: "stock",
        header: () => "Stocks",
      },
      {
        accessorKey: "products",
        header: () => "Products",
      },
      {
        accessorKey: "variant",
        header: () => "Variant",
      },
      {
        id: "action",
        header: () => "Action",
        cell: ({ row }) => (
          <CategoryActions>
            <Button
              prefix={<Icon name="edit" />}
              size="small"
              variant="text"
              onlyIcon
              onClick={() => console.log(row.original.id)}
            />
            <Button
              prefix={<Icon name="delete" />}
              size="small"
              onlyIcon
              variant="text"
              onClick={() => setDeleteRow([row.original.id])}
            />
          </CategoryActions>
        ),
      },
    ];
  }, []);

  return (
    <Content>
      <ProductCategoriesContainer>
        <SearchContainer>
          <Input
            placeholder="Search category by name"
            suffix={<Icon name="search" />}
            value={queryString}
            onChange={(e) => setQueryString(e.target.value)}
          />
        </SearchContainer>
        <TableContainer>
          <Table
            columns={columns}
            data={categories.data}
            loading={loading}
            pageDepth={pageDepth}
            pageCount={countPages}
            onPaginationChange={(e: number) => getCategories(e)}
            columnsSchema={["4fr", "1fr", "1fr", "1fr", "1fr"]}
          />
        </TableContainer>
      </ProductCategoriesContainer>
      <ConfirmModal
        title="You are about delete category"
        text="Are sure you want to delete category? This action cannot be undone."
        isOpened={!!deleteRow.length}
        onClose={closeModal}
        customFooter={() => (
          <>
            <Button label="Cancel" onClick={closeModal} />
            <Button
              label="Delete"
              onClick={() => {
                deleteCategoryies(deleteRow);
                closeModal();
              }}
              variant="danger"
            />
          </>
        )}
      />
    </Content>
  );
};

export default ProductCategories;
