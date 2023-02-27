import { BadgeContainer, BadgeChildContainer } from "./badge.styled";

type BadgeOwnProps = {
  children: React.ReactNode;
  dot?: boolean;
};

type BadgeProps = BadgeOwnProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof BadgeOwnProps>;

const Badge: React.FC<BadgeProps> = ({ children, dot }) => {
  return (
    <BadgeContainer>
      <BadgeChildContainer>
        {children}
        {dot ? <sup className="badge-dot" /> : null}
      </BadgeChildContainer>
    </BadgeContainer>
  );
};

export default Badge;
