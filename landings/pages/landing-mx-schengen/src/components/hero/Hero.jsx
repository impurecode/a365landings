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
    "Si estás pensando en viajar a Europa desde México es importante que entiendas qué es el Espacio Schengen y cuáles son sus políticas para los turistas mexicanos. Los países del Espacio Schengen son visitados por millones de turistas todos los años, quienes son atraídos por su cultura, historia y atracciones turísticas . Si quieres ser parte de ellos, te recomendamos seguir leyendo, porque te contamos todo lo que tienes que saber para viajar seguro.";

  const truncatedText = showFullText
    ? textToShow
    : `${textToShow.slice(0, 312)}...`;

  return (
    <>
      <div className='hero-wrapper w-full min-h-[640px] xl:min-h-[680px]'>
        <div className='hero-background hidden sm:block '></div>
        <div className='hero-content flex flex-col items-center justify-center mx-auto'>
          <div className='w-full max-w-[358px] sm:max-w-[633px] xl:max-w-[1210px] px-4 flex flex-col xl:flex-row xl:gap-24 '>
            <div className='div-1 xl:w-1/2'>
              <h1 className='leading-[52px] text-white font-titillium font-bold text-[30px] md:text-4xl lg:text-5xl xl:text-[64px] mt-9 md:mt-[103px] text-center md:text-left'>
                Espacio Schengen: ¿qué es y cuáles son los requisitos para los
                mexicanos?
              </h1>
              <div className='mt-8 text-white mb-12 text-center md:text-left'>
                <p className='text-sm'>{truncatedText}</p>
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

            <div className='div-2 xl:w-1/2 xl:mt-12 mb-12 xl:mb-0 flex flex-row items-center '>
              <img src={main} alt='imágenes de visa y bandera UE'></img>
            </div>
          </div>
        </div>

        <Separator />
      </div>
    </>
  );
};

export default Hero;
