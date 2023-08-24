import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
.use(initReactI18next) // passes i18n down to react-i18next
.use(LanguageDetector)
.use(Backend)
.init({
  whitelist: ['en','ru','pl'],
  fallbackLng: "en",
  detection: {
    order: ['localStorage','cookie'],
    caches: ['localStorage','cookie']
  },
  interpolation: {
    escapeValue:false,
//    loadPath: '/assets/locales/{{lng}}/translation.json',
  },
  

});

export default i18n