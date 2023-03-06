import { Icon, Profile } from "shared/ui";
import { ProfileEditorWrapper, ProfileEditorContainer } from "./profile-editor.styles";

type ProfileEditorProps = {
  editable?: boolean;
  handleReset?: () => void;
  handleClick?: () => void;
  profileImageURL?: string | undefined;
};

const ProfileEditor: React.FC<ProfileEditorProps> = ({editable, profileImageURL, handleClick, handleReset = () => {} }) => {
  return (
    <ProfileEditorWrapper>
      <ProfileEditorContainer>
        <Profile size={100} iconsSize={48} imageURL={profileImageURL} />
        <div className="icon" onClick={editable ? handleReset : handleClick}>
          {
            editable ? <Icon name="close" /> : <Icon name="edit" />
          }
        </div>
      </ProfileEditorContainer>
    </ProfileEditorWrapper>
  );
};

export default ProfileEditor;
