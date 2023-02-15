import { Content, Logo, Typography } from "shared/ui";
import {
  LoginFormContainer,
  LogoContainer,
  TitleContainer,
} from "./login-form.styles";

const { Title, Text } = Typography;

const LoginForm: React.FC = () => {
  return (
    <Content withShadow className="login-form-content">
      <LoginFormContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <TitleContainer>
          <Title className="title">
            Welcome back,
            <br /> to Max Kit
          </Title>
          <Text className="subtitle">Manage your kit, to stonk your sales</Text>
        </TitleContainer>
      </LoginFormContainer>
    </Content>
  );
};

export default LoginForm;
