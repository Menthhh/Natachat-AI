import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  FileText, 
  Upload, 
  Target, 
  Package, 
  MessageSquare, 
  MessageCircle,
  Settings,
  ChevronDown
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import natachatLogo from "@/assets/natachat-logo.png";

const menuItems = [
  { title: "Documents", url: "/documents", icon: FileText },
  { title: "Upload Documents Files", url: "/upload-files", icon: Upload },
  { title: "System Prompt", url: "/system-prompt", icon: Target },
  { title: "Product", url: "/product", icon: Package },
  { title: "User Feedback", url: "/user-feedback", icon: MessageSquare },
  { title: "Chat", url: "/chat", icon: MessageCircle },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-sidebar">
        {/* Logo Section */}
        <div className="flex items-center gap-3 p-4 border-b border-sidebar-border">
          <img src={natachatLogo} alt="Natachat AI" className={isCollapsed? "w-8 h-4" : "w-8 h-7"} />
          {!isCollapsed && (
            <div className="flex items-center gap-1">
              <span className="font-semibold text-sidebar-foreground">Natachat</span>
              <span className="font-semibold text-primary">AI</span>
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        }`
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span className="text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}