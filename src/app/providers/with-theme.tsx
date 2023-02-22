import { Theme } from "shared/ui";

export const withTheme = (Component: any) => () => {
  return (
    <Theme>
      <Component />
    </Theme>
  );
};
