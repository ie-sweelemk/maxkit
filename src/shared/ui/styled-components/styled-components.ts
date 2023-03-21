import styled from "styled-components";

export const FormField = styled.div`
  text-align: ${({ aligment }: { aligment?: string }) =>
    aligment ? `${aligment}` : "left"};
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.xxl};
  }
`;
