import {Loader as LoaderIcon} from "../icons/loader";
import { LoaderStyled } from './loader.styled';

type LoaderProps = {
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({className = ''}) => (
  <LoaderStyled className={`icon-spin ${className}`}>
    <LoaderIcon />
  </LoaderStyled>
)

export default Loader;