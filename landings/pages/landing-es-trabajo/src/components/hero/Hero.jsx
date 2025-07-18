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

  const textToShow = 'España se sitúa en el puesto 16 del Índice de Desarrollo Humano de las Naciones Unidas, y es conocido por su estilo de vida relajado, su clima agradable y su gastronomía. Además, España es un país seguro y acogedor para los extranjeros, lo que lo convierte en un lugar atractivo para vivir. Si eres argentino y estás buscando trabajar en España, necesitarás obtener una visa de trabajo que te permita vivir y trabajar legalmente en el país. En este artículo te explicamos los pasos que debes seguir para obtener una visa de trabajo en España.';

  const truncatedText = showFullText ? textToShow : `${textToShow.slice(0, 312)}...`;

  return (
    <>
      <div className="hero-wrapper w-full min-h-[640px] xl:min-h-[680px]">
        <div className="hero-background hidden sm:block "></div>
        <div className="hero-content flex flex-col items-center justify-center mx-auto">
          <div className="w-full max-w-[358px] sm:max-w-[633px] xl:max-w-[1210px] px-4 flex flex-col xl:flex-row ">
            <div>
              <h1 className=" leading-[52px] text-white font-titillium font-bold text-[30px] md:text-4xl lg:text-5xl xl:text-[64px] mt-9 md:mt-[103px] text-center md:text-left">
              ¿Cómo obtener una visa de trabajo en España? 
              </h1>
              <div className='mt-8 text-white mb-12  text-center md:text-left'>
                  {/* <h2 className=' text-sm '>{truncatedText}</h2>
                  <button onClick={toggleText} className="flex items-center text-white mt-3 text-center mx-auto md:mx-0">
                    {showFullText ? 'Ver menos' : 'Ver más'}
                    {showFullText ? <FaAngleUp className="ml-1" /> : <FaAngleDown className="ml-1" />}
                  </button> */}
                <h2 className=' text-sm '>España se sitúa en el puesto 16 del Índice de Desarrollo Humano de las Naciones Unidas, y es conocido por su estilo de vida relajado, su clima agradable y su gastronomía. Además, España es un país seguro y acogedor para los extranjeros, lo que lo convierte en un lugar atractivo para vivir. Si eres argentino y estás buscando trabajar en España, necesitarás obtener una visa de trabajo que te permita vivir y trabajar legalmente en el país. En este artículo te explicamos los pasos que debes seguir para obtener una visa de trabajo en España. Te recomendamos también, que conozcas todos los <a href='https://assist-365.com/ar/requisitos/requisitos-para-viajar-a-espana' className='underline'> Requisitos para viajar a España</a> a planificar tu viaje.</h2>
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