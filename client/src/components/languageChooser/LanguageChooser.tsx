import React from "react";
import "./languageChooserStyle.css";
import Dropdown, { Option } from "react-dropdown";
import "react-dropdown/style.css";
import { useLanguage } from "../../context/Language.context";

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
    const defaultOption = "Choose different Language";

    const onLanguageChange = (selectedLang: Option) => {
        setChosenLanguage(selectedLang.value);
    };

    return (
        <Dropdown
            options={options}
            onChange={onLanguageChange}
            value={defaultOption}
            placeholder="Select an option"
            className="language-chooser"
            menuClassName="languages-drop-down"
        />
    );
};

export default LanguageChooser;
