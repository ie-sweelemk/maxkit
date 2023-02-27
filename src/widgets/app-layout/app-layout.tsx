import { Sidebar } from "features";
import { Outlet } from "react-router";
import { Header } from "widgets";
import { AppLayoutContainer, AppContent, AppContentWrapper } from "./app-layout.styled";

const AppLayout: React.FC = () => {
  return (
    <AppLayoutContainer>
      <Sidebar />
      <AppContentWrapper>
        <Header />
        <AppContent>
          <Outlet />
        </AppContent>
      </AppContentWrapper>
    </AppLayoutContainer>
  );
};

export default AppLayout;
