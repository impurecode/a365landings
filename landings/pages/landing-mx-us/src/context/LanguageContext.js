import React from 'react';
import { LanguageProvider, useLanguage } from '@a365/core';
import i18n from './i18n';

// Deprecation warning
console.warn(
  'DEPRECATION WARNING: This LanguageContext is deprecated. ' +
  'Please migrate to direct usage of @a365/core LanguageProvider. ' +
  'File: /home/impure/dev/front/landings/pages/landing-mx-us/src/context/LanguageContext.js'
);

/**
 * @deprecated Use LanguageProvider from @a365/core directly
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

// Re-export original name for compatibility
export { LanguageContextProvider as LanguageProvider };

/**
 * @deprecated Use useLanguage from @a365/core directly
 */
export { useLanguage };
export const useLanguage = () => {
  return useContext(LanguageContext);
};
export const LanguageProvider = ({ children }) => {
  const getLanguageFromUrl = () => {
    let languageCode;
    if (window.localStorage.getItem("lang")) {
      languageCode = window.localStorage.getItem("lang") === "pt" ? "br" : "ar";
    } else {
      const url = window.location.href;
      languageCode = url.split("/")[3];
    }

    switch (languageCode) {
      case "br":
        return "pt-BR";
      case "ar":
        return "es-AR";
      default:
        return "es";
    }
  };
  const [language, setLanguage] = useState(getLanguageFromUrl);
  const changeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  const contextValue = {
    language,
    setLanguage: changeLanguage,
  };
  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
