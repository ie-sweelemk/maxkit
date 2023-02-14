import styled from "styled-components";

export const AuthLayoutStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const AuthBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.primary};

  &:after {
    content: "";
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &:before {
    content: "";
    background-image: url("/src/shared/assets/images/ornament.svg");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 50%;
  }
`;

export const AuthContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const AuthContentChild = styled.div`
  max-width: 470px;
  flex: 1;
`;
