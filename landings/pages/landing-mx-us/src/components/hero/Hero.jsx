import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { QuoterComponent } from "quoter365";
import { quoter_config } from "./../../config/app.config";
import Separator from "./../separator/Separator.jsx";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => setShowFullText(!showFullText);
  const { t } = useTranslation();

  const getData = () => {};

  const textToShow = 'Viajar a Estados Unidos desde México es una experiencia emocionante que requiere ciertos requisitos y preparativos previos. Ya sea que estés planeando unas vacaciones, un viaje de negocios o una visita a familiares y amigos, es importante conocer los requisitos necesarios para ingresar al país vecino. A continuación, te presentamos una guía sobre los principales requisitos para viajar a Estados Unidos desde México.';

  const truncatedText = showFullText ? textToShow : `${textToShow.slice(0, 312)}...`;

  return (
    <>
      <div className="hero-wrapper w-full min-h-[640px] xl:min-h-[680px]">
        <div className="hero-background hidden sm:block "></div>
        <div className="hero-content flex flex-col items-center justify-center mx-auto">
          <div className="w-full max-w-[358px] sm:max-w-[633px] xl:max-w-[1210px] px-4 flex flex-col xl:flex-row ">
            <div>
              <h1 className=" leading-[52px] text-white font-titillium font-bold text-[30px] md:text-4xl lg:text-5xl xl:text-[64px] mt-9 md:mt-[103px] text-center md:text-left">
              Requisitos para viajar a Estados Unidos desde México
              </h1>
              <div className='mt-8 text-white mb-12  text-center md:text-left'>
                <h2 className=' text-sm '>{truncatedText}</h2>
                <button onClick={toggleText} className="flex items-center text-white mt-3 text-center mx-auto md:mx-0">
                  {showFullText ? 'Ver menos' : 'Ver más'}
                  {showFullText ? <FaAngleUp className="ml-1" /> : <FaAngleDown className="ml-1" />}
                </button>
              </div>
            </div>
            {/* Quoter */}
            <div className='flex flex-row items-center '>
              <div className="quoter-wrapper sm:bg-[rgba(178,205,255,0.68)] rounded-[20px] sm:px-[14px] sm:py-[20px]
              max-w-[592px] xl:mt-[140px] xl:ml-24 mb-20">
                <div className="text-base md:text-xl font-semibold font-titillium text-white mb-[10px] md:mb-5 pl-1">
                  {t("index.quoterHeading")}
                </div>
                <QuoterComponent
                  className="relative "
                  view_mode={"normal"}
                  config={quoter_config}
                  quoterData={getData}
                />
              </div>
            </div>
          </div>
        </div>
        <Separator />
      </div>
    </>
  );
};

export default Hero;