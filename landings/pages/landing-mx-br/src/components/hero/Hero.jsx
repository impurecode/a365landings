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
    "Si quieres viajar a Brasil desde México, tienes que informarte bien de los requisitos que te solicitarán las autoridades al momento de llegar al país. En general, no se trata de nada complicado, son algunos requisitos básicos que se solicitan prácticamente en cualquier destino. En este artículo te hablamos de la documentación, las vacunas, las opciones de transporte y otros datos más que te serán de mucha ayuda al momento de viajar a Brasil.";

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
                Descubre qué se necesita para viajar a Brasil desde México
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
              <img src={main} alt='imágenes de Brasil'></img>
            </div>
          </div>
        </div>

        <Separator />
      </div>
    </>
  );
};

export default Hero;
