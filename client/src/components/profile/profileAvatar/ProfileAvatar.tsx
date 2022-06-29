import React from "react";
import { imageData } from "../../../imagesData/imagesData";
import  {  slide as Menu} from "react-burger-menu";
import { styles } from "./stylesHamburgerMenu";
import { NavLink } from "react-router-dom";
import "./profileAvatarStyle.css";

const ProfileAvatar = () => {
<<<<<<< HEAD:client/src/components/profile/profileAvatar/ProfileAvatar.jsx
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
          <NavLink to="/login">Login</NavLink>
        </li>
      </Menu>
    </div>
  );
=======
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
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li className="hamburger-menu-el">
                    <NavLink to="/register">Register</NavLink>
                </li>
            </Menu>
        </div>
    );
>>>>>>> 2a08dcc93ccb0eb3656d27c2bd99b8d0b6477333:client/src/components/profile/profileAvatar/ProfileAvatar.tsx
};

export default ProfileAvatar;
