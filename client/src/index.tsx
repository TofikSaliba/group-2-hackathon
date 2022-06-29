import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import "./assets/fonts/wonderland.ttf";
import LanguageProvider from "./context/Language.context";
import PreferencesProvider from "./context/Preferences.context";
import UserProvider from "./context/User.context";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    // <React.StrictMode>
    <I18nextProvider i18n={i18next}>
        <LanguageProvider>
            <PreferencesProvider>
                <UserProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </UserProvider>
            </PreferencesProvider>
        </LanguageProvider>
    </I18nextProvider>

    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
