import React from 'react';
import { LanguageProvider, useLanguage } from '@a365/core';
import i18n from './i18n';

// Deprecation warning
console.warn('⚠️ DEPRECATED: Este LanguageContext local será eliminado. Migra a @a365/core');

// Re-export del provider configurado con estrategia LANDING
const LanguageContextProvider = ({ children }) => {
  return (
    <LanguageProvider 
      strategy="LANDING" 
      i18n={i18n}
      config={{ 
        defaultLanguage: 'pt-BR',
        supportedLanguages: ['pt-BR', 'es-UY', 'es-AR'],
        urlSegmentIndex: 3
      }}
    >
      {children}
    </LanguageProvider>
  );
};

// Para mantener compatibilidad hacia atrás
export { LanguageContextProvider as LanguageProvider, useLanguage };

// Export default para compatibilidad
const LanguageContext = {
  Provider: LanguageContextProvider,
  Consumer: ({ children }) => {
    const context = useLanguage();
    return children(context);
  }
};

export default LanguageContext;
