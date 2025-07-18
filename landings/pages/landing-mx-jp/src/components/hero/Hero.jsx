import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { QuoterComponent } from "quoter365";
import { quoter_config } from "./../../config/app.config";
import Separator from "./../separator/Separator.jsx";
import { useTranslation } from "react-i18next";
import tokio from "../../assets/img/japon-tokio-min.png";

const Hero = () => {
  const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => setShowFullText(!showFullText);
  const { t } = useTranslation();

  const getData = () => {};

  const textToShow =
    " El número de personas que busca cuánto cuesta un viaje a Japón desde México no para de crecer, y es que desde abril de 2023 los mexicanos ya no tienen que solicitar una visa para viajar como turistas al país del sol naciente. Muchos están interesados en saber cuál es el costo del boleto de avión, el hospedaje, los gastos de transporte dentro del país y lo que se necesita para poder visitar algunas de las principales atracciones turísticas de Japón. A continuación te explicamos más sobre esto, y te damos algunas recomendaciones para que puedas viajar sin necesidad de tener un presupuesto muy alto.";

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
                Descubre cuánto cuesta un viaje a Japón desde México
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
              <img src={tokio} alt='imágenes de tokio,japón'></img>
            </div>
          </div>
        </div>

        <Separator />
      </div>
    </>
  );
};

export default Hero;
