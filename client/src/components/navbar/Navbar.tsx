import React from "react";
import LanguageChooser from "../languageChooser/LanguageChooser";
import Logo from "../logo/Logo";
import ProfileAvatar from "../profile/profileAvatar/ProfileAvatar";

import { useEffect } from "react";
import "./navbarStyle.css";
import RegionChooser from "../regionChoose/RegionChooser";

const Navbar = () => {
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
};

export default Navbar;
