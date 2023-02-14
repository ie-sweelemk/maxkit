import styled, { css } from "styled-components";

export const ContentStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.l};
  ${({ withShadow }: { withShadow: boolean }) =>
    withShadow &&
    css`
      box-shadow: ${({ theme }) => theme.colors.shadow};
    `}
  
`;
