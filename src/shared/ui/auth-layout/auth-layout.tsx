import {
  AuthLayoutStyled,
  AuthBackground,
  AuthContent,
  AuthContentChild,
} from "./auth-layout.styles";

const AuthLayout: React.FC<{
  children: React.ReactNode | React.ReactNode[];
}> = ({ children }) => {
  return (
    <AuthLayoutStyled>
      <AuthBackground />
      <AuthContent>
        <AuthContentChild>{children}</AuthContentChild>
      </AuthContent>
    </AuthLayoutStyled>
  );
};

export default AuthLayout;
