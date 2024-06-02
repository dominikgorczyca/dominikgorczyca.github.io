import { i18n } from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: {
                title: "Multi-language app",
                about: "About",
                technologies: "Technologies",
                projects: "Projects",
                contact: "Contact",
            },
        },
        pl: {
            translation: {
                title: "Aplikacja wielojęzyczna",
                about: "O mnie",
                technologies: "Technologie",
                projects: "Projekty",
                contact: "Kontakt",
            },
        },
    },
});

export default i18n;
