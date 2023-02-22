import { store } from "features/store";
import { Provider } from "react-redux";


export const withStore = (Component: any) => () => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};
