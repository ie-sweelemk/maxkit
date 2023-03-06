import cn from "classnames";
import { NavLinkProps } from "react-router-dom";
import Icon from "../icons";
import { Link } from "./settings-link.styled";

type SettingsLinkOwnProps = {
  className?: string;
};

type SettingsLinkProps = SettingsLinkOwnProps &
  Omit<NavLinkProps, keyof SettingsLinkOwnProps>;

const SettingsLink: React.FC<SettingsLinkProps> = ({ ...props }) => {
  const className = cn("nav-link", props.className);

  return (
    <Link className={className} {...props}>
      <>{props.children}</>
      <Icon name="cherronRight" />
    </Link>
  );
};

export default SettingsLink;
