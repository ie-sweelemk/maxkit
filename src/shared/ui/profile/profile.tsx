import Icon from "../icons";
import { ProfileWrapper } from "./profile.styled";

type ProfileProps = {
  imageURL?: string;
  size?: string | number;
  iconsSize?: string | number;
}

const Profile: React.FC<ProfileProps> = ({imageURL, size = '44', iconsSize = '24'}) => {
  return (
    <ProfileWrapper size={size} iconSize={iconsSize}>
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