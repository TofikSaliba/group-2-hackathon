import React from "react";
import LanguageChooser from "../languageChooser/LanguageChooser";
import Logo from "../logo/Logo";
import ProfileAvatar from "../profile/profileAvatar/ProfileAvatar";

import { useEffect } from "react";
import "./navbarStyle.css";
import RegionChooser from "../regionChoose/RegionChooser";

const Navbar = () => {
<<<<<<< HEAD:client/src/components/navbar/Navbar.jsx
  return (
    <div className="navbar-container">
      <Logo></Logo>
      <div className="right-navbar-container">
        <LanguageChooser></LanguageChooser>
        <ProfileAvatar></ProfileAvatar>
      </div>
    </div>
  );
=======
    return (
        <div className="navbar-container">
            <Logo></Logo>
            <div className="right-navbar-container">
                <RegionChooser></RegionChooser>
                <LanguageChooser></LanguageChooser>
                <ProfileAvatar></ProfileAvatar>
            </div>
        </div>
    );
>>>>>>> 2a08dcc93ccb0eb3656d27c2bd99b8d0b6477333:client/src/components/navbar/Navbar.tsx
};

export default Navbar;
