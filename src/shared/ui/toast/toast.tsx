import { TOAST_ID } from "shared/constants";
import { ToastContainerStyled } from "./toast.styles";

const Toast: React.FC = () => {
  return (
    <ToastContainerStyled
      containerId={TOAST_ID}
      hideProgressBar
      closeOnClick
      draggable={false}
    />
  );
};

export default Toast;
