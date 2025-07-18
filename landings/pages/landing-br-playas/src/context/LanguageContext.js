import React from 'react';
import { LanguageProvider, useLanguage } from '@a365/core';
import i18n from './i18n';

// Deprecation warning
console.warn(
  'DEPRECATION WARNING: This LanguageContext is deprecated. ' +
  'Please migrate to direct usage of @a365/core LanguageProvider. ' +
  'File: /home/impure/dev/front/landings/pages/landing-br-playas/src/context/LanguageContext.js'
);

/**
 * @deprecated Use LanguageProvider from @a365/core directly
 * Wrapper para mantener compatibilidad hacia atrás
 */
export const LanguageContext = React.createContext();

/**
 * @deprecated Use LanguageProvider from @a365/core directly
 */
export const LanguageContextProvider = ({ children }) => {
  return (
    <LanguageProvider strategy="LANDING" i18n={i18n}>
      {children}
    </LanguageProvider>
  );
};

// Re-export the original name for backward compatibility
export { LanguageContextProvider as LanguageProvider };

/**
 * @deprecated Use useLanguage from @a365/core directly
 */
export { useLanguage };
