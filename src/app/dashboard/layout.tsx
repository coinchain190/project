import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1">
          <SidebarTrigger />
          <Header />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
};

export default DashboardLayout;
