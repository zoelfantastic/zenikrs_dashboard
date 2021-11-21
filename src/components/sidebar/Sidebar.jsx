import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  ShoppingCartOutlined,
  Storefront,
} from "@mui/icons-material/";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Statistics</h3>
          <Link to="/store" className="link">
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
              Toko
            </li>
          </Link>
          <Link to="/products" className="link">
            <li className="sidebarListItem">
              <ShoppingCartOutlined className="sidebarIcon" />
              Produk
            </li>
          </Link>
        </div>
      </div>
    </div>
  );
}
