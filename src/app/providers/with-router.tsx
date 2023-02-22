import { BrowserRouter } from "react-router-dom";

export const withRouter = (Component: any) => () => {
  return (
    <BrowserRouter>
      <Component />
    </BrowserRouter>
  );
};
