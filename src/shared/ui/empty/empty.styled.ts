import styled from "styled-components";

export const EmptyContainer = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.font.fontSize.sm};
  height: 150px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  .empty-image {
    margin-bottom: ${({ theme }) => theme.spacing.s};
    height: 40px;
  }

  .empty-description {
    color: ${({ theme }) => theme.colors.dark_grey};
  }
`;
