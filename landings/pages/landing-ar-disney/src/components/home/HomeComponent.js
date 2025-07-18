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
          Precio del viaje a Disney: transporte y hospedaje
        </h2>
        <div className='flex xl:flex-row flex-col-reverse gap-y-12 items-center'>
          <div className='div-1'>
            <p className='px-4'>
              Los vuelos son uno de los principales gastos al planificar un
              viaje a Disney desde Argentina. La opción más común es volar de
              Buenos Aires a Miami y luego trasladarse a Orlando. Los vuelos a
              Miami pueden costar a partir de 600-700 USD por persona
              consiguiendo una tarifa económica, y el traslado a Orlando puede
              añadir entre 200 y 300 USD​.
              <br />
              <br />
              En cuanto al hospedaje, otro de los gastos importantes, hay que
              señalar que hay opciones cercanas a los parques de Disney, con
              precios que van desde 100 USD por noche.
              <br />
              <br />
              Los lugares más económicos no están tan cerca, pero pueden ayudar
              a ahorrar bastante dinero. Generalmente, en estos lugares el
              precio por noche suele ser de aproximadamente 50 USD.
              <br />
              <br />
              Los gastos en comidas pueden variar. Comer dentro de los parques
              puede costar entre 12 y 35 USD por comida rápida.
              <br />
              <br />
              Para quienes buscan opciones más accesibles, hay que señalar que
              Disney permite el ingreso de comida, lo que resulta ideal para
              ahorrar.
              <br />
              <br />
              Además de todo esto que hemos mencionado, hay que sumar los costos
              de las entradas a los parques de Disney, para lo cual hay opciones
              desde 110 USD más impuestos. Lo ideal es comprar paquetes de
              varios días para ahorrar en el costo por día.
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
          ¿Cuánto cuesta un viaje a Disney para 4 personas?
        </h2>
        <div className='flex flex-row items-center'>
          <div className='div-1'>
            <p className='px-4'>
              {" "}
              Para una familia de cuatro, un viaje a Disney de una semana puede
              costar alrededor de 7.500 USD. Este monto incluye vuelos,
              alojamiento, entradas a los parques y comidas​.
              <br /> <br />
              El gasto total varía en función de la fecha en la que se viaje, el
              tipo de hospedaje que se seleccione y los gastos generales en
              comida.
              <br /> <br />
              En algunos casos también se pueden comprar paquetes de viaje a
              Disney con agencias de turismo argentinas, aunque esta opción
              suele aumentar los costos.{" "}
            </p>
          </div>

          <div className='div-2'></div>
        </div>
      </div>

      <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12 px-4 '>
        <h2 className='font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6 px-4'>
          ¿Se necesita un seguro de viaje para ir a Disney?
        </h2>
        <div className='flex flex-row items-center'>
          <div className='div-1'>
            <p className='px-4'>
              {" "}
              Los requisitos para viajar a Estados Unidos, si no tomamos en
              cuenta la visa, suelen ser pocos. No es obligatorio tener un
              seguro, ni se debe demostrar que se está vacunado. <br />
              <br />
              Sin embargo, es recomendable contratar una asistencia al viajero
              para tener un buen respaldo en caso de que se presenten
              inconvenientes. Estados Unidos es uno de los lugares en los que la
              atención médica cuesta más dinero. <br />
              <br />
              Tener un seguro de viaje te puede ayudar a estar más tranquilo y
              prevenir dolores de cabeza. En Assist 365 ofrecemos el mejor
              seguro de viaje, y te podemos ayudar a pasar unas vacaciones
              felices.
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
            Cotiza tu seguro de viaje a Estados Unidos
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
