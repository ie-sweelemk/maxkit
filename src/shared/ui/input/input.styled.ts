import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;

  .input-label {
    display: inline-flex;
    font-size: ${({theme}) => theme.font.fontSize.sm};
    font-weight: 500;
    margin-bottom: ${({theme}) => theme.spacing.m};
  }
`;

export const StyledInput = styled.input`
  &.input {
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
    touch-action: manipulation;
    background-image: none;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    background-color: transparent;
    transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease;
    color: ${({ theme }) => theme.colors.dark_main};
    box-sizing: border-box;
    outline: none;
    width: inherit;

    &::placeholder {
      color: ${({ theme }) => theme.colors.neutral_grey};
    }

    &:hover,
    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }

    &:disabled {
      cursor: default;
      opacity: 0.5;
      pointer-events: none;
    }
  }

  &.input-small {
    height: 32px;
    font-size: 14px;
    padding: 0 16px;
  }

  &.input-large {
    height: 52px;
    font-size: 16px;
    padding: 0 32px;
  }

  &.input-block {
    width: 100%;
  }

  &.input-error {
    border-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.red};

    &:hover,
    &:focus {
      border-color: ${({ theme }) => theme.colors.red_hover};
    }
  }

  &.input-success {
    border-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.green};

    &:hover,
    &:focus {
      border-color: ${({ theme }) => theme.colors.green_hover};
    }
  }
`;
