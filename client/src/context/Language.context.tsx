import React, { ReactNode, useContext, useState, useEffect } from "react";
import { useTranslation, TFunction } from "react-i18next";
import common_en from "../translations/en/common.json";
import common_he from "../translations/he/common.json";
import common_ar from "../translations/ar/common.json";
import common_ru from "../translations/ru/common.json";
import i18next from "i18next";

i18next.init({
    interpolation: { escapeValue: false },
    lng: "en",
    resources: {
        en: {
            common: common_en,
        },
        he: {
            common: common_he,
        },
        ar: {
            common: common_ar,
        },
        ru: {
            common: common_ru,
        },
    },
});

interface LanguageProviderProps {
    children: ReactNode;
}
export interface Language {
    label: string;
    value: string;
}

interface LanguageContextValue {
    chosenLanguage: Language;
    setChosenLanguage: (language: Language) => void;
    t: any;
    i18n: any;
}

const emptyLanguageContextValue: LanguageContextValue = {
    chosenLanguage: { label: "English", value: "en" },
    setChosenLanguage: function (language: Language): void {},
    t: function () {},
    i18n: undefined,
};

const LanguageContext = React.createContext<LanguageContextValue>(
    emptyLanguageContextValue
);

export const useLanguage = () => useContext(LanguageContext);

const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const [chosenLanguage, setChosenLanguage] = useState(
        emptyLanguageContextValue.chosenLanguage
    );
    const { t, i18n } = useTranslation("common");

    useEffect(() => {
        i18n.changeLanguage(chosenLanguage.value);
    }, [chosenLanguage]);

    const value: LanguageContextValue = {
        chosenLanguage,
        setChosenLanguage,
        t,
        i18n,
    };
    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;
