import { useState } from "react";

import Sidebar from "../Sidebar";
import Header from "../Header";
import Breadcrumbs from "../Breadcrumbs";

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] =
    useState(false);

  const [isSidebarCollapsed, setIsSidebarCollapsed] =
    useState(false);

  const [isDarkMode, setIsDarkMode] =
    useState(true);

  const handleThemeToggle = () => {
    setIsDarkMode((previous) => !previous);
  };

  return (
    <div
      className={`app-layout ${
        isDarkMode ? "dark-theme" : "light-theme"
      }`}
    >
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
      />

      <Header
        onMenuClick={() =>
          setIsSidebarOpen(true)
        }
        onThemeToggle={handleThemeToggle}
      />

      <main
        className={`main-content ${
          isSidebarCollapsed
            ? "main-content-expanded"
            : ""
        }`}
      >
        <Breadcrumbs />

        {children}
      </main>
    </div>
  );
}

export default Layout;