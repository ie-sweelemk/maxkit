import styled from "styled-components";

export const ButtonStyled = styled.button`
  &.btn {
    font-size: ${({theme}) => theme.font.fontSize.base};
    font-family: ${({theme}) => theme.font.fontFamily.Mulish};
    padding: 0 24px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({theme}) => theme.borderRadius.m};
    position: relative;
    white-space: nowrap;
    cursor: pointer;
    touch-action: manipulation;
    background-image: none;
    border: 1px solid ${({theme}) => theme.colors.grey};
    background-color: transparent;
    transition: background-color .3s ease, color .3s ease, border-color .3s ease;
    color: ${({theme}) => theme.colors.dark_main};
    font-weight: 700;


    &:hover:not(:disabled) {
      color: ${({theme}) => theme.colors.primary};
      border-color: ${({theme}) => theme.colors.primary};
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
      opacity: .5;
    }

    .icon, .loading {
      width: 20px;
      height: 20px;
      font-size: 20px;

      & + span {
        margin-left: 8px;
      }
    }

    &.btn-icon {
      padding-left: 20px;
    }

    &.btn-icon-only {
      padding: 0;
      width: 44px;
    }
  }

  &.btn-small {
    height: 32px;
    font-size: 14px;
    padding: 0 16px;

    .icon, .loading {
      width: 16px;
      height: 16px;
      font-size: 16px;

      & + span {
        margin-left: 4px;
      }
    }

    &.btn-icon {
      padding-left: 12px;
    }

    &.btn-icon-only {
      padding: 0;
      width: 32px;
    }
  }

  &.btn-large {
    height: 52px;
    font-size: 16px;
    padding: 0 32px;

    .icon, .loading {
      width: 24px;
      height: 24px;
      font-size: 24px;

      & + span {
        margin-left: 8px;
      }
    }

    &.btn-icon {
      padding-left: 24px;
    }

    &.btn-icon-only {
      padding: 0;
      width: 52px;
    }
  }

  &.btn-primary {
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.white};
    border-color: ${({theme}) => theme.colors.primary};
    
    &:hover:not(:disabled) {
      color: ${({theme}) => theme.colors.white};
      background-color: ${({theme}) => theme.colors.primary_hover};
    }
  }

  &.btn-text {
    background-color: transparent;
    border-color: transparent;

    &:hover:not(:disabled) {
      color: ${({theme}) => theme.colors.primary};
      background-color: ${({theme}) => theme.colors.primary90};
      border-color: transparent;
    }
  }

  &.btn-link {
    background-color: transparent;
    border-color: transparent;
    color: ${({theme}) => theme.colors.primary};

    &:hover:not(:disabled) {
      background-color: transparent;
      border-color: transparent;
    }
  }

  &.btn-block {
    width: 100%;
  }
`;