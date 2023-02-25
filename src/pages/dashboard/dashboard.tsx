import { sidebarActions } from "features/sidebar/model";
import { useActionCreators } from "features/store";

const Dashboard: React.FC = () => {
  const sidebar = useActionCreators(sidebarActions);
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard;