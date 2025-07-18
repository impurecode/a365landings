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
          ¿A cuántos países se puede viajar con el pasaporte chileno?
        </h2>
        <div className='flex xl:flex-row flex-col-reverse gap-y-12 items-center'>
          <div className='div-1'>
            <p className='px-4'>
              Según Visa Index, se puede viajar con pasaporte chileno, sin
              necesidad de visa, a 176 países. Esto incluye países en la región,
              en África, Asia y Europa.
              <br />
              <br />
              El pasaporte chileno es considerado uno de los más poderosos de la
              región, gracias a los múltiples acuerdos y tratados
              internacionales que facilitan la movilidad de sus ciudadanos.
              <br />
              <br />
              Es importante que tomes en cuenta que para algunos países como
              Estados Unidos hay que solicitar con anticipación una autorización
              de viaje electrónica.
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
          Los países más baratos para viajar con pasaporte chileno
        </h2>
        <div className='flex flex-row items-center'>
          <div className='div-1'>
            <p className='px-4'>
              {" "}
              Viajar con el pasaporte chileno no solo es conveniente, sino que
              también permite acceder a los países más baratos para viajar.
              Entre estos se destacan:
              <br /> <br />
              - Sudeste Asiático: Tailandia, Vietnam y Camboya son conocidos por
              ser económicos y ofrecer experiencias únicas a bajo costo.
              <br /> <br />- Europa del Este: Países como Hungría, Polonia y
              Rumania ofrecen una rica historia y cultura a precios accesibles.
              <br /> <br />
              - Latinoamérica: Bolivia y Colombia son destinos económicos con
              una gran diversidad de actividades.
              <br /> <br />
              La lista de los países a los que se puede viajar con pasaporte
              chileno es muy amplia. Lo mejor que puedes hacer es pensar bien
              qué destinos te gustaría visitar, investigar en aerolíneas y
              páginas de reserva de hospedaje por los costos, y entrar en las
              páginas migratorias de cada país a averiguar cuáles son algunos de
              los requisitos que debes tener en cuenta.
            </p>
          </div>

          <div className='div-2'></div>
        </div>
      </div>

      <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12 px-4 '>
        <h2 className='font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6 px-4'>
          Consejos para maximizar el poder del pasaporte chileno
        </h2>
        <div className='flex flex-row items-center'>
          <div className='div-1'>
            <p className='px-4'>
              {" "}
              Como puedes haber visto, es muy conveniente tener un pasaporte
              chileno, sobre todo por el gran número de países al que puedes
              viajar con él. Para aprovechar al máximo el poder del pasaporte
              chileno, considera estos consejos: <br />
              <br />
              - Planifica con anticipación: Infórmate sobre los requisitos de
              entrada de cada país antes de viajar. <br />
              <br />- Consulta las condiciones de visado: Aunque muchos países
              no requieren visa, es importante verificar las condiciones de
              entrada, ya que pueden cambiar.
              <br />
              <br />
              Además, es recomendable contratar un seguro de viaje para tener un
              buen respaldo en caso de que se presenten inconvenientes.
              <br />
              <br />
              El seguro de viaje no es obligatorio en todos los destinos, pero
              te puede ayudar a estar más tranquilo y prevenir dolores de
              cabeza. De manera general, un seguro de viaje cubre:
              <br />
              <br />
              - Consultas con médicos generales y especialistas. <br />
              <br />- Repatriación sanitaria, en caso de necesitar regresar a
              Chile por motivos médicos. <br />
              <br /> - Tratamientos de emergencia, en caso de enfermedades
              repentinas o accidentes. <br />
              <br />- Hospitalización y gastos asociados a internaciones
              necesarias debido a condiciones médicas graves.
              <br />
              <br />
              Contar con un seguro médico de viaje te garantiza que tu viaje por
              el mundo va a ser tal y como lo planeas. Es importante estar
              protegido ante cualquier imprevisto para aprovechar las vacaciones
              al máximo.
              <br />
              <br />
              Si estás buscando un seguro de viaje internacional, debes analizar
              algunos factores como el costo y los límites de la cobertura. En
              Assist 365 ofrecemos el mejor seguro de viaje, y te podemos ayudar
              a pasar unas vacaciones felices.
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
            Cotiza tu seguro de viaje internacional
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
