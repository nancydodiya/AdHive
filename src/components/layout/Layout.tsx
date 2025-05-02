
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarProvider,
  useSidebar
} from "@/components/ui/sidebar";
import { Home, Users, BarChart2, FileText, Settings, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

const Layout = ({ children, showFooter = true }: LayoutProps) => {
  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/dashboard" },
    { icon: FileText, label: "Campaigns", path: "/campaigns" },
    { icon: BarChart2, label: "Analytics", path: "/analytics" },
    { icon: Users, label: "Agencies", path: "/for-agencies" },
    { icon: Settings, label: "Settings", path: "/account-settings" },
  ];

  return (
    <SidebarProvider>
      <div className="flex flex-col md:flex-row min-h-screen">
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton asChild tooltip={item.label}>
                        <Link to={item.path}>
                          <item.icon />
                          <span>{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        
        <div className="flex-grow flex flex-col">
          <div className="flex items-center p-4 border-b">
            <MobileSidebarTrigger />
            <Navbar />
          </div>
          <main className="flex-grow pt-4 md:pt-8">
            {children}
          </main>
          {showFooter && <Footer />}
        </div>
      </div>
    </SidebarProvider>
  );
};

// Mobile sidebar trigger component
const MobileSidebarTrigger = () => {
  const { toggleSidebar, isMobile } = useSidebar();
  
  if (!isMobile) return null;
  
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleSidebar}
      className="mr-2 md:hidden"
    >
      <Menu className="h-5 w-5" />
      <span className="sr-only">Toggle Menu</span>
    </Button>
  );
};

export default Layout;
