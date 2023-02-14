import { Routing } from "pages";
import AppProviders from "./providers/with-providers";

const App = () => {
  return (
    <AppProviders>
      <Routing />
    </AppProviders>
  );
};

export default App;
