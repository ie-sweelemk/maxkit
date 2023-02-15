import { HTMLAttributes } from "react";
import cn from 'classnames';

const TITLE_ELE_LIST = [1, 2, 3, 4, 5, 6] as const;


type TitleOwnProps = {
  children: React.ReactNode;
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  level?: typeof TITLE_ELE_LIST[number];
};

type TitleProps = TitleOwnProps &
  Omit<HTMLAttributes<HTMLHeadElement>, keyof TitleOwnProps>;

const Title: React.FC<TitleProps> = ({ children, level = 1, className, ...restProps }) => {
  let Component: keyof JSX.IntrinsicElements;
  const classNames = cn(
    'typography',
    className
  )
  
  if (TITLE_ELE_LIST.includes(level)) {
    Component = `h${level}`;
  } else {
    Component = 'h1';
  }
  return (
    <Component className={classNames} {...restProps}>{children}</Component>
  )
}
export default Title;
