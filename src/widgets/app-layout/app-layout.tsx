import { Sidebar } from "features/sidebar";
import { Outlet } from "react-router";
import { AppLayoutContainer, AppContent } from "./app-layout.styled";

const AppLayout: React.FC = () => {
  return (
    <AppLayoutContainer>
      <Sidebar />
      <AppContent>
        <Outlet />
      </AppContent>
    </AppLayoutContainer>
  );
};

export default AppLayout;