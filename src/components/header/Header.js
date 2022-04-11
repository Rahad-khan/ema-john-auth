import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth)
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
          {user?<><button onClick={() => signOut(auth)} className="nav-signout">SignOut</button></>:<Link to="/login">Login</Link>}
        </div>
      </div>
    </div>
  );
};

export default Header;
