import { routes } from "shared/constants";
import { SettingsLink } from "shared/ui";
const SettingsNav: React.FC = () => {
  return (
    <div>
      <SettingsLink to="" end>
        General
      </SettingsLink>
      <SettingsLink to={routes.settings.email} end>
        Email
      </SettingsLink>
      {/* <SettingsLink to="" end>
        Password
      </SettingsLink>
      <SettingsLink to="account" end>
        Notifications
      </SettingsLink> */}
    </div>
  );
};

export default SettingsNav;
