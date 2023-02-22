import styled, { css } from "styled-components";
import { spacing } from "../theme/config/variables";

export const ContentStyled = styled.div.attrs(
  ({
    withShadow,
    space,
  }: {
    withShadow: boolean;
    space: keyof typeof spacing;
  }) => ({
    withShadow,
    space,
  })
)`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: ${(props) => props.theme.spacing[props.space]};
  border-radius: ${({ theme }) => theme.borderRadius.l};
  ${(props) =>
    props.withShadow &&
    css`
      box-shadow: ${({ theme }) => theme.colors.shadow};
    `}
`;
