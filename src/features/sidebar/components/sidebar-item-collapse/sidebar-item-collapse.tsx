import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import cn from "classnames";
import { Icon, SidebarLink } from "shared/ui";
import { SidebarRoute } from "../sidebar-nav/constants";
import {
  SidebarItemCollapseContainer,
  SidebarItemCollapseButton,
} from "./sidebar-item-collapse.styled";
import { sidebarActions } from "features/sidebar/model";
import { useActionCreators } from "features/store";

type SidebarItemCollapseProps = {
  routeItem: SidebarRoute;
};

const SidebarItemCollapse: React.FC<SidebarItemCollapseProps> = ({
  routeItem,
}) => {
  const sidebar = useActionCreators(sidebarActions);
  const location = useLocation();
  const [open, setOpen] = useState(false);
  
  const handleClick = useCallback(() => {
    sidebar.setSidebarState(false);
  }, []);

  const className = useMemo(() => {
    return cn({
      ["active"]: open,
    });
  }, [open]);
  useEffect(() => {
    if (location.pathname.split('/').includes(routeItem.path)) {
      setOpen(true);
    }
  }, [routeItem]);
  return (
    <SidebarItemCollapseContainer>
      <SidebarItemCollapseButton
        className={className}
        onClick={() => setOpen(!open)}
      >
        <div className="button-content">
          {routeItem.props?.icon && (
            <span className="link-icon">{routeItem.props.icon}</span>
          )}
          {routeItem.props?.label}
        </div>
        <span className="button-chevron">
          {open ? <Icon name="chevronUp" /> : <Icon name="chevronDown" />}
        </span>
      </SidebarItemCollapseButton>
      {open &&
        routeItem.child?.map((child) => (
          <SidebarLink to={child.path} sublink key={child.key} onClick={handleClick}>
            {child.props?.label}
          </SidebarLink>
        ))}
    </SidebarItemCollapseContainer>
  );
};

export default SidebarItemCollapse;
