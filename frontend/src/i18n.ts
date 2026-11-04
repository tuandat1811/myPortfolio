import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

const SUPPORTED_LANGUAGES = ['en', 'vi'];
const savedLanguage = localStorage.getItem('APP_LANGUAGE');
const initialLanguage = savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage) ? savedLanguage : 'en';

i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        supportedLngs: SUPPORTED_LANGUAGES,
        lng: initialLanguage,
        interpolation: {
            escapeValue: false, 
        },
        backend: {
            loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}.json`,
        },
        react: {
            useSuspense: false 
        }
    });

export default i18n;
