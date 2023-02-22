import { HTMLAttributes } from "react";
import cn from "classnames";

type ParagraphOwnProps = {
  children: string;
};

type ParagraphProps = ParagraphOwnProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof ParagraphOwnProps>;

const Paragraph: React.FC<ParagraphProps> = ({children, className, ...restProps}) => {
  const classNames = cn("typography", className);
  return (
    <div className={classNames} {...restProps}>{children}</div>
  )
}
export default Paragraph;
