import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, sendem, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [againPass, setAgainPass] = useState("");
  const [eros, setEros] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== againPass) {
      return setEros("Password not matched, Check Again");
    }
    createUserWithEmailAndPassword(email, password);
    if(error) {
     return setEros(error.message);
    } else {
      e.target.reset();
      setEros('');
    }
  };
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  if(user) {
    navigate('/order');
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <form action="" onSubmit={handleSubmit}>
          <h1 className="form-title">Sign Up</h1>
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
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                onBlur={(e) => setAgainPass(e.target.value)}
                type="password"
                name="confirm-password"
                id="confirm-password"
                required
              />
            </div>
            <p className="error">{eros}</p>
            <p>{loading && 'Loading....'}</p>
            <button className="form-btn" type="submit">
              Sign Up
            </button>
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
          </div>
        </form>
            <button onClick={() => signInWithGoogle()} className="google-btn">Continue with Google</button>
      </div>
      
    </div>
  );
};

export default Signup;
