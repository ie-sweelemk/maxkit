import styled from "styled-components";

export const Form = styled.form`
  max-width: 600px;
`;

export const FormField = styled.div`
  text-align: ${({ aligment }: { aligment?: string }) =>
    aligment ? `${aligment}` : "left"};
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.xxl};
  }
`;
