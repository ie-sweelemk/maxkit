import { HTMLAttributes } from "react";
import cn from "classnames";
type TextOwnProps = {
  children: string;
};

type TextProps = TextOwnProps &
  Omit<HTMLAttributes<HTMLSpanElement>, keyof TextOwnProps>;

const Text: React.FC<TextProps> = ({ children, className, ...restProps }) => {
  const classNames = cn("typography", className);

  return <span className={classNames} {...restProps}>{children}</span>;
};
export default Text;
