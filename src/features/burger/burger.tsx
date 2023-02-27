import { sidebarActions } from "features/sidebar/model";
import { useActionCreators } from "features/store";
import { Button, Icon } from "shared/ui";

const Burger: React.FC = () => {
  const sidebar = useActionCreators(sidebarActions);
  return (
    <Button
      onlyIcon
      prefix={<Icon name="burger" />}
      variant="text"
      onClick={() => {
        sidebar.setSidebarState(true);
      }}
    />
  );
};

export default Burger;