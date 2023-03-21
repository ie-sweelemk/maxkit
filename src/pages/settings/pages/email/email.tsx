import { EmailForm } from "features/settings-forms";
import { Content, Divider, Typography } from "shared/ui";

const { Title } = Typography;

const Email: React.FC = () => {
  return (
    <Content>
      <Title level={4}>Manage Email</Title>
      <Divider />
      <EmailForm />
    </Content>
  )
}

export default Email;