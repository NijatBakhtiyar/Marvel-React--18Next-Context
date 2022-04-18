import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "./constants/language/en.json";
import TR from "./constants/language/tr.json";
import FR from "./constants/language/fr.json";

i18n
    .use(initReactI18next)
    .init({
        lng: "tr",
        fallbackLng: "tr",
        resources: {
            fr: {
                translation: FR
            },
            en: {
                translation: EN,
            },
            tr: {
                translation: TR
            },
        },
        debug: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
