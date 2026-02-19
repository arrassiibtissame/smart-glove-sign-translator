import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import {
  Home,
  BookOpen,
  RefreshCw,
  Settings,
  Moon,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export function SideBar() {
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="text-lg font-bold p-4">User</SidebarHeader>

      <SidebarContent className="ml-2">
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <NavLink to="/" end>
                {({ isActive }) => (
                  <SidebarMenuButton
                    className={
                      isActive
                        ? "bg-[#0E64D2] text-white"
                        : "hover:bg-[#0E64D2] hover:text-white"
                    }
                  >
                    <Home className="h-4 w-4" />
                    <span>Dashboard</span>
                  </SidebarMenuButton>
                )}
              </NavLink>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <NavLink to="/learning">
                {({ isActive }) => (
                  <SidebarMenuButton
                    className={
                      isActive
                        ? "bg-[#0E64D2] text-white"
                        : "hover:bg-[#0E64D2] hover:text-white"
                    }
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Learning</span>
                  </SidebarMenuButton>
                )}
              </NavLink>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <NavLink to="/history">
                {({ isActive }) => (
                  <SidebarMenuButton
                    className={
                      isActive
                        ? "bg-[#0E64D2] text-white"
                        : "hover:bg-[#0E64D2] hover:text-white"
                    }
                  >
                    <RefreshCw className="h-4 w-4" />
                    <span>History</span>
                  </SidebarMenuButton>
                )}
              </NavLink>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarMenu>
            <SidebarMenuItem>
              <NavLink to="/theme">
                {({ isActive }) => (
                  <SidebarMenuButton
                    className={
                      isActive
                        ? "bg-[#0E64D2] text-white"
                        : "hover:bg-[#0E64D2] hover:text-white"
                    }
                  >
                    <Moon className="h-4 w-4" />
                    <span>Theme</span>
                  </SidebarMenuButton>
                )}
              </NavLink>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <NavLink to="/settings">
                {({ isActive }) => (
                  <SidebarMenuButton
                    className={
                      isActive
                        ? "bg-[#0E64D2] text-white"
                        : "hover:bg-[#0E64D2] hover:text-white"
                    }
                  >
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </SidebarMenuButton>
                )}
              </NavLink>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <NavLink to="/logout">
                {({ isActive }) => (
                  <SidebarMenuButton
                    className={
                      isActive
                        ? "bg-[#0E64D2] text-white"
                        : "hover:bg-[#0E64D2] hover:text-white"
                    }
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </SidebarMenuButton>
                )}
              </NavLink>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 text-xs text-gray-400">
        © 2026 SignLearn
      </SidebarFooter>
    </Sidebar>
  );
}
