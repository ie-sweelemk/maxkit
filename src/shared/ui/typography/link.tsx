import { AnchorHTMLAttributes } from "react";
import cn from "classnames";

type AnchorOwnProps = {
  children: string;
};

type AnchorProps = AnchorOwnProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof AnchorOwnProps>;

const Link: React.FC<AnchorProps> = ({children, className, rel, ...restProps}) => {
  const classNames = cn("typography link", className);
  const mergedProps = {
    ...restProps,
    rel: rel === undefined && restProps.target === '_blank' ? 'noopener noreferrer' : rel,
  };

  return (
    <a className={classNames} {...mergedProps}>{children}</a>
  )
}
export default Link;
