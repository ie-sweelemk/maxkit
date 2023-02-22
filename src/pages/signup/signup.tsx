import { SignupForm } from "features/auth";
import { AuthLayout } from "shared/ui";

const Signup: React.FC = () => {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
};

export default Signup;
