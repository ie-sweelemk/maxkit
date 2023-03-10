import { Toast } from "shared/ui";

export const withToast = (Component: any) => () => {
  return (
    <>
      <Component />
      <Toast />
    </>
  );
};
