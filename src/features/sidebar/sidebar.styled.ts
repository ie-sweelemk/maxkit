import styled from "styled-components";

export const SidebarOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

export const SidebarWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;

  @media screen and (max-width: 1180px) {
    transform: translateX(-300px);
    transition: transform 0.3s ease;
  }
`;

export const SidebarGlobalContainer = styled.div`
  position: relative;

  @media screen and (max-width: 1180px) {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    z-index: 1000;
    transition: left 0s;
    transition-delay: 0.3s;

    &.sidebar-opened {
      left: 0;
      transition-delay: 0s;

      ${SidebarOverlay} {
        opacity: 1;
        visibility: visible;
      }

      ${SidebarWrapper} {
        transform: translateX(0);
      }
    }
  }
`;

export const SidebarContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SidebarLogoContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

export const SidebarLogo = styled.div``;

export const SidebarCreateContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};

  .sidebar-create-button {
    width: 100%;
  }
`;

export const SidebarNavContainer = styled.div`
  height: 100%;
`;

export const SidebarFooter = styled.div``;
