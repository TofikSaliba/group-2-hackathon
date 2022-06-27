import React from "react";
import { imageData } from "../../../imagesData/imagesData";
import { slide as Menu } from "react-burger-menu";
import { styles } from "./stylesHamburgerMenu";
import "./profileAvatarStyle.css";

const ProfileAvatar = () => {
    const handleOnOpen = () => {};

    return (
        // <div className="avatar-container">
        <Menu
            className="hamburger-menu"
            styles={styles}
            right
            customBurgerIcon={<img src={imageData.avatar} alt="avatar" />}
        ></Menu>
        // </div>
    );
};

export default ProfileAvatar;
