import { ProfileEditorModal } from "entities/profile-editor-modal";
import { MutableRefObject, useImperativeHandle, useState } from "react";
import { PropfileEditor } from "shared/ui";
import { ProfilePhotoWrapper } from "./profile-photo.styles";

export type ProfilePhotoRef = {
  resetProfilePhoto: () => void;
}

type ProfilePhotoProps = {
  profilePhotoRef?: MutableRefObject<ProfilePhotoRef>;
  picture?: string;
  onChange: (image: string) => void;
};

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ picture, onChange, profilePhotoRef }) => {
  const [isProfileEditorModalOpen, setProfileEditorModalOpen] =
    useState<boolean>(false);
  const [profilePicture, setProfilePicture] = useState<string | undefined>(
    undefined
  );

  const handleClose = () => {
    setProfileEditorModalOpen(false);
  };

  const resetProfilePhoto = () => {
    setProfilePicture(undefined);
    onChange('');
  }

  useImperativeHandle(profilePhotoRef, () => ({
    resetProfilePhoto: () => {
      resetProfilePhoto()
    }
  }))
  
  return (
    <ProfilePhotoWrapper>
      <div className="form-label">Profile Photo</div>
      <PropfileEditor
        editable={!!profilePicture}
        profileImageURL={profilePicture || picture}
        handleClick={() => setProfileEditorModalOpen(true)}
        handleReset={resetProfilePhoto}
      />
      <ProfileEditorModal
        isOpen={isProfileEditorModalOpen}
        handleModalClose={handleClose}
        onConfirm={(imageURL) => {
          setProfilePicture(imageURL);
          onChange(imageURL);
          handleClose();
        }}
      />
    </ProfilePhotoWrapper>
  );
};

export default ProfilePhoto;
