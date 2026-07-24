import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../JSONTraductor/en.json";
import fr from "../JSONTraductor/fr.json";
import nl from "../JSONTraductor/nl.json";
import pt from "../JSONTraductor/pt.json";


i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        fr: { translation: fr },
        nl: { translation: nl },
        pt: { translation: pt }
    },
    lng: "en", // langue par défaut
    fallbackLng: "en",
    interpolation: { escapeValue: false }
});

export default i18n;
