import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      menu: 'Medicare Information',
      medicareBasics: 'Medicare Basics',
      coverageOptions: 'Coverage Options',
      enrollmentHelp: 'Enrollment Help',
      resources: 'Resources',
      findAgent: 'Find Agent',
      careers: 'Careers',
      contactUs: 'Contact Us',
      
      // Common elements
      hours: 'Hours: 8 a.m. to 8 p.m. 7 days a week',
      call: 'Call',
      freeConsultation: 'Free Consultation',
      medicareInformation: 'Medicare Information',
      
      // Footer
      license: 'California License #6010059',
      companyName: 'Mazari Health Insurance Services, LLC',
      
      // Page titles
      homeTitle: 'Medicare Insurance Plans & Support',
      basicsTitle: 'Understanding Medicare Basics',
      coverageTitle: 'Medicare Coverage Options',
      enrollmentTitle: 'Medicare Enrollment Help',
      resourcesTitle: 'Medicare Resources',
      contactTitle: 'Contact Mazari Health',
      
      // Common content
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      callUs: 'Call Us',
      emailUs: 'Email Us',
      address: 'Los Angeles, CA',
      phone: '(213) 322-3542',
      email: 'support@mazarihealth.com',
      
      // Form labels
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email Address',
      phone: 'Phone Number',
      message: 'Message',
      submit: 'Submit',
      
      // Success messages
      messageSent: 'Message sent successfully!',
      thankYou: 'Thank you for contacting us!',
      
      // Error messages
      errorOccurred: 'An error occurred',
      tryAgain: 'Please try again',
      
      // Accessibility
      skipToContent: 'Skip to content',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      
      // SEO
      metaDescription: 'Expert Medicare guidance in California. Compare Medicare Advantage, Supplement, and Part D plans. Get free consultation from licensed insurance agents.',
      metaKeywords: 'Medicare plans California, Medicare insurance Los Angeles, Medicare Advantage plans',
    }
  },
  es: {
    translation: {
      // Navigation
      menu: 'Información de Medicare',
      medicareBasics: 'Conceptos Básicos de Medicare',
      coverageOptions: 'Opciones de Cobertura',
      enrollmentHelp: 'Ayuda con la Inscripción',
      resources: 'Recursos',
      findAgent: 'Encontrar Agente',
      careers: 'Carreras',
      contactUs: 'Contáctenos',
      
      // Common elements
      hours: 'Horario: 8 a.m. a 8 p.m. 7 días a la semana',
      call: 'Llamar',
      freeConsultation: 'Consulta Gratuita',
      medicareInformation: 'Información de Medicare',
      
      // Footer
      license: 'Licencia de California #6010059',
      companyName: 'Mazari Health Insurance Services, LLC',
      
      // Page titles
      homeTitle: 'Planes y Apoyo de Seguro Medicare',
      basicsTitle: 'Entendiendo los Conceptos Básicos de Medicare',
      coverageTitle: 'Opciones de Cobertura de Medicare',
      enrollmentTitle: 'Ayuda con la Inscripción de Medicare',
      resourcesTitle: 'Recursos de Medicare',
      contactTitle: 'Contactar a Mazari Health',
      
      // Common content
      learnMore: 'Aprende Más',
      getStarted: 'Comenzar',
      callUs: 'Llámenos',
      emailUs: 'Envíenos un Correo',
      address: 'Los Ángeles, CA',
      phone: '(213) 322-3542',
      email: 'support@mazarihealth.com',
      
      // Form labels
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'Correo Electrónico',
      phone: 'Número de Teléfono',
      message: 'Mensaje',
      submit: 'Enviar',
      
      // Success messages
      messageSent: '¡Mensaje enviado exitosamente!',
      thankYou: '¡Gracias por contactarnos!',
      
      // Error messages
      errorOccurred: 'Ocurrió un error',
      tryAgain: 'Por favor intente de nuevo',
      
      // Accessibility
      skipToContent: 'Saltar al contenido',
      menuOpen: 'Abrir menú',
      menuClose: 'Cerrar menú',
      
      // SEO
      metaDescription: 'Orientación experta de Medicare en California. Compare planes Medicare Advantage, Suplementarios y Parte D. Obtenga consulta gratuita de agentes de seguros licenciados.',
      metaKeywords: 'Planes Medicare California, Seguro Medicare Los Ángeles, Planes Medicare Advantage',
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