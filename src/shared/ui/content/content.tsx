import { spacing } from "../theme/config/variables";
import { ContentStyled } from "./content.styles";

type ContentOwnProps = {
  children: React.ReactNode | React.ReactNode[];
  withShadow?: boolean;
  full?: boolean;
  space?: keyof typeof spacing;
  flexAria?: number;
};

type ContentProps = ContentOwnProps & React.HTMLAttributes<HTMLDivElement>;

const Content: React.FC<ContentProps> = ({
  children,
  withShadow = false,
  space = "xl",
  full = false,
  flexAria,
  ...other
}) => {
  return (
    <ContentStyled withShadow={withShadow} space={space} full={full} flexAria={flexAria} {...other}>
      {children}
    </ContentStyled>
  );
};

export default Content;
