import {
  LayoutDashboard,
  Users,
  BarChart3,
  Award,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

import "./Sidebar.css";

const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    label: "Workforce",
    icon: Users,
    path: "/workforce",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
  {
    label: "Skills",
    icon: Award,
    path: "/skills",
  },
  {
    label: "Reports",
    icon: FileText,
    path: "/reports",
  },
  {
    label: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

function Sidebar({
  isOpen,
  setIsOpen,
  isCollapsed,
  setIsCollapsed,
}) {
  const handleNavigation = (path) => {
    window.history.pushState({}, "", path);

    window.dispatchEvent(new PopStateEvent("popstate"));

    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  const handleLogout = () => {
    alert("Logout clicked");
  };

  return (
    <>
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`sidebar 
          ${isCollapsed ? "sidebar-collapsed" : ""}
          ${isOpen ? "sidebar-mobile-open" : ""}
        `}
      >
        {/* Logo Section */}
        <div className="sidebar-logo-section">
          <div className="brand-logo">
            <span>✦</span>
          </div>

          {!isCollapsed && (
            <div className="brand-content">
              <h2>WORKFORCE</h2>
              <span>ANALYTICS</span>
            </div>
          )}

          <button
            className="mobile-close-btn"
            onClick={() => setIsOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Desktop Collapse Button */}
        <button
          className="sidebar-collapse-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          <Menu size={18} />
        </button>

        {/* Main Menu */}
        <div className="sidebar-menu-wrapper">
          <p className="sidebar-menu-title">
            MAIN MENU
          </p>

          <nav className="sidebar-menu">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  className={`sidebar-menu-item ${
                    window.location.pathname === item.path
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleNavigation(item.path)
                  }
                  title={
                    isCollapsed
                      ? item.label
                      : ""
                  }
                >
                  <Icon size={19} />

                  {!isCollapsed && (
                    <span>{item.label}</span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Logout */}
        <div className="sidebar-footer">
          <button
            className="logout-button"
            onClick={handleLogout}
            title={
              isCollapsed
                ? "Logout"
                : ""
            }
          >
            <LogOut size={19} />

            {!isCollapsed && (
              <span>Logout</span>
            )}
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;