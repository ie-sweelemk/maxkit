import Icon from "../icons";
import { ProfileWrapper } from "./profile.styled";

type ProfileProps = {
  imageURL?: string;
  size?: string | number;
}

const Profile: React.FC<ProfileProps> = ({imageURL, size = '44'}) => {
  return (
    <ProfileWrapper size={size}>
      {
        imageURL ? (
          <img src={imageURL} alt='profile' />
        ) : (
          <Icon name="user" />
        )
      }
    </ProfileWrapper>
  )
}

export default Profile;