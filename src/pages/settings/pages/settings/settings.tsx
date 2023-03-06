import { GeneralForm } from "features/settings-forms";
import { Content, Divider, Typography } from "shared/ui";

const { Title } = Typography;

const Settings: React.FC = () => {
  return (
    <Content>
      <Title level={4}>Profile information</Title>
      <Divider />
      <GeneralForm />
    </Content>
  );
};

export default Settings;
