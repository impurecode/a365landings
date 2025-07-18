import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { QuoterComponent } from "quoter365";
import { quoter_config } from "./../../config/app.config";
import Separator from "./../separator/Separator.jsx";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => setShowFullText(!showFullText);
  const { t } = useTranslation();

  const getData = () => {};

  const textToShow =
    "España es un país de la península ibérica de Europa, caracterizada por su riqueza cultural, tradiciones y paisajes excepcionales. Está situado en el sur de Europa occidenal y el norte de áfrica, compuesto por comunidades autónomas es el cuarto país más extenso del continente europeo. El clima más la flora y fauna, hacen que este territorio europeo sea un destino ideal para viajar. Visita la mezquita de Córdoba, conoce la Sagrada Familia en Barcelona, el Palacio Real en Madrid, la Plaza España en Sevilla y cientos de lugares que sin duda, harán tu viaje inolvidable. Si eres extranjero y tienes pensado viajar a este país, debes conocer una lista de requisitos para entrar a España";

  const truncatedText = showFullText
    ? textToShow
    : `${textToShow.slice(0, 382)}...`;

  return (
    <>
      <div className='hero-wrapper w-full min-h-[640px] xl:min-h-[680px]'>
        <div className='hero-background hidden sm:block'></div>
        <div className='hero-content flex flex-col items-center justify-center mx-auto'>
          <div className='w-full max-w-[358px] sm:max-w-[633px] xl:max-w-[1210px] px-4 flex flex-col xl:flex-row '>
            <div>
              <h1 className=' leading-[52px] text-white font-titillium font-bold text-[30px] md:text-4xl lg:text-5xl xl:text-[64px] mt-9 md:mt-[103px] text-center md:text-left'>
                ¿Cuáles son los requisitos para viajar a España?
              </h1>
              <div className='mt-8 text-white mb-12 text-center md:text-left'>
                <p>{truncatedText}</p>
                <button
                  onClick={toggleText}
                  className='flex items-center text-white mt-3 text-center mx-auto md:mx-0'
                >
                  {showFullText ? "Ver menos" : "Ver más"}
                  {showFullText ? (
                    <FaAngleUp className='ml-1' />
                  ) : (
                    <FaAngleDown className='ml-1' />
                  )}
                </button>
              </div>
            </div>
            {/* Quoter */}
            <div className='flex flex-row items-center '>
              <div
                className='quoter-wrapper sm:bg-[rgba(178,205,255,0.68)] rounded-[20px] sm:px-[14px] sm:py-[20px]
              max-w-[592px] xl:mt-[140px] xl:ml-24 mb-20'
              >
                <div className='text-base md:text-xl font-semibold font-titillium text-white mb-[10px] md:mb-5 pl-1'>
                  {t("index.quoterHeading")}
                </div>
                <QuoterComponent
                  className='relative '
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
