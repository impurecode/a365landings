import React, { useState, useEffect, useContext } from "react";
import Hero from "../hero/Hero";

import Testimonials from "./../testimonials/Testimonials";

import FaqComponent from "../faq/index.js";
import useMediaQuery from "@mui/material/useMediaQuery";
import { StoreContext } from "../../context/StoreContext.js";
import { types } from "../../context/StoreReducer";
import { QuoterComponent } from "quoter365";
import { quoter_config } from "../../config/app.config.js";
import img1 from "../../assets/img/img-block-1.png";
import img3 from "../../assets/img/img-block-3.png";
import img1mobile from "../../assets/img/img-block-1-mobile.png";

const HomeComponent = () => {
  const [store, dispatch] = useContext(StoreContext);
  const banner_visibility = useMediaQuery("(min-width: 640px)");

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
          .then(response => response.json())
          .then(response => {
            dispatch({
              type: types.setGeo,
              payload: response,
            });
          })
          .catch(err => console.error(err));
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return (
    <>
      <Hero />
      <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12 px-4 '>
        <h2 className='font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl xl:mb-12 mt-6 px-4'>
          ¿Es obligatorio el seguro de viaje para entrar a Argentina?
        </h2>
        <div className='flex xl:flex-row flex-col-reverse gap-y-12 items-center'>
          <div className='div-1'>
            <p className='px-4'>
              Para ingresar al territorio argentino desde Chile o desde
              cualquier otro lugar del mundo, ya no es un requisito
              indispensable contar con un{" "}
              <a
                href='https://assist-365.com/cl/destinos/seguro-de-viaje-internacional-chile '
                className='text-blue-500 underline'
              >
                seguro de viaje
              </a>{" "}
              . Sin embargo, hay que resaltar que es recomendable tener uno, ya
              que es una póliza que te brinda cobertura médica, asistencia y
              protección durante tus viajes al extranjero. <br />
              <br />
              Además, un seguro de viaje puede cubrir imprevistos como
              cancelaciones, pérdida de equipaje y asistencia en carretera, lo
              que te permitirá disfrutar de tu viaje con total tranquilidad.
            </p>
            <br />
          </div>

          <div className='div-2 hidden xl:block'>
            <img
              className='md:min-w-[200px]'
              src={img1}
              alt='imagen de persona con binoculares'
            ></img>
          </div>

          <div className='div-2 xl:hidden block mt-12'>
            <img
              className='md:min-w-[200px]'
              src={img1mobile}
              alt='imagen de persona con una lupa'
            ></img>
          </div>
        </div>
      </div>

      <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12 px-4 '>
        <h2 className='font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6 px-4'>
          ¿Qué debe incluir tu seguro de viaje a Argentina?
        </h2>
        <div className='flex flex-row items-center'>
          <div className='div-1'>
            <p className='px-4'>
              {" "}
              Un buen seguro de viaje para Argentina debe incluir cobertura
              médica por enfermedades y accidentes.
              <br /> <br />
              Además, es recomendable que incluya cobertura de cancelación de
              viaje, pérdida de equipaje y asistencia en carretera si planeas
              viajar en auto. Algunas opciones también ofrecen asistencia legal
              y repatriación.
            </p>
          </div>

          <div className='div-2'></div>
        </div>
      </div>

      <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[1210px] px-4'>
        <h2 className='font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6 px-4'>
          Preguntas frecuentes sobre los seguros de viaje para Argentina
        </h2>
        <FaqComponent />
      </div>

      <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12 px-4 '>
        <h2 className='font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6 px-4'>
          ¿Cómo cotizar y elegir el mejor seguro de viaje?
        </h2>
        <div className='flex flex-row items-center'>
          <div className='div-1'>
            <p className='px-4'>
              {" "}
              Para cotizar un seguro de viaje, es importante comparar distintas
              opciones. En ASSIST 365, ofrecemos una plataforma fácil de usar
              donde puedes comparar coberturas y precios para encontrar la
              opción que mejor se adapte a tus necesidades y presupuesto.
              <br /> <br />
              Es importante tener en cuenta factores como el valor de la prima y
              la cobertura ofrecida.
            </p>
          </div>

          <div className='div-2'></div>
        </div>
      </div>

      {/* <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12 px-4 '>
        <h2 className='font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl xl:mb-12 mt-6 px-4'>
          Consejos para viajar dentro del Espacio Schengen
        </h2>
        <div className='flex xl:flex-row flex-col-reverse gap-y-12 items-center'>
          <div className='div-1'>
            <p className='px-4'>
              {" "}
              Viajar dentro del Espacio Schengen ofrece la oportunidad de
              explorar diversos países y culturas con facilidad. Sin embargo,
              para garantizar un viaje seguro y sin contratiempos, hay varios
              consejos importantes que debes considerar.
              <br /> <br />
              Lo principal es contratar un seguro de viaje que cubra
              enfermedades, accidentes, pérdida de equipaje y cancelaciones de
              vuelos. Para los viajeros que ingresan al Espacio Schengen sin
              necesidad de visa, como los mexicanos, no es obligatorio, pero sí
              es aconsejable contar con un seguro que cubra gastos médicos de al
              menos 30.000 euros.
              <br /> <br />
              Esto no sólo es una red de seguridad en caso de emergencias
              médicas, sino que también puede ser un requisito en algunos casos
              para demostrar la capacidad de afrontar gastos imprevistos durante
              la estancia.
            </p>
          </div>
        </div>
      </div> */}

      {/* <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12 px-4 '>
        <h2 className='font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6 px-4'>
          ¿Es obligatorio un seguro de viaje para entrar a Estados Unidos?
        </h2>
        <p className='px-4'>
          {" "}
          Aunque no es obligatorio, se recomienda que los viajeros obtengan un
          seguro de viaje adecuado para protegerse contra cualquier eventualidad
          que puedan enfrentar durante su viaje.
        </p>
      </div> */}

      {/* <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12 px-4 '>
        <h2 className='font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6'>
          Beneficios de viajar a Estados Unidos con asistencia al viajero
        </h2>

        <div className='video-container max-w-[793px] mx-auto h-full px-4'>
          <iframe
            width='100%'
            src='https://www.youtube.com/embed/isIPXRQSL9g'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='xl:h-[434px] md:h-[331px] h-[186px]'
          ></iframe>
        </div>
      </div> */}

      {/* Quoter */}
      <div className=' w-full flex flex-col items-center bg-quoter-landscape '>
        <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] px-4'>
          <h2 className='font-bold text-white md:text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6'>
            Cotiza tu seguro de viaje para Argentina
          </h2>
        </div>

        <div
          className='quoter-wrapper sm:bg-[rgba(178,205,255,0.68)] rounded-[20px] sm:px-[14px] sm:py-[20px]
              max-w-[592px]  mb-20  mx-auto '
        >
          <div className='text-base md:text-xl font-semibold font-titillium text-white mb-[10px] md:mb-5 pl-1'>
            Cotiza ahora tu asistencia al viajero Assist 365
          </div>
          <QuoterComponent
            className='relative '
            view_mode={"landscape"}
            config={quoter_config}
            quoterData={getData}
          />
        </div>
      </div>

      <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[1210px] px-4'>
        <Testimonials />
      </div>
    </>
  );
};

export default HomeComponent;
