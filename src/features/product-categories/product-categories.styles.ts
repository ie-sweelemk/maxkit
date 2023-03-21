import styled from "styled-components";

export const ProductCategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  height: 100%;
`;
export const SearchContainer = styled.div`
  width: 33.33%;
`;
export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const CategoryActions = styled.div`
  display: flex;
  gap: 8px;
`;
