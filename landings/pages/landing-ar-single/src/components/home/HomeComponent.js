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
          ¿Por qué viajar solo?
        </h2>
        <div className='flex xl:flex-row flex-col-reverse gap-y-12 items-center'>
          <div className='div-1'>
            <p className='px-4'>
              La experiencia de viajar solo ofrece una serie de beneficios
              únicos. Permite disfrutar de libertad para elegir el itinerario,
              conocer gente nueva y desafiarse a uno mismo.
              <br />
              <br />
              Además, puede mejorar la confianza personal y la independencia,
              haciendo de cada viaje una experiencia de autodescubrimiento​.
              <br />
              <br />
              En todo el mundo hay cientos de miles de personas que deciden
              viajar solos al menos una vez en la vida, dándose la oportunidad
              de conocer nuevos lugares, nuevas culturas y crecer a nivel
              personal.
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
          Destinos para viajar solo por primera vez
        </h2>
        <div className='flex flex-row items-center'>
          <div className='div-1'>
            <p className='px-4'>
              {" "}
              Elegir un destino para viajar solo no es muy complicado, todos
              tenemos un lugar que siempre hemos querido conocer. Sin embargo,
              se debe tener en cuenta que no todos los lugares son igual de
              seguros, y que ir a un lugar nuevo también conlleva un gran número
              de desafíos.
              <br /> <br />
              Uno de ellos son los costos, ya que para viajar a ciertas ciudades
              se requiere de bastante dinero. Por otra parte, están las barreras
              del idioma, ya que en los sitios menos turísticos, es más difícil
              encontrar a personas que hablen inglés o el mismo idioma que uno.
              <br /> <br />
              <ul className=''>
                <li className='list-disc'>
                  {" "}
                  Lisboa, Portugal: esta ciudad es conocida por su seguridad y
                  amabilidad hacia los viajeros solitarios.
                </li>
                <br />
                <li className='list-disc'>
                  {" "}
                  Bangkok, Tailandia: aunque el idioma puede ser una barrera, es
                  una ciudad famosa por su cultura.
                </li>
                <br />
                <li className='list-disc'>
                  Dublín, Irlanda: ofrece un ambiente amigable y seguro para los
                  nuevos <br />
                  aventureros​.
                </li>
                <br />
                <li className='list-disc'>
                  Kioto, Japón: un destino espiritual con templos y jardines
                  impresionantes.
                </li>
              </ul>
              <br />
              <br />
              Estos son tan solo algunos de los lugares por los que podés
              empezar. La lista es muy larga, y la elección del lugar depende
              totalmente de tus preferencias personales.
            </p>
          </div>

          <div className='div-2'></div>
        </div>
      </div>

      <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12 px-4 '>
        <h2 className='font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6 px-4'>
          La experiencia de viajar solo: consejos y recomendaciones generales
        </h2>
        <div className='flex flex-row items-center'>
          <div className='div-1'>
            <p className='px-4'>
              {" "}
              Antes de viajar solo es importante informarse muy bien sobre el
              destino que se eligió. Esto implica investigar un poco sobre las
              costumbres locales, los lugares seguros para visitar, y las
              alternativas que hay para moverse por la ciudad. <br />
              <br />
              También es recomendable aprender algunas frases básicas en el
              idioma local, lo que no solo te ayudará a comunicarte, sino que
              también te permitirá conectarte mejor con las personas que te
              encuentres. <br />
              <br />
              Un aspecto importante de viajar solo que muchas veces se pasa por
              alto es la necesidad de contratar un seguro de viaje. Cuando
              viajás solo, sos responsable de vos mismo, y cualquier imprevisto
              puede convertirse en un problema mayor. <br />
              <br />
              Una asistencia al viajero te protege en caso de emergencias
              médicas, robos o cancelaciones inesperadas. Esto es especialmente
              importante cuando viajas a países donde la atención médica puede
              ser costosa o cuando realizás actividades de aventura que
              conllevan cierto riesgo. <br />
              <br />
              En Assist 365 ofrecemos el mejor seguro de viaje, y podemos hacer
              que tu experiencia al viajar solo sea la mejor.
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
            Cotiza tu seguro de viaje
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
