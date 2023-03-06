import styled from "styled-components";

export const SettingRootWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const SettingNavSide = styled.div`
  width: 348px;
  position: sticky;
  top: 0;

  @media screen and (max-width: 1360px) {
    width: 280px;
  }
`;

export const SettingsContent = styled.div`
  flex: 1;
`;
