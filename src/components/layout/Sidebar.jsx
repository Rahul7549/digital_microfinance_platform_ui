import { useState, useEffect } from "react";
import {
  NavLink,
  useLocation
} from "react-router-dom";
import {
  FaChartLine,
  FaUsers,
  FaCog,
  FaChevronDown
} from "react-icons/fa";
import "./Sidebar.css";
import { FaUniversity } from "react-icons/fa";

export default function Sidebar({ collapsed }) {
  const [openSub, setOpenSub] = useState(false);
  const location = useLocation();

  // Detect if user is inside /users routes
  const isUsersActive = location.pathname.startsWith("/users");

  // Auto-open submenu when navigating to child route
  useEffect(() => {
    if (isUsersActive) {
      setOpenSub(true);
    }
  }, [isUsersActive]);

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <nav className="menu">

        <div className="sidebar-logo">
          <FaUniversity className="logo-icon" />
          {!collapsed && <span className="logo-text">DMF Bank</span>}
        </div>

        {/* ================= Dashboard ================= */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
        >
          <FaChartLine />
          {!collapsed && <span>Dashboard</span>}
        </NavLink>


        {/* ================= Users (Parent) ================= */}
        <div
          className={`menu-item ${isUsersActive ? "active" : ""}`}
          onClick={() => {
            if (!collapsed) {
              setOpenSub(!openSub);
            }
          }}
        >
          <FaUsers />

          {!collapsed && (
            <>
              <span>Users</span>
              <FaChevronDown
                className={`arrow ${openSub ? "rotate" : ""}`}
              />
            </>
          )}

          {/* Floating submenu (Collapsed Mode) */}
          {collapsed && (
            <div className="submenu-floating">
              <NavLink to="/users/list">
                User List
              </NavLink>

              <NavLink to="/users/create">
                Create User
              </NavLink>
            </div>
          )}
        </div>


        {/* Submenu (Expanded Mode) */}
        {openSub && !collapsed && (
          <div className="submenu">
            <NavLink to="/users/list">
              User List
            </NavLink>

            <NavLink to="/users/create">
              Create User
            </NavLink>
          </div>
        )}


        {/* ================= Settings ================= */}
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
        >
          <FaCog />
          {!collapsed && <span>Settings</span>}
        </NavLink>

      </nav>
    </aside>
  );
}
