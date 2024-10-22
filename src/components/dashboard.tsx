import React, { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  MenuIcon,
  Settings,
  HelpCircle,
  Users,
  X,
  ChevronDown,
} from "lucide-react";

interface DashboardProps {
  children: ReactNode;
}

interface MenuItem {
  name: string;
  route?: string;
}

interface MenuSection {
  title: string;
  icon: JSX.Element;
  items: MenuItem[];
}

export default function Dashboard({ children }: DashboardProps) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleSidebar = (): void => setSidebarOpen(!sidebarOpen);

  const menuItems: MenuSection[] = [
    {
      title: "Manage Opportunities",
      icon: <Users className="h-5 w-5" />,
      items: [
        { name: "Event Dashboard", route: "/manage-org-home" },
        { name: "View All Applications", route: "/view-applications"  },
        { name: "Connections & Page View Report", route:"/event-statistics" },
        // { name: "Chat With Volunteers", route:"/organization-chat" },
      ],
    },
    {
      title: "Manage Organization",
      icon: <Settings className="h-5 w-5" />,
      items: [
        { name: "Organization Profile", route: "/org-profile" },
        { name: "Edit Organization Profile", route: "/edit-org-profile" },
        { name: "Manage Org Members", route: "/manage-org-members" },
        { name: "Add a New Organization", route: "/create-org-profile" },
      ],
    },
    {
      title: "Resources and Help",
      icon: <HelpCircle className="h-5 w-5" />,
      items: [
        { name: "Help Center", route: "/help-center" },
        { name: "Tips to Create Better Opportunities", route: "/better-opportunities" },
      ],
    },
  ];

  const handleNavigation = (route: string | undefined): void => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <div
        className={`fixed inset-y-0 left-0 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition duration-200 ease-in-out md:flex flex-col w-64 bg-white shadow-lg z-30`}
      >
        <div className="flex justify-between items-center p-4 bg-primary text-primary-foreground">
          <h2 className="text-lg font-semibold">Organization Dashboard</h2>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleSidebar}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="p-4">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => handleNavigation("/")}
          >
            Back to Main Page
          </Button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          {menuItems.map((item, index) => (
            <Collapsible key={index}>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-3">{item.title}</span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                {item.items.map((subItem, subIndex) => (
                  <a
                    key={subIndex}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 pl-12"
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.preventDefault();
                      handleNavigation(subItem.route);
                    }}
                  >
                    {subItem.name}
                  </a>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </nav>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between p-4 bg-white shadow">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleSidebar}
          >
            <MenuIcon className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold text-gray-800">
            Dr. Yanga's Colleges, Inc.
          </h1>
        </header>

        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
}
