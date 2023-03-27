import styled from "styled-components";

export const TableStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;

  .table {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .t-head {
    border-bottom: 1px solid ${({ theme }) => theme.colors.soft_grey};
    margin-bottom: 16px;

    .t-row {
      color: ${({ theme }) => theme.colors.dark_grey};
      font-size: ${({ theme }) => theme.font.fontSize.xs};
    }
  }

  .t-row {
    grid-template-columns: ${({ columns }: { columns: string }) => columns};
    display: grid;

    .t-row-item {
      padding: 0 12px;
      font-size: 14px;
      display: flex;
      align-items: center;
      min-height: 48px;

      &:last-child {
        justify-content: end;
      }
    }
  }

  .t-body {
    .t-row {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;

  .pagination {
    display: flex;
    gap: 4px;
    padding-left: 0;
    list-style: none;

    .page-link {
      display: flex;
      width: 32px;
      height: 32px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-weight: 700;
      font-size: 12px;
      transition: color 0.3s ease, background-color 0.3s ease;
      border-radius: ${({ theme }) => theme.borderRadius.l};

      &:hover {
        background-color: ${({ theme }) => theme.colors.primary90};
      }

      &.active {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
      }
    }

    .page-item {
      &.active {
        .page-link {
          background-color: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.white};
        }
      }
      &.disabled {
        .page-link {
          pointer-events: none;
          opacity: .5;
        }
      }
    }
  }
`;
