import styled from "styled-components";

export const AppLayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral_bg};
`;

export const AppContentWrapper = styled.div`
  flex: 1;
`;
export const AppContent = styled.div`
  padding: ${({theme}) => theme.spacing.xxl};
  flex: 1;
  overflow: auto;
  height: 100%;
`;
