import Dropzone, {DropzoneProps} from "react-dropzone";
import Icon from "../icons";
import { FileUploaderContainer } from "./file-uploader.styles";

const FileUploader: React.FC<DropzoneProps> = ({...props}) => {
  return (
    <FileUploaderContainer>
      <Dropzone {...props}>
        {({ getRootProps, getInputProps }) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <div {...getRootProps()} className="dropzone">
            <input
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...getInputProps()}
            />
            <div className="rectangle">
              <div className="rectangle-body">
                <span className="icon">
                  <Icon name="galleryAdd" />
                </span>
                Click or drop your new image here
              </div>
            </div>
          </div>
        )}
      </Dropzone>
    </FileUploaderContainer>
  );
};

export default FileUploader;
