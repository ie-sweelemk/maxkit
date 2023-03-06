import styled from "styled-components";
import { spacing } from "../theme/config/variables";

export const DividerStyled =  styled.div.attrs(
  ({
    space,
  }: {
    space: keyof typeof spacing;
  }) => ({
    space,
  })
)`
  border-block-start: 1px solid ${({ theme }) => theme.colors.soft_grey};
  margin: ${(props) => props.theme.spacing[props.space]} 0;
`;