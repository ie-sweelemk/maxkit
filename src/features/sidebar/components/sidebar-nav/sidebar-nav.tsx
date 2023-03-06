import { useCallback } from "react";
import { routes } from "shared/constants";
import { Icon, SidebarLink } from "shared/ui";
import { sidebarActions } from "features/sidebar/model";
import { useActionCreators } from "features/store";
import { SidebarItemCollapse } from "../sidebar-item-collapse";
import { sidebarRoutes } from "./constants";
import {
  SidebarNavWrapper,
  SidebarBody,
  SidebarFooter,
} from "./sidebar-nav-styled";

const SidebarNav: React.FC = () => {
  const sidebar = useActionCreators(sidebarActions);
  
  const handleClick = useCallback(() => {
    sidebar.setSidebarState(false);
  }, []);

  return (
    <SidebarNavWrapper>
      <SidebarBody>
        {sidebarRoutes.map((routeItem) => {
          return routeItem.child ? (
            <SidebarItemCollapse routeItem={routeItem} key={routeItem.key} />
          ) : (
            <SidebarLink
              to={routeItem.path}
              key={routeItem.key}
              onClick={handleClick}
            >
              {routeItem.props?.icon && (
                <span className="link-icon">{routeItem.props.icon}</span>
              )}
              {routeItem.props?.label}
            </SidebarLink>
          );
        })}
      </SidebarBody>
      <SidebarFooter>
        <SidebarLink
          to={`${routes.settings.base}`}
          onClick={handleClick}
        >
          <span className="link-icon">
            <Icon name="settings" />
          </span>
          Settings
        </SidebarLink>
      </SidebarFooter>
    </SidebarNavWrapper>
  );
};

export default SidebarNav;
