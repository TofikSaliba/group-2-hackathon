import LanguageChooser from "../languageChooser/LanguageChooser";
import Logo from "../logo/Logo";
import ProfileAvatar from "../profile/profileAvatar/ProfileAvatar";

import "./navbarStyle.css";
import RegionChooser from "../regionChoose/RegionChooser";
import { usePreferences } from "../../context/Preferences.context";

const Navbar = () => {
  const { isHome } = usePreferences();
  return (
    <div className="navbar-container">
      <Logo></Logo>
      <div className="right-navbar-container">
        {isHome && <RegionChooser></RegionChooser>}
        <LanguageChooser></LanguageChooser>
        <ProfileAvatar></ProfileAvatar>
      </div>
    </div>
  );
};

export default Navbar;
