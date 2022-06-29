import React, { useState } from "react";
import { imageData } from "../../../imagesData/imagesData";
import { slide as Menu } from "react-burger-menu";
import { styles } from "./stylesHamburgerMenu";
import { NavLink } from "react-router-dom";
import "./profileAvatarStyle.css";
import { useUser } from "../../../context/User.context";
import userApi from "../../../apis/userApi";

const ProfileAvatar = () => {
  const { currentUser, token, setCurrentUser, setToken } = useUser();
  const [open, setOpen] = useState(false);

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
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        isOpen={open}
        customBurgerIcon={<img src={imageData.avatar} alt="avatar" />}
      >
        <li className="hamburger-menu-el">
          <NavLink onClick={() => setOpen(false)} to="/">
            Home
          </NavLink>
        </li>
        <li className="hamburger-menu-el">
          <NavLink onClick={() => setOpen(false)} to="/about">
            About
          </NavLink>
        </li>
        <li className="hamburger-menu-el">
          <NavLink onClick={() => setOpen(false)} to="/contact">
            Contact
          </NavLink>
        </li>
        <li className="hamburger-menu-el">
          {currentUser ? (
            <NavLink onClick={() => setOpen(false)} to="/profile">
              Profile
            </NavLink>
          ) : (
            <NavLink onClick={() => setOpen(false)} to="/login">
              Login
            </NavLink>
          )}
        </li>

        <li className="hamburger-menu-el">
          {currentUser ? (
            <NavLink
              onClick={() => {
                setOpen(false);
                logOut();
              }}
              to="/"
            >
              Logout
            </NavLink>
          ) : (
            <NavLink onClick={() => setOpen(false)} to="/register">
              Register
            </NavLink>
          )}
        </li>
      </Menu>
    </div>
  );
};

export default ProfileAvatar;
