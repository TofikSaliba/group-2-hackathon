import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { useData } from "../../contexts/DataContext";
import API from "../../api/api";

import "./register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
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
    if (password !== confirm) {
      setError("Passwords do not match!");
      return;
    }
    try {
      const { data } = await API().post("/users/signUp", {
        name,
        email,
        password,
      });
      setCurrentUser(data.newUser);
      setToken(data.token);
      localStorage.setItem("Token", JSON.stringify(data.token));
      setName("");
      setEmail("");
      setPassword("");
      setConfirm("");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  if (currentUser && !isSpinning) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={handleSubmit} className="registerForm">
      {!isSpinning && (
        <>
          <h1>Register an account</h1>
          <div className="inputAndLabel">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              id="name"
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
            />
          </div>
          <div className="inputAndLabel">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
          </div>
          <div className="inputAndLabel">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              required
            />
          </div>
          <div className="inputAndLabel">
            <label htmlFor="confirm">Confirm password</label>
            <input
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              id="confirm"
              type="password"
            />
          </div>

          <div className="error">{error}</div>
          <button type="submit">Register</button>
        </>
      )}
    </form>
  );
}

export default Register;
