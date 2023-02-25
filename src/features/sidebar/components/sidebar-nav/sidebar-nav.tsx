import { sidebarActions } from "features/sidebar/model";
import { useActionCreators } from "features/store";
import { useCallback } from "react";
import { useLocation } from "react-router";
import { SidebarLink } from "shared/ui";
import { SidebarItemCollapse } from "../sidebar-item-collapse";
import { sidebarRoutes } from "./constants";
import { SidebarNavWrapper } from "./sidebar-nav-styled";

const SidebarNav: React.FC = () => {
  const location = useLocation();
  const sidebar = useActionCreators(sidebarActions);
  const handleClick = useCallback(() => {
    sidebar.setSidebarState(false);
  }, []);
  return (
    <SidebarNavWrapper>
      {sidebarRoutes.map((routeItem) => {
        return routeItem.child ? (
          <SidebarItemCollapse routeItem={routeItem} key={routeItem.key} />
        ) : (
          <SidebarLink
            to={routeItem.path}
            key={routeItem.key}
            isActive={location.pathname === routeItem.path}
            onClick={handleClick}
          >
            {routeItem.props?.icon && (
              <span className="link-icon">{routeItem.props.icon}</span>
            )}
            {routeItem.props?.label}
          </SidebarLink>
        );
      })}
    </SidebarNavWrapper>
  );
};

export default SidebarNav;
