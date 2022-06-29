import React from "react";
import LanguageChooser from "../languageChooser/LanguageChooser";
import Logo from "../logo/Logo";
import ProfileAvatar from "../profile/profileAvatar/ProfileAvatar";
import "./navbarStyle.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Logo></Logo>
      <div className="right-navbar-container">
        <LanguageChooser></LanguageChooser>
        <ProfileAvatar></ProfileAvatar>
      </div>
    </div>
  );
};

export default Navbar;
