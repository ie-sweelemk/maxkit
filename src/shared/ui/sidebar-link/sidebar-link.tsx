import cn from "classnames";
import { LinkProps } from "react-router-dom";
import { Link } from "./sidebar-link.styled";

type SidebarLinkOwnProps = {
  isActive?: boolean;
  sublink?: boolean;
};

type SidebarLinkProps = SidebarLinkOwnProps & Omit<LinkProps, keyof SidebarLinkOwnProps>

const SidebarLink: React.FC<SidebarLinkProps> = ({isActive, sublink, ...props}) => {
  const classNames = cn('nav-link', {
    ["active"]: isActive,
    ["sublink"]: sublink,
  }, props.className)
  return (
    <Link className={classNames} {...props}></Link>
  )
}

export default SidebarLink;