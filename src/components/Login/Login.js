import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/order";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onHandlLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  if (user || user1) {
    navigate(from, { replace: true });
  }
  return (
    <div className="login-container">
      <div className="login-form">
        <form action="" onSubmit={onHandlLogin}>
          <h1 className="form-title">Login</h1>
          <div className="form-information">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                onBlur={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                onBlur={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                required
              />
            </div>
            <p className="error">{error}</p>
            <p>{loading && "Loading...."}</p>
            <button className="form-btn" type="submit">
              Login
            </button>
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
          </div>
        </form>
        <button onClick={() => signInWithGoogle()} className="google-btn">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
