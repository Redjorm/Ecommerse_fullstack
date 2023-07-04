import React, { useState } from "react";
import useAuthentication from "../hooks/useAuthentication";
import "./styles/Login.css";
import { Link } from "react-router-dom";
import CloseSesion from "./CloseSesion";
const Login = () => {
  const token = localStorage.getItem("token");

  const { loginUser } = useAuthentication();

  const handleLogin = (e) => {
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = { email, password };
    loginUser(data);
  };

  if (token == null) {
    return (
      <div className="form__user">
        <div className="form__user-container">
          <h2>Welcome! Enter your email and password to continue</h2>
          <form onSubmit={handleLogin}>
            <div className="input__container">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className="input__container">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <button>Login</button>
          </form>
          <p>
            Don't have an account?{" "}
            <span>
              <Link to="/register">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    );
  } else {
    return <CloseSesion />;
  }
};

export default Login;
