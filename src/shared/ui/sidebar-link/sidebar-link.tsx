import cn from "classnames";
import { NavLinkProps } from "react-router-dom";
import { Link } from "./sidebar-link.styled";

type SidebarLinkOwnProps = {
  sublink?: boolean;
  className?: string;
};

type SidebarLinkProps = SidebarLinkOwnProps & Omit<NavLinkProps, keyof SidebarLinkOwnProps>

const SidebarLink: React.FC<SidebarLinkProps> = ({sublink, ...props}) => {

  const className = cn('nav-link', {
    ["sublink"]: sublink,
  }, props.className);

  return (
    <Link className={className} {...props} ></Link>
  )
}

export default SidebarLink;