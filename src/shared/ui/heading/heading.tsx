import {
  HeadingAction,
  HeadingContainer,
  HeadingSubtitle,
  HeadingTitle,
  HeadingWrapper,
} from "./heading.styled";

type HeadingProps = {
  title: string;
  subtitle?: string | React.ReactNode;
  action?: React.ReactNode;
};
const Heading: React.FC<HeadingProps> = ({ title, subtitle, action }) => {
  return (
    <HeadingContainer>
      <HeadingWrapper>
        <HeadingTitle>{title}</HeadingTitle>
        {subtitle ? (
          <HeadingSubtitle>
            {typeof subtitle === "string" ? <span>{subtitle}</span> : subtitle}
          </HeadingSubtitle>
        ) : null}
      </HeadingWrapper>
      {action ? <HeadingAction>{action}</HeadingAction> : null}
    </HeadingContainer>
  );
};

export default Heading;
