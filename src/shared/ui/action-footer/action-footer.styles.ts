import styled from "styled-components";

export const ActionFooterStyled = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing.xxl};
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: space-between;
  align-items: center;
  margin: 0 -${({ theme }) => theme.spacing.xxl} -${({ theme }) => theme.spacing.xxl};
`;

export const LastUpdated = styled.div``;
export const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxl};
`;