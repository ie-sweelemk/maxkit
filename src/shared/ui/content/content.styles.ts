import styled, { css } from "styled-components";
import { spacing } from "../theme/config/variables";

export const ContentStyled = styled.div.attrs(
  ({
    withShadow,
    space,
    flexAria,
  }: {
    withShadow: boolean;
    space: keyof typeof spacing;
    flexAria: number;
  }) => ({
    withShadow,
    space,
    flexAria
  })
)`
  background-color: ${({ theme }) => theme.colors.white};
  width: ${({ full }: { full: boolean }) => (full ? "100%" : "initial")};
  flex: ${(props) => props.flexAria ? props.flexAria : 'none'};
  padding: ${(props) => props.theme.spacing[props.space]};
  margin-bottom: ${({theme}) => theme.spacing.xxl};
  border-radius: ${({ theme }) => theme.borderRadius.l};
  ${(props) =>
    props.withShadow &&
    css`
      box-shadow: ${({ theme }) => theme.colors.shadow};
    `}
  /* flex: 1; */
`;
