// DEPRECATED: This context has been migrated to @a365/core
// Please use the shared LanguageProvider from @a365/core instead
// Migration date: 2025-05-29

import { LanguageProvider as CoreLanguageProvider, useLanguage } from "@a365/core";
import { LANGUAGE_STRATEGIES } from "@a365/core";
import i18n from "i18next";

// Re-export the core hook for backward compatibility
export { useLanguage };

// Backward compatible provider using core strategy
export const LanguageProvider = ({ children }) => {
  console.warn("⚠️  LanguageContext from landing-mx-jp is deprecated. Migrate to @a365/core LanguageProvider");
  
  return (
    <CoreLanguageProvider 
      strategy={LANGUAGE_STRATEGIES.LANDING}
      i18nInstance={i18n}
    >
      {children}
    </CoreLanguageProvider>
  );
};
