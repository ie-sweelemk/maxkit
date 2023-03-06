import { useRef, useState } from "react";
import AvatarEditor, { Position } from "react-avatar-editor";
import { Button, FileUploader, ImageCropper, Modal, Slider } from "shared/ui";
import {
  ActionButtons,
  ImageContainer,
  ModalContainer,
} from "./profile-editor-modal.styles";

type ProfileEditorModal = {
  isOpen: boolean;
  handleModalClose: () => void;
  onConfirm: (imageURL: string) => void;
  onCancel?: () => void;
};

const ProfileEditorModal: React.FC<ProfileEditorModal> = ({
  isOpen,
  handleModalClose,
  onConfirm,
}) => {
  const cropperRef = useRef<AvatarEditor>(null);
  const [image, setImage] = useState<File>();
  const [profileImage, setProfileImage] = useState<File>();
  const [position, setPosition] = useState<Position>({ x: 0.5, y: 0.5 });
  const [scale, setScale] = useState<number>(1);

  const handleScale = (v: number | number[]) => {
    const value = Array.isArray(v) ? v[0] : v;
    setScale(value);
  };

  const handleReset = () => {
    setImage(undefined);
    setProfileImage(undefined);
    setPosition({ x: 0.5, y: 0.5 });
    setScale(1);
    handleModalClose();
  };

  const handleChoose = () => {
    const picture = cropperRef.current?.getImageScaledToCanvas().toDataURL();
    onConfirm(picture!);
    handleReset();
  };

  return (
    <Modal
      isOpened={isOpen}
      onClose={() => {
        handleModalClose();
        handleReset();
      }}
      title="Change your profile image"
    >
      <ModalContainer>
        <ImageContainer>
          {profileImage && image ? (
            <>
              <ImageCropper
                ref={cropperRef}
                image={image}
                width={250}
                height={250}
                color={[0, 0, 0, 0.3]}
                borderRadius={8}
                position={position}
                onPositionChange={(v: Position) => setPosition(v)}
                rotate={0}
                scale={scale}
              />
              <Slider onChange={handleScale} />
            </>
          ) : (
            <FileUploader
              onDrop={(file: File[]) => {
                setImage(file[0]);
                setProfileImage(file[0]);
              }}
              accept={{ "image/jpeg": [".jpeg", ".png"] }}
            />
          )}
        </ImageContainer>
        <ActionButtons>
          <Button label="Cancel" onClick={handleReset} />
          <Button
            label="Choose"
            variant="primary"
            onClick={handleChoose}
            disabled={!profileImage}
          />
        </ActionButtons>
      </ModalContainer>
    </Modal>
  );
};

export default ProfileEditorModal;
