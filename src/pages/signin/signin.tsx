import { SigninForm } from "features/auth";
import { AuthLayout } from "shared/ui";

const Signin: React.FC = () => {
  return (
    <AuthLayout>
      <SigninForm />
    </AuthLayout>
  );
};

export default Signin;
