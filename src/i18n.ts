import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      menu: 'Menu',
      medicareBasics: 'Medicare Basics',
      coverageOptions: 'Coverage Options',
      enrollmentHelp: 'Enrollment Help',
      resources: 'Resources',
      findAgent: 'Find Agent',
      careers: 'Careers',
      contactUs: 'Contact Us',
      // Add more translations as needed
    }
  },
  es: {
    translation: {
      menu: 'Menú',
      medicareBasics: 'Conceptos Básicos de Medicare',
      coverageOptions: 'Opciones de Cobertura',
      enrollmentHelp: 'Ayuda con la Inscripción',
      resources: 'Recursos',
      findAgent: 'Encontrar Agente',
      careers: 'Carreras',
      contactUs: 'Contáctenos',
      // Add more translations as needed
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;