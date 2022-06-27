import React from "react";
import "./languageChooserStyle.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const LanguageChooser = () => {
    const options = ["Hebrew", "Arabic", "Russian", "English"];
    const defaultOption = "Choose different Language";

    const onLanguageChange = () => {};

    // return <div className="language-chooser">Choose different Language</div>;
    return (
        <Dropdown
            options={options}
            onChange={onLanguageChange}
            value={defaultOption}
            placeholder="Select an option"
        />
    );
};

export default LanguageChooser;
