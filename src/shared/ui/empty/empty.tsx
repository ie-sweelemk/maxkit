import cn from 'classnames';
import Icon from "../icons";
import { EmptyContainer } from './empty.styled';

type EmptyProps = {
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  style?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  image?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

const Empty: React.FC<EmptyProps> = ({
  className,
  rootClassName,
  prefixCls ='empty',
  image = <Icon name="empty" />,
  description,
  children,
  imageStyle,
  ...restProps
}) => {
  const des = typeof description !== 'undefined' ? description : 'No data';
  const alt = typeof des === 'string' ? des : 'empty';

  let imageNode: React.ReactNode = null;

  if (typeof image === 'string') {
    imageNode = <img alt={alt} src={image} />;
  } else {
    imageNode = image;
  }
  return (
    <EmptyContainer
      className={cn(
        prefixCls,
        className,
        rootClassName,
      )}
      {...restProps}
    >
      <div className={`${prefixCls}-image`} style={imageStyle}>
        {imageNode}
      </div>
      {des && <div className={`${prefixCls}-description`}>{des}</div>}
      {children && <div className={`${prefixCls}-footer`}>{children}</div>}
    </EmptyContainer>
  )
}

export default Empty;