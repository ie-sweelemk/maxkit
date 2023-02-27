import { Burger, HeaderActions } from "features";
import { HeaderContainer, HeaderLeftSide, HeaderRightSide } from "./header.styled";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderLeftSide>
        <Burger />
      </HeaderLeftSide>
      <HeaderRightSide>
        <HeaderActions />
      </HeaderRightSide>
    </HeaderContainer>
  );
};

export default Header;
