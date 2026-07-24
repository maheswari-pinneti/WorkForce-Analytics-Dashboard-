import {
  Search,
  Sun,
  Bell,
  Menu,
} from "lucide-react";

import "./Header.css";

function Header({
  onMenuClick,
  onThemeToggle,
}) {
  return (
    <header className="header">
      {/* Mobile Menu */}
      <button
        className="header-mobile-menu"
        onClick={onMenuClick}
      >
        <Menu size={21} />
      </button>

      {/* Search */}
      <div className="header-search">
        <Search size={17} />

        <input
          type="text"
          placeholder="Search employees, reports..."
        />
      </div>

      {/* Right Side */}
      <div className="header-right">
        {/* Greeting */}
        <div className="header-greeting">
          <span>
            Good morning, Anvesh
          </span>

          <span className="greeting-icon">
            👋
          </span>
        </div>

        {/* Theme */}
        <button
          className="header-icon-button"
          onClick={onThemeToggle}
          title="Toggle theme"
        >
          <Sun size={19} />
        </button>

        {/* Notifications */}
        <button
          className="header-icon-button notification-button"
          title="Notifications"
        >
          <Bell size={19} />

          <span className="notification-count">
            4
          </span>
        </button>

        {/* Avatar */}
        <div className="header-avatar">
          A
        </div>
      </div>
    </header>
  );
}

export default Header;