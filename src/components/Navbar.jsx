import React from "react";
import "./navbar.scss";
import DateTime from "./DateTime";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="apple-icon">
          <img src="/navbar-icons/apple.svg" alt="" />
        </div>
        <div className="nav-item">
          <p>Akash Sharma</p>
        </div>
        <div className="nav-item">
          <p>File</p>
        </div>
        <div className="nav-item">
          <p>Window</p>
        </div>
        <div className="nav-item">
          <p>Terminal</p>
        </div>
        <div className="nav-item">
          <p>Help</p>
        </div>
      </div>

      <div className="nav-right">
        <div className="nav-icon">
          <i class="ri-battery-line"></i>
        </div>

        <div className="nav-icon">
          <img src="./navbar-icons/wifi.svg" alt="" />
        </div>
        <div className="nav-icon">
          <i class="ri-search-line"></i>
        </div>
        <div className="nav-icon">
          <i class="ri-emotion-happy-line"></i>
        </div>
        <div className="nav-item">
          <DateTime />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
