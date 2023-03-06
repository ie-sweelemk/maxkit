import cn from "classnames";
import { useActionCreators, useStateSelector } from "features/store";
import { useCallback } from "react";
import { routes } from "shared/constants";
import { Button, Icon, SidebarLink } from "shared/ui";
import { SidebarNav } from "./components";
import { sidebarActions, sidebarOpenState } from "./model";
import {
  SidebarGlobalContainer,
  SidebarOverlay,
  SidebarWrapper,
  SidebarContainer,
  SidebarLogoContainer,
  SidebarLogo,
  SidebarCreateContainer,
  SidebarNavContainer,
  SidebarFooter,
} from "./sidebar.styled";

const Sidebar: React.FC = () => {
  const sidebarState = useStateSelector(sidebarOpenState);
  const sidebar = useActionCreators(sidebarActions);
  const className = cn({
    ["sidebar-opened"]: sidebarState,
  });

  const handleClick = useCallback(() => {
    sidebar.setSidebarState(false);
  }, []);

  return (
    <SidebarGlobalContainer className={className}>
      <SidebarOverlay
        onClick={handleClick}
      />
      <SidebarWrapper>
        <SidebarContainer>
          <SidebarLogoContainer>
            <SidebarLogo>
              <Icon name="logo" />
            </SidebarLogo>
          </SidebarLogoContainer>
          <SidebarCreateContainer>
            <Button
              variant="primary"
              label="Create Product"
              block
              suffix={<Icon name="add" />}
            />
          </SidebarCreateContainer>
          <SidebarNavContainer>
            <SidebarNav />
          </SidebarNavContainer>
        </SidebarContainer>
      </SidebarWrapper>
    </SidebarGlobalContainer>
  );
};

export default Sidebar;
