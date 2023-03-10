import { Slide, toast } from "react-toastify";
import { TOAST_ID } from "shared/constants";
import { Icon } from "shared/ui";
import { CloseButton } from "./toast.styles";

type ToastLabels = {
  [key: string]: {
    icon: React.ReactNode;
    title: string;
  };
};

const toastLabels: ToastLabels = {
  success: {
    icon: <Icon name="checkmark" />,
    title: "",
  },
  error: {
    icon: <Icon name="close" />,
    title: "Something went wrong!",
  },
};

const toastConfig = {
  containerId: TOAST_ID,
  transition: Slide,
  closeButton: (
    <CloseButton>
      <Icon name="close" />
    </CloseButton>
  ),
};

const customToast = (type: keyof ToastLabels, str: string) => {
  const toastType = toastLabels[type];
  return (
    <div className="toast-container">
      {toastType.icon ? (
        <div className="toast-icon">{toastType.icon}</div>
      ) : null}
      <div className="toast-body">
        {toastType.title ? (
          <div className="title">{toastType.title}</div>
        ) : null}
        <div className="message">{`${str}`}</div>
      </div>
    </div>
  );
};

export const successToast = (message: string) =>
  toast(customToast("success", message), {
    ...toastConfig,
    ...{ className: "toast-success" },
  });

export const errorToast = (message: string) =>
  toast(customToast("error", message), {
    ...toastConfig,
    ...{ className: "toast-error" },
  });
