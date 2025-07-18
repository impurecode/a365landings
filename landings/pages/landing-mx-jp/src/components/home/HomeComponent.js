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
      <div className="w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12 px-4 ">
        <h2 className="font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl xl:mb-12 mt-6 px-4">
          Costo de los boletos para viajar a Japón desde México
        </h2>
        <div className="flex xl:flex-row flex-col-reverse gap-y-12 items-center">
          <div className="div-1">
            <p className="px-4">
              {" "}
              El costo de los boletos de avión para viajar a Japón desde México
              puede variar considerablemente dependiendo de varios factores como
              la temporada, la anticipación con la que se compren los boletos, y
              las escalas que esté dispuesto a tolerar el viajero. Por lo
              general, los vuelos directos son más caros pero ofrecen mayor
              comodidad y un menor tiempo de viaje. <br /> <br />
              Las principales aerolíneas que operan vuelos entre México y Japón
              incluyen Aeroméxico, Japan Airlines, entre otras que hacen
              conexiones con una o más escalas, lo que podría reducir el costo
              pero aumenta el tiempo total de viaje.
              <br /> <br />
              El boleto redondo a Japón se consigue desde 26.000 pesos
              mexicanos, el equivalente a 1.534 dólares aproximadamente. Pero
              los montos varían mucho, ya que hay pasajes que llegan a costar
              70.000 pesos mexicanos.
              <br /> <br />
              La ciudad a la que se viaje también es un factor a considerar, lo
              ideal es buscar boletos a Tokio.
            </p>
          </div>

          <div className="div-2 hidden xl:block">
            <img
              className="md:min-w-[200px]"
              src={img1}
              alt="imagen de persona con binoculares"
            ></img>
          </div>

          <div className="div-2 xl:hidden block mt-12">
            <img
              className="md:min-w-[200px]"
              src={img1mobile}
              alt="imagen de persona con una lupa"
            ></img>
          </div>
        </div>
      </div>

      {/* <div className="w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[1210px] px-4">
        <FaqComponent />
      </div> */}

      <div className="w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12 px-4 ">
        <h2 className="font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6 px-4">
          Principales gastos turísticos
        </h2>
        <div className="flex flex-row items-center">
          <div className="div-1">
            <p className="px-4">
              {" "}
              Los gastos turísticos al visitar Japón pueden variar
              considerablemente dependiendo de las preferencias del viajero,
              pero generalmente se pueden categorizar en varios rubros
              principales que incluyen alojamiento, transporte, alimentación y
              entradas a atracciones turísticas. <br /> <br />
              El precio promedio de una noche de hotel es de 1.682 pesos
              mexicanos, equivalentes a 100 USD aproximadamente. En todo caso,
              se pueden conseguir opciones mucho más económicas, todo depende de
              las preferencias de la persona y de la fecha en la que decida
              hacer la reserva.
              <br /> <br />
              En cuanto a la alimentación, hay que señalar que es posible
              disfrutar de un plato de ramen o curry por menos de 10 dólares en
              un restaurante local o de comida rápida, mientras que una cena en
              un restaurante de sushi de alta gama puede costar más de 100
              dólares por persona.
            </p>
          </div>

          <div className="div-2"></div>
        </div>
      </div>

      <div className="w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12 px-4 ">
        <h2 className="font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl xl:mb-12 mt-6 px-4">
          Seguro de viaje Japón
        </h2>
        <div className="flex xl:flex-row flex-col-reverse gap-y-12 items-center">
          <div className="div-1">
            <p className="px-4">
              {" "}
              Japón es un país con altos estándares de atención médica, sin
              embargo, los costos para los turistas pueden ser exorbitantes en
              caso de emergencia médica. Un buen seguro de viaje no solo cubre
              gastos médicos, sino que también puede ofrecer protección contra
              una variedad de imprevistos que podrían arruinar o incluso hacer
              más costoso el viaje. <br /> <br />
              El seguro de viaje puede cubrir desde visitas médicas por
              enfermedades menores hasta emergencias médicas y tratamientos
              hospitalarios. Esto es especialmente importante dado que muchos
              seguros locales no ofrecen cobertura fuera del país de origen.
              <br /> <br />
              Los costos de un seguro de viaje varían según el nivel de
              cobertura y la duración del viaje. Generalmente, el costo es una
              fracción del total del viaje, pero es una inversión que puede
              ahorrar gastos significativos en caso de emergencias o
              imprevistos.
            </p>
          </div>

          <div className="div-2 hidden xl:block">
            <img
              className="md:min-w-[400px]"
              src={img3}
              alt="imagen de pasaporte y documentos de viaje"
            ></img>
          </div>

          <div className="div-2 xl:hidden block mt-12">
            <img
              className="md:min-w-[200px]"
              src={img3}
              alt="imagen de pasaporte y documentos de viaje"
            ></img>
          </div>
        </div>
      </div>

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
      <div className=" w-full flex flex-col items-center bg-quoter-landscape ">
        <div className="w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] px-4">
          <h2 className="font-bold text-white md:text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6">
            Cotiza tu seguro de viaje a Japón
          </h2>
        </div>

        <div
          className="quoter-wrapper sm:bg-[rgba(178,205,255,0.68)] rounded-[20px] sm:px-[14px] sm:py-[20px]
              max-w-[592px]  mb-20  mx-auto "
        >
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
