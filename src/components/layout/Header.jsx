import { FaBars } from "react-icons/fa";

import "./Header.css";

export default function Header({ toggleSidebar, collapsed, toggleMobile }) {
  return (
    <header className="header">
      <button
        className={`menu-btn desktop ${collapsed ? "collapsed" : ""}`}
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      {/* <button className="menu-btn mobile" onClick={toggleMobile}>
        <FaBars />
      </button> */}

      <h3>Digital Microfinance Platform</h3>
    </header>
  );
}
