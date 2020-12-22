import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ru, en, es } from './index';

const config = {
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
    ru: {
      translation: ru,
    },
  },
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: 'en',
};

i18n
  .use(initReactI18next)
  .init(config);

export default i18n;
