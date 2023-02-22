import { Link as RouterLink, LinkProps } from "react-router-dom";
import cn from "classnames";

const Link: React.FC<LinkProps> = ({children, className, rel, ...restProps}) => {
  const classNames = cn("typography link", className);
  const mergedProps = {
    ...restProps,
    rel: rel === undefined && restProps.target === '_blank' ? 'noopener noreferrer' : rel,
  };

  return (
    <RouterLink className={classNames} {...mergedProps}>{children}</RouterLink>
  )
}
export default Link;
