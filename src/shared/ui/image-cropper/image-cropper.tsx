import { forwardRef } from "react";
import AvatarEditor, { AvatarEditorProps } from "react-avatar-editor";

const ImageCropper = forwardRef<AvatarEditor, AvatarEditorProps>(
  ({ ...props }, ref) => (
    <div style={{
      marginBottom: 24,
      display: "flex"
    }}>
      <AvatarEditor ref={ref} {...props} />
    </div>
  )
);

export default ImageCropper;
