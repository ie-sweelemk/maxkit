import { PageSpin } from "shared/ui";
import styled from "styled-components";

export const CategoryPageSpin = styled(PageSpin)`
  &.category-spin {
    display: flex;
    flex-direction: column;
    flex: 1;

    .container {
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: space-between;
    }
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 1;
`;
