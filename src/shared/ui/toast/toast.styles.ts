import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const CloseButton = styled.div`
  font-size: 18px;
  width: 18px;
  height: 18px;
`;

export const ToastContainerStyled = styled(ToastContainer)`
  .Toastify__toast {
    font-size: ${({ theme }) => theme.font.fontSize.sm};
    font-family: inherit;
    color: ${({ theme }) => theme.colors.dark_main};
    box-shadow: none;
    border: 2px solid #000;
    border-radius: ${({ theme }) => theme.borderRadius.l};

    &.toast-success {
      border-color: ${({ theme }) => theme.colors.green};
      background-color: ${({ theme }) => theme.colors.green_bg};

      .toast-container {
        .toast-icon {
          background-color: ${({ theme }) => theme.colors.green};
        }
      }
    }

    &.toast-error {
      border-color: ${({ theme }) => theme.colors.red};
      background-color: ${({ theme }) => theme.colors.red_bg};

      .toast-container {
        .toast-icon {
          background-color: ${({ theme }) => theme.colors.red};
        }
      }
    }

    .toast-container {
      display: flex;
      align-items: center;

      .toast-body {
        flex: 1;
      }

      .toast-icon {
        width: 24px;
        height: 24px;
        font-size: 18px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        margin-right: 12px;
      }

      .title {
        font-weight: 700;
      }
    }
  }
`;
