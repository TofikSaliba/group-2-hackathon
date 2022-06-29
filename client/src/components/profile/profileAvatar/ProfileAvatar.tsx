import React from "react";
import { imageData } from "../../../imagesData/imagesData";
import { slide as Menu } from "react-burger-menu";
import { styles } from "./stylesHamburgerMenu";
import { NavLink } from "react-router-dom";
import "./profileAvatarStyle.css";
import { useUser } from "../../../context/User.context";
import userApi from "../../../apis/userApi";

const ProfileAvatar = () => {
  const { currentUser, token, setCurrentUser, setToken } = useUser();

  const logOut = async () => {
    try {
      const options = {
        headers: { Authorization: token },
      };
      await userApi(options).post("/users/logout");
    } catch (err) {
      console.log(err);
    } finally {
      setCurrentUser(null);
      setToken(null);
      localStorage.removeItem("Token");
    }
  };

  return (
    <div className="avatar-container">
      <Menu
        className="hamburger-menu"
        styles={styles}
        right
        customBurgerIcon={<img src={imageData.avatar} alt="avatar" />}
      >
        <li className="hamburger-menu-el">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hamburger-menu-el">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="hamburger-menu-el">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="hamburger-menu-el">
          {currentUser ? (
            <NavLink to="/profile">Profile</NavLink>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </li>

        <li className="hamburger-menu-el">
          {currentUser ? (
            <NavLink onClick={logOut} to="/">
              Logout
            </NavLink>
          ) : (
            <NavLink to="/register">Register</NavLink>
          )}
        </li>
      </Menu>
    </div>
  );
};

export default ProfileAvatar;
