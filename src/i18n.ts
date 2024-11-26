import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      menu: 'Medicare Information',
      medicareBasics: 'Medicare Basics',
      coverageOptions: 'Coverage Options',
      enrollmentHelp: 'Enrollment Help',
      resources: 'Resources',
      findAgent: 'Find Agent',
      careers: 'Careers',
      contactUs: 'Contact Us',
      hours: 'Hours: 8 a.m. to 8 p.m. 7 days a week',
      call: 'Call',
      freeConsultation: 'Free Consultation',
      // Navigation items
      medicareInformation: 'Medicare Information',
      // Footer items
      license: 'California License #6010059',
      companyName: 'Mazari Health Insurance Services, LLC',
      // Add more translations
    }
  },
  es: {
    translation: {
      menu: 'Información de Medicare',
      medicareBasics: 'Conceptos Básicos de Medicare',
      coverageOptions: 'Opciones de Cobertura',
      enrollmentHelp: 'Ayuda con la Inscripción',
      resources: 'Recursos',
      findAgent: 'Encontrar Agente',
      careers: 'Carreras',
      contactUs: 'Contáctenos',
      hours: 'Horario: 8 a.m. a 8 p.m. 7 días a la semana',
      call: 'Llamar',
      freeConsultation: 'Consulta Gratuita',
      // Navigation items
      medicareInformation: 'Información de Medicare',
      // Footer items
      license: 'Licencia de California #6010059',
      companyName: 'Mazari Health Insurance Services, LLC',
      // Add more translations
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;