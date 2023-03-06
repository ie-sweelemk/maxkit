import styled, { css } from "styled-components";
export const ProfileWrapper = styled.div.attrs(
  ({
    size,
    iconSize,
  }: {
    size: string | number;
    iconSize: string | number;
  }) => ({
    size,
    iconSize,
  })
)`
  background-color: ${({ theme }) => theme.colors.primary90};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.m};
  overflow: hidden;
  font-size: ${(props) => `${props.iconSize}px`};
  overflow: hidden;
  ${(props) =>
    css`
      width: ${() => `${props.size}px`};
      height: ${() => `${props.size}px`};
    `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
