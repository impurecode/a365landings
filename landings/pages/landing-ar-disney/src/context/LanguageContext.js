/**
 * MIGRATED: LanguageContext para landing-ar-disney
 * 
 * @deprecated Este contexto ha sido migrado a @a365/core
 * Por favor use directamente LanguageProvider de @a365/core
 * Fecha de migración: 2025-05-29
 */

import React from 'react';
import { LanguageProvider as CoreLanguageProvider, useLanguage } from '@a365/core';
import { LANGUAGE_STRATEGIES } from '@a365/core';
import i18n from '../i18n/i18n';

// Advertencia de deprecación
console.warn(
  'DEPRECATION WARNING: Este LanguageContext está deprecated. ' +
  'Por favor migre a uso directo de @a365/core LanguageProvider. ' +
  'Archivo: landings/pages/landing-ar-disney/src/context/LanguageContext.js'
);

/**
 * @deprecated Use LanguageProvider from @a365/core directly
 * Wrapper para mantener compatibilidad hacia atrás
 */
export const LanguageContext = React.createContext();

/**
 * @deprecated Use LanguageProvider from @a365/core directly
 */
export const LanguageProvider = ({ children }) => {
  return (
    <CoreLanguageProvider
      i18nInstance={i18n}
      strategy={LANGUAGE_STRATEGIES.LANDING}
    >
      {children}
    </CoreLanguageProvider>
  );
};

/**
 * @deprecated Use useLanguage from @a365/core directly
 */
export { useLanguage };

export default LanguageProvider;
