import { BrowserRouter } from "react-router-dom";
import { Theme } from "shared/ui";

type AppProvidersProps = {
  children: React.ReactNode;
};

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <Theme>{children}</Theme>
    </BrowserRouter>
  );
};

export default AppProviders;
