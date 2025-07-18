import React, { useState, useEffect, useContext } from "react";
import Hero from "../hero/Hero";

import Testimonials from "./../testimonials/Testimonials";

import FaqComponent from "../faq/index.js";
import useMediaQuery from "@mui/material/useMediaQuery";
import { StoreContext } from "../../context/StoreContext.js";
import { types } from "../../context/StoreReducer";
import { QuoterComponent } from 'quoter365';
import { quoter_config } from '../../config/app.config.js';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const HomeComponent = () => {
  const [store, dispatch] = useContext(StoreContext);
  const banner_visibility = useMediaQuery("(min-width: 640px)");

  const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => setShowFullText(!showFullText);

  const textToShow = 'El proceso de solicitud de visado difiere según la embajada de Estados Unidos donde se presente la solicitud. El propósito del viaje que pretende realizar y otros datos determinarán qué tipo de visado se exige según las leyes de inmigración de Estados Unidos. Como solicitante de visa, tendrá que demostrar que cumple con todos los requisitos para recibir la categoría de visa que usted está solicitando. El proceso general requiere que la solicitud contenga un formulario de solicitud de visado de no inmigrante completado en línea, oficialmente llamado formulario DS-160. El formulario se puede encontrar en línea en el sitio web del Centro de Solicitudes Electrónicas Consulares del Departamento de Estado de los Estados Unidos.Se pueden requerir documentos de apoyo como prueba del propósito del viaje, así como del itinerario del mismo. Estos documentos pueden ser los siguientes: Pasaporte válido: Debe tener una validez de seis meses después de la visita prevista a Estados Unidos. Datos de las cuentas de las redes sociales: Se refiere a una lista de las cuentas y plataformas de las redes sociales del solicitante y los nombres de los perfiles de cada cuenta.Pruebas de capacidad financiera: Se trata de estados financieros que demuestran que la persona tiene las finanzas necesarias para cubrir su estancia en Estados Unidos.Garantías: Evidencia de que la persona tiene razones para regresar a su país de origen, como una familia, un trabajo estable, una prueba de propiedad, etc. Prueba de empleo: Esto incluye un certificado de empleo o una carta del empleador y las nóminas de los últimos tres meses. Carta de la empresa: Si la persona viaja por trabajo, necesita una carta de dicha empresa explicando el propósito, los detalles del viaje y el cargo de la persona. Foto: La foto debe cumplir con ciertos requisitos para ser válida ante la solicitud del visado de EE.UU.';

  const truncatedText = showFullText ? textToShow : `${textToShow.slice(0, 348)}...`;

  const getData = () => {};

  useEffect(() => {
    if (store.geo) {
      localStorage.setItem("country_name", store.geo.country_name);
      localStorage.setItem("currency_symbol", store.geo.currency_symbol);
      localStorage.setItem("entity_id", store.geo.entity);
      localStorage.setItem("seller_id", store.geo.seller);
      localStorage.setItem("country_code", store.geo.country);
      localStorage.setItem("country_id", store.geo.country_id);
      localStorage.setItem("header_whatsapp", store.geo.header_whatsapp);
      localStorage.setItem("locale", store.geo.locale);
    }
  }, [store.geo]);

  useEffect(() => {
    if (
      localStorage.getItem("country_name") === null ||
      localStorage.getItem("currency_symbol") === null ||
      localStorage.getItem("entity_id") === null ||
      localStorage.getItem("seller_id") === null ||
      localStorage.getItem("country_code") === null ||
      localStorage.getItem("country_id") === null ||
      localStorage.getItem("header_whatsapp") === null ||
      localStorage.getItem("locale") === null
    ) {
      try {
        let url = window.location.href;
        const country_code = url.split("/")[3];
        fetch(
          `https://app.assist-365.com/api/geolocation?flag=true&country_code=${country_code}`
        )
          .then((response) => response.json())
          .then((response) => {
            dispatch({
              type: types.setGeo,
              payload: response,
            });
          })
          .catch((err) => console.error(err));
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return (
    <>
      <Hero />
      <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12'>
        <h2 className="font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6">
        Tipos de visa para Estados Unidos
        </h2>
        <h2 className='text-center md:text-left' >{truncatedText}</h2>
                <button onClick={toggleText} className="flex items-center  mt-3 text-center mx-auto ">
                  {showFullText ? 'Ver menos' : 'Ver más'}
                  {showFullText ? <FaAngleUp className="ml-1" /> : <FaAngleDown className="ml-1" />}
                </button>
      </div>

      <div className="w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[1210px] px-4">
        <FaqComponent />
      </div>

      <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12'>
        <h2 className="font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6">
        Cómo pagar la visa de Estados Unidos desde Argentina
        </h2>
         <p className="text-neutral-black text-base sm:text-xl font-normal font-sans leading-6 text-center md:text-left">
         De acuerdo con la información del documento, es importante destacar que para solicitar la visa estadounidense debes realizar un pago correspondiente a la categoría a la que desees aplicar. Existen 2 métodos de pago de los aranceles de solicitud de visa, entre ellos tarjeta crédito o efectivo, asistiendo a un Rapi Pago.  <br/> <br/> A partir del 30 de mayo del 2023, habrá un aumento en las tarifas de las visas B1/B2 y BCC, que pasarán de U$S 160 a U$S 185, válida por 10 años. Además, las visas H, L, O, P, Q y R también sufrirán un aumento y pasarán de U$S 190 a U$S 205 respectivamente. <br/> <br/> Asimismo, la categoría E, que incluye comerciantes e inversionistas también experimentará un incremento en su tarifa, pasando de U$S 205 a U$S 315.

        </p>  <br/> <br/>
        <h2 className="font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-2">
        Seguro de viaje para Estados Unidos:
        </h2>
        <p className="text-neutral-black text-base sm:text-xl font-normal font-sans leading-6 text-center md:text-left">
        Recomendamos viajar con seguro de viaje a los Estados Unidos por los <span className='font-bold' >altos costos que tiene el servicio de salud en el territorio.</span>  Por ejemplo, estar internado un día en un hospital puede salir USD 7.000 y un traslado en ambulancia puede salir hasta USD 2.500. <br/>  <br/>Por ello recomendamos <span className='font-bold' >el plan Safe Travel de ASSIST 365</span> que cubre asistencia médica en caso de accidente o enfermedad hasta 100.000 USD, asistencia covid y gastos hospitalarios por covid hasta 50.000 US,  preexistencias hasta 10.000 USD, y muchísimo más.<span className='font-bold' >Mira el video a continuación para más detalles del seguro de viaje para Estados Unidos. </span> 

        </p> 
      </div>

      <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12 '>
        <h2 className="font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6">
        ¿Es obligatorio el seguro de viaje para entrar a Estados Unidos? 
        </h2>
      
        <div className="video-container max-w-[793px] mx-auto h-full px-4">
          <iframe
            width="100%"
         
            src="https://www.youtube.com/embed/isIPXRQSL9g?si=D8zQsam4yg--4Vtd"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen

            className='xl:h-[434px] md:h-[331px] h-[186px]'
          ></iframe>
        </div>
      </div>


      {/* Quoter */}
      <div className=' w-full flex flex-col items-center bg-quoter-landscape '>

      <div className="w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] px-4">
        <h2 className="font-bold text-white md:text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6">
        Cotiza tu seguro de viaje para Estados Unidos
        </h2>
      </div>
   
              <div className="quoter-wrapper sm:bg-[rgba(178,205,255,0.68)] rounded-[20px] sm:px-[14px] sm:py-[20px]
              max-w-[592px]  mb-20  mx-auto ">
                <div className="text-base md:text-xl font-semibold font-titillium text-white mb-[10px] md:mb-5 pl-1">
                Cotiza ahora tu asistencia al viajero Assist 365
                </div>
                <QuoterComponent
                  className="relative "
                  view_mode={"landscape"}
                  config={quoter_config}
                  quoterData={getData}
                />
              </div>
            </div>

            <div className="w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[1210px] px-4">
        <Testimonials />
      </div>

      

    </>
  );
};

export default HomeComponent;