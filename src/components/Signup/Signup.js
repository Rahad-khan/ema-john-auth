import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="login-container">
      <form action="" className="login-form">
        <h1 className="form-title">Sign Up</h1>
        <div className="form-information">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Confirm Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <button className="form-btn" type="submit">Sign Up</button>
          <p>
          Already have an account? 
            <Link to="/login" className="form-link">
            Login
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

export default Signup;