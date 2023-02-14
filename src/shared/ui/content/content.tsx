import { type } from "os";
import { ContentStyled } from "./content.styles";

type ContentOwnProps = {
  children: React.ReactNode | React.ReactNode[];
  withShadow?: boolean;
  full?: boolean;
};

type ContentProps = ContentOwnProps & React.HTMLAttributes<HTMLDivElement>;

const Content: React.FC<ContentProps> = ({
  children,
  withShadow = false,
  ...other
}) => {
  return (
    <ContentStyled withShadow={withShadow} {...other}>
      {children}
    </ContentStyled>
  );
};

export default Content;
