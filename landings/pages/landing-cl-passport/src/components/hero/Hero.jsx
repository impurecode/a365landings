import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { QuoterComponent } from "quoter365";
import { quoter_config } from "./../../config/app.config";
import Separator from "./../separator/Separator.jsx";
import { useTranslation } from "react-i18next";
import main from "../../assets/img/main1.png";

const Hero = () => {
  const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => setShowFullText(!showFullText);
  const { t } = useTranslation();

  const getData = () => {};

  const textToShow =
    "El pasaporte chileno es uno de los más convenientes de Latinoamérica, ya que permite ingresar a numerosos países sin necesidad de visa. Este artículo explora a cuántos países se puede viajar con pasaporte chileno, así como los destinos más accesibles y los mejores países para viajar. Además, de analizar las ventajas que ofrece este pasaporte, también te contamos cuáles son los países más baratos para viajar desde Chile.";

  const truncatedText = showFullText
    ? textToShow
    : `${textToShow.slice(0, 312)}...`;

  return (
    <>
      <div className='hero-wrapper w-full min-h-[640px] xl:min-h-[680px]'>
        <div className='hero-background hidden sm:block '></div>
        <div className='hero-content flex flex-col items-center justify-center mx-auto'>
          <div className='w-full max-w-[358px] sm:max-w-[633px] xl:max-w-[1210px] px-4 flex flex-col xl:flex-row '>
            <div>
              <h1 className=' leading-[52px] text-white font-titillium font-bold text-[30px] md:text-4xl lg:text-5xl xl:text-[64px] mt-9 md:mt-[103px] text-center md:text-left'>
                Todos los países a los que puedes viajar con el pasaporte
                chileno
              </h1>
              <div className='mt-8 text-white mb-12  text-center md:text-left'>
                <p className=' text-sm '>{truncatedText}</p>
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
