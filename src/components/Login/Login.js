import {  } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <form action="" className="login-form">
        <h1 className="form-title">Login</h1>
        <div className="form-information">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <button className="form-btn" type="submit">Login</button>
          <p>
            New to Ema-john?{" "}
            <Link to="/signup" className="form-link">
              Create New Account
            </Link>
          </p>
        <div className="legend">
            <div></div>
            <p>OR</p>
            <div></div>
        </div>
        <button className="google-btn">Continue with Google</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
