import styled, {css} from "styled-components";

export const ProfileWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary90};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
  ${({size}: {size: string | number}) =>
    css`
      width: ${() => `${size}px`};
      height: ${() => `${size}px`};
    `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`