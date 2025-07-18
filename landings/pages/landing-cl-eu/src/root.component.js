import "quoter365/dist/index.css";
import "./assets/css/tailwind.css";
import "./assets/css/core.css";
import HomeComponent from "./components/home/HomeComponent";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
import { LanguageProvider } from "./context/LanguageContext";
import StoreProvider from "./context/StoreContext";

export default function Root(props) {
  return (
    <LanguageProvider>
      <I18nextProvider i18n={i18n}>
        <div className="w-full bg-gray-1">
          <StoreProvider>
            <HomeComponent />
          </StoreProvider>
        </div>
      </I18nextProvider>
    </LanguageProvider>
  );
}
