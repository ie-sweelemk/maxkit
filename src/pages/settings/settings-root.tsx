import { SettingsNav } from "entities/settings-nav";
import { Outlet } from "react-router";
import { Content, Heading } from "shared/ui";
import { SettingRootWrapper, SettingNavSide, SettingsContent } from "./settings-root.styles";
const SettingsRoot: React.FC = () => {
  return (
    <>
      <Heading title="Settings" />
      <SettingRootWrapper>
        <SettingNavSide>
          <Content>
            <SettingsNav />
          </Content>
        </SettingNavSide>
        <SettingsContent>
          <Outlet />
        </SettingsContent>
      </SettingRootWrapper>
    </>
  );
};

export default SettingsRoot;
