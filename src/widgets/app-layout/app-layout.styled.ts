import styled from "styled-components";

export const AppLayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral_bg};
`;

export const AppContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const AppContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xxl};
  flex: 1;
  overflow: auto;
`;
