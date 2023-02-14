import { LoginForm } from "features/auth";
import { AuthLayout } from "shared/ui";

const Login: React.FC = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
