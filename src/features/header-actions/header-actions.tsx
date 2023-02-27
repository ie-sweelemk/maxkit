import { useStateSelector } from "features/store";
import { Badge, Icon, Profile } from "shared/ui";
import { HeaderActionsContainer } from "./header-actions.styled";
import { profilePicture } from "./model";

const HeaderActions: React.FC = () => {
  const picture = useStateSelector(profilePicture);
  return (
    <HeaderActionsContainer>
      <Badge dot={false}>
        <Icon name="message" />
      </Badge>
      <Badge dot>
        <Icon name="alert" />
      </Badge>
      <Profile imageURL={picture} />
    </HeaderActionsContainer>
  )
}

export default HeaderActions;