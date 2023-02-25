import styled from "styled-components";

export const AppLayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral_bg};
`;

export const AppContent = styled.div`
  flex: 1;
`;
