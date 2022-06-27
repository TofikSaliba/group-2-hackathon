import React from "react";
import { NavLink } from "react-router-dom";
import { useData } from "../../contexts/DataContext";

import API from "../../api/api";

import "./header.css";

function Header() {
  const { currentUser, setCurrentUser, token, setToken } = useData();

  const logOut = async () => {
    try {
      const options = {
        headers: { Authorization: token },
      };
      await API(options).post("/users/logout");
    } catch (err) {
      console.log(err);
    } finally {
      setCurrentUser(null);
      setToken(null);
      localStorage.removeItem("Token");
    }
  };

  return (
    <div className="navBar">
      <div className="navLeft">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="navRight">
        {!currentUser && (
          <>
            <NavLink to="/Login">Login</NavLink>
            <NavLink to="/Register">Register</NavLink>
          </>
        )}
        {currentUser && (
          <NavLink onClick={logOut} to="/">
            Logout
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Header;
