import styled from "styled-components";

export const ActionFooterStyled = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing.xxl};
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: space-between;
  align-items: center;
  margin: 0 -${({ theme }) => theme.spacing.xxl} -${({ theme }) => theme.spacing.xxl};
  position: sticky;
  bottom: -${({ theme }) => theme.spacing.xxl};
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.neutral_bg};
  border-width: 1px 0 0 1px;
`;

export const LastUpdated = styled.div``;
export const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxl};
`;