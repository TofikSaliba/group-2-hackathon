import React from "react";
import "./languageChooserStyle.css";
import Dropdown, { Option } from "react-dropdown";
import "react-dropdown/style.css";
import { Language, useLanguage } from "../../context/Language.context";

const LanguageChooser = () => {
    const { setChosenLanguage } = useLanguage();

    const options = [
        {
            label: "Hebrew",
            value: "he",
        },
        {
            label: "Arabic",
            value: "ar",
        },
        {
            label: "Russian",
            value: "ru",
        },
        { label: "English", value: "en" },
    ];
    const defaultOption = { label: "English", value: "en" };

    const onLanguageChange = (selectedLang: Option) => {
        setChosenLanguage(selectedLang as Language);
    };

    return (
        <div className="selector-container">
            <h3 className="selector-label">Language</h3>
            <Dropdown
                options={options}
                onChange={onLanguageChange}
                value={defaultOption}
                placeholder="Select an option"
                className="language-chooser"
                menuClassName="languages-drop-down"
            />
        </div>
    );
};

export default LanguageChooser;
