import React from "react";
import "./topbar.css";
import logo from  "assets/avatar.jpg";
import { NotificationsNone, Language, Settings }  from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Zenikrs Point</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
              <Language />
              <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
              <Settings />
          </div>
          <img src={logo} alt="logo" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
