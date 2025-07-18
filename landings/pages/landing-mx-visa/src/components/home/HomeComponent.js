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
          Listado de países que puedes visitar con pasaporte mexicano
        </h2>
        <div className="flex xl:flex-row flex-col-reverse gap-y-12 items-center">
          <div className="div-1">
            <p className="px-4">
              {" "}
              La lista de países que puedes visitar con pasaporte mexicano es
              muy amplia, ya que el pasaporte de México es uno de los más
              poderosos de la región. De manera que puedes viajar solo con el
              pasaporte a toda el Área Schengen, a todos los países de América
              del Sur (exceptuando Guyana), y a algunos países de África y Asia.{" "}
              <br /> <br />
              Este es un listado en el que incluímos algunos de los países más
              representativos a los que puedes viajar con pasaporte mexicano sin
              necesidad de una visa:
              <br /> <br />
            </p>
            <ul class="list-disc list-inside px-8">
              <li>Alemania</li>
              <li>Bélgica</li>
              <li>Croacia</li>
              <li>Dinamarca</li>
              <li>Emiratos Árabes Unidos</li>
              <li>España</li>
              <li>Finlandia</li>
              <li>Francia</li>
              <li>Irlanda</li>
              <li>Marruecos</li>
              <li>Países Bajos</li>
              <li>Reino Unido</li>
            </ul>
            <br /> <br />
            <p className="px-4">
              {" "}
              Ten presente que la lista es mucho más larga, porque incluye 161
              países a los que puedes entrar como mexicano con tan solo tener el
              pasaporte vigente. Regularmente, esto aplica para viajes
              turísticos que sean menores a 90 días.
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
          ¿Cuáles son los requisitos para viajar a los países que no piden visa?
        </h2>
        <div className="flex flex-row items-center">
          <div className="div-1">
            <p className="px-4">
              {" "}
              A pesar de que existe un gran número de países que no piden visa a
              los mexicanos, existen algunas regulaciones que es importante
              tomar en consideración. Cada país tiene sus propias normas, y
              puede solicitar certificados de vacunación, seguros de viaje y que
              el viajero cuente con un monto específico de dinero para cubrir
              todos sus gastos.
              <br /> <br />
              Aunque no siempre es obligatorio, muchos países recomiendan o
              requieren que los visitantes tengan un seguro de viaje que cubra
              gastos médicos y posibles emergencias durante su estancia. Además,
              un buen seguro de viaje también puede incluir cobertura para
              cancelación y pérdida de equipaje.
              <br /> <br />
              Lo ideal es investigar muy bien esto antes de viajar, de manera
              que se puedan evitar imprevistos y que todo salga bien durante el
              viaje. La información sobre los requisitos que exige cada país a
              los turistas mexicanos es muy fácil de conseguir, tanto en línea
              como en la embajada del país que se quiere visitar.
            </p>
          </div>

          <div className="div-2"></div>
        </div>
      </div>

      <div className="w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12 px-4 ">
        <h2 className="font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl xl:mb-12 mt-6 px-4">
          ¿Para qué países se necesita visa como mexicano?
        </h2>
        <div className="flex xl:flex-row flex-col-reverse gap-y-12 items-center">
          <div className="div-1">
            <p className="px-4">
              {" "}
              Si bien hay muchos países que no piden visa a los mexicanos,
              existen otros en los que la política es diferente y sí se requiere
              de un visado. Los más conocidos son Estados Unidos y Canadá, pero
              estos no son los únicos.
              <br /> <br />
              También es necesario contar con visa para viajar a Australia,
              China, Cuba, Nueva Zelanda, Rusia y una gran parte de los países
              de África y Asia.
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
            Cotiza tu seguro de viaje internacional
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
