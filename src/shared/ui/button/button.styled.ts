import styled from "styled-components";

export const ButtonStyled = styled.button`
  &.btn {
    font-size: ${({ theme }) => theme.font.fontSize.base};
    font-family: ${({ theme }) => theme.font.fontFamily.RedHatDisplay};
    padding: 0 24px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.borderRadius.l};
    position: relative;
    white-space: nowrap;
    cursor: pointer;
    touch-action: manipulation;
    background-image: none;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    background-color: transparent;
    transition: background-color 0.3s ease, color 0.3s ease,
      border-color 0.3s ease;
    color: ${({ theme }) => theme.colors.dark_main};
    font-weight: 500;

    &.btn-spacebetween {
      justify-content: space-between;
    }

    &:hover:not(:disabled) {
      color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
    }

    &:before {
      position: absolute;
      inset: -1px;
      z-index: 1;
      display: none;
      border-radius: inherit;
      content: "";
      pointer-events: none;
    }

    &:disabled {
      cursor: default;
      opacity: 0.5;
    }

    .icon,
    .loading {
      font-size: 20px;
      display: flex;

      & + span,
      & + .label {
        margin-left: 8px;
      }
    }

    .label {
      & + .icon {
        margin-left: 8px;
      }
    }

    &.btn-icon {
      padding-left: 20px;
    }

    &.btn-icon-only {
      padding: 0;
      width: 44px;
      justify-content: center;
    }
  }

  &.btn-small {
    height: 32px;
    font-size: 14px;
    padding: 0 16px;

    .icon,
    .loading {
      font-size: 16px;

      & + span,
      & + .label {
        margin-left: 4px;
      }

      .label {
        & + .icon {
          margin-left: 4px;
        }
      }
    }

    &.btn-icon {
      padding-left: 12px;
    }

    &.btn-icon-only {
      padding: 0;
      width: 32px;
      justify-content: center;
    }
  }

  &.btn-large {
    height: 52px;
    font-size: 16px;
    padding: 0 32px;

    .icon,
    .loading {
      font-size: 24px;

      & + span,
      & + .label {
        margin-left: 8px;
      }

      .label {
        & + .icon {
          margin-left: 8px;
        }
      }
    }

    &.btn-icon {
      padding-left: 24px;
    }

    &.btn-icon-only {
      padding: 0;
      width: 52px;
      justify-content: center;
    }
  }

  &.btn-primary {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.primary};
    filter: drop-shadow(0px 10px 30px rgba(87, 59, 255, 0.2));

    &:hover:not(:disabled) {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary_hover};
    }
  }

  &.btn-danger{
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.red};
    filter: drop-shadow(0px 10px 30px rgba(247, 75, 89, 0.2));

    &:hover:not(:disabled) {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.red_hover};
      border-color: ${({ theme }) => theme.colors.red_hover};
    }
  }

  &.btn-text {
    background-color: transparent;
    border-color: transparent;

    &:hover:not(:disabled) {
      color: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.primary90};
      border-color: transparent;
    }
  }

  &.btn-link {
    background-color: transparent;
    border-color: transparent;
    color: ${({ theme }) => theme.colors.primary};

    &:hover:not(:disabled) {
      background-color: transparent;
      border-color: transparent;
    }
  }

  &.btn-block {
    width: 100%;
  }
`;
