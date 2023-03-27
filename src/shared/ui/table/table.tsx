import {
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import {
  useReactTable,
  ColumnDef,
  PaginationState,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import ReactPaginate from "react-paginate";
import {
  TableStyled,
  PaginationContainer,
} from "./table.styles";
import { PageSpin, Empty } from "shared/ui";

export type TableRef = {};

type TableProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData>[];
  tableRef?: MutableRefObject<TableRef>;
  loading: boolean;
  pageDepth: number;
  pageCount: number;
  withPagination?: boolean;
  columnsSchema?: string | string[] | number;
  onPaginationChange?: (pageIndex: number) => void;
};

// function IndeterminateCheckbox({
//   indeterminate,
//   className = "",
//   ...rest
// }: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
//   const ref = useRef<HTMLInputElement>(null!);

//   useEffect(() => {
//     if (typeof indeterminate === "boolean") {
//       ref.current.indeterminate = !rest.checked && indeterminate;
//     }
//   }, [ref, indeterminate]);

//   return (
//     <input
//       type="checkbox"
//       ref={ref}
//       className={className + " cursor-pointer"}
//       {...rest}
//     />
//   );
// }

const Table = <TData extends object>({
  columns,
  data,
  tableRef,
  loading,
  pageDepth,
  pageCount,
  columnsSchema,
  withPagination = true,
  onPaginationChange,
}: TableProps<TData>) => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: pageDepth,
  });
  const columnSchema = useMemo(() => {
    if (Array.isArray(columnsSchema)) {
      return columnsSchema?.join(" ");
    }

    if (typeof columnsSchema === "string") {
      return columnsSchema;
    }

    if (typeof columnsSchema === "number") {
      return `repeat(${columnsSchema}, 1fr)`;
    }

    return `repeat(${columns.length}, 1fr)`;
  }, [columnsSchema]);

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  useEffect(() => {
    if (onPaginationChange) {
      onPaginationChange(pageIndex);
    }
  }, [pageIndex]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setPagination,
    manualPagination: true,
    state: {
      pagination,
    },
  });

  useImperativeHandle(tableRef, () => ({}));

  const handlePageClick = (selectedItem: { selected: number }) => {
    table.setPageIndex(selectedItem.selected);
  };

  return (
    <PageSpin spinning={loading}>
      <TableStyled columns={columnSchema!}>
        <div className="table">
          <div className="t-head">
            {table.getHeaderGroups().map((headerGroup) => (
              <div key={headerGroup.id} className="t-row">
                {headerGroup.headers.map((header) => (
                  <div key={header.id} className="t-row-item">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className={`t-body ${withPagination ? "pagination-shown" : ""}`}>
            {data.length > 0
              ? table.getRowModel().rows.map((row) => {
                  return (
                    <div key={row.id} className="t-row">
                      {row.getVisibleCells().map((cell) => {
                        return (
                          <div key={cell.id} className="t-row-item">
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                })
              : (
                <Empty />
              )}
          </div>
        </div>
      </TableStyled>
      {withPagination && data.length > 0 ? (
        <PaginationContainer>
          <ReactPaginate
            pageCount={pageCount}
            containerClassName="pagination"
            previousLabel="<"
            nextLabel=">"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            previousLinkClassName="page-link"
            activeClassName="active"
            onPageChange={handlePageClick}
          />
        </PaginationContainer>
      ) : null}
    </PageSpin>
  );
};

export default Table;
