import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { useData } from "../../contexts/DataContext";
import API from "../../api/api";

import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { currentUser, setCurrentUser, setToken, isSpinning, setIsSpinning } =
    useData();

  useEffect(() => {
    setTimeout(() => {
      setIsSpinning(false);
    }, 1000);
  }, [setIsSpinning]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API().post("/users/login", {
        email: email,
        password: password,
      });
      setCurrentUser(data.user);
      setToken(data.token);
      localStorage.setItem("Token", JSON.stringify(data.token));
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  if (currentUser && !isSpinning) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={handleSubmit} className="loginForm">
      {!isSpinning && (
        <>
          <h1>Login</h1>
          <div className="inputAndLabel">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </div>
          <div className="inputAndLabel">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
            />
          </div>
          <div className="error">{error}</div>
          <button type="submit">Login</button>
        </>
      )}
    </form>
  );
}

export default Login;
