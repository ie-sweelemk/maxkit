import { AuthProvider } from "features/auth-provider";


export const withAuth = (Component: any) => () => {
  return (
    <AuthProvider>
      <Component />
    </AuthProvider>
  );
};
