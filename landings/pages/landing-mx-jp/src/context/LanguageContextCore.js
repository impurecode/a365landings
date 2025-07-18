/**
 * LanguageContext para landing-mx-jp usando @a365/core
 * 
 * EJEMPLO DE MIGRACIÓN: Este archivo muestra cómo migrar
 * desde el LanguageContext duplicado al LanguageProvider
 * compartido del core, eliminando ~50 líneas de código repetido.
 * 
 * INSTRUCCIONES PARA MIGRAR OTROS LANDINGS:
 * 1. Reemplazar el contenido del LanguageContext.js con este patrón
 * 2. Importar i18n del archivo local del landing
 * 3. Usar LANGUAGE_STRATEGIES.LANDING para landings
 * 4. Mantener la misma interfaz (useLanguage) para compatibilidad
 */

import React from "react";
import i18n from "i18next";
import { 
  LanguageProvider as CoreLanguageProvider, 
  useLanguage as useCoreLanguage,
  LANGUAGE_STRATEGIES 
} from "@a365/core";

// Re-exportar el hook para mantener compatibilidad
export const useLanguage = useCoreLanguage;

// Provider que usa la estrategia específica para landings
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
