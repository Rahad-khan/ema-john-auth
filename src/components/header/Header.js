import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-section">
      <div className="nav-container">
        <Link to='/'>
          <img src={logo} alt="" />
        </Link>
        <div className="nav-items">
          <Link to="/order">Order</Link>
          <Link to="/order-review">Order Review</Link>
          <Link to="/manage-inventory">Manage Inventory</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
