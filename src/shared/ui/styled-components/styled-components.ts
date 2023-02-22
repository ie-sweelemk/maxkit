import styled from "styled-components";

export const FormField = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  text-align: ${({ aligment }: { aligment?: string }) =>
    aligment ? `${aligment}` : "left"};
`;
