import i18n from "i18next"
import detector from "i18next-browser-languagedetector"
import backend from "i18next-http-backend"
import { initReactI18next } from "react-i18next"
import en from "./localization/en.json"
import ua from "./localization/ua.json"

const resources = {
  en: {
    translation: en,
  },
  ua: {
    translation: ua,
  },
}

i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ua",
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18n
