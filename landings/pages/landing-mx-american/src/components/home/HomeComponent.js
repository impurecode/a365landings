import React, { useState, useEffect, useContext } from "react";
import Hero from "../hero/Hero";

import Testimonials from "./../testimonials/Testimonials";

import FaqComponent from "../faq/index.js";
import useMediaQuery from "@mui/material/useMediaQuery";
import { StoreContext } from "../../context/StoreContext.js";
import { types } from "../../context/StoreReducer";
import { QuoterComponent } from "quoter365";
import { quoter_config } from "../../config/app.config.js";

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
        <h2 className="font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6 px-4">
          ¿Por qué es importante cumplir todos los requisitos de la visa?
        </h2>
        <p className="px-4 text-center">
          Cumplir con todas las exigencias es esencial porque ayuda a garantizar
          el éxito de tu solicitud de visa americana, ya que cada una tiene un
          propósito claro. En este artículo, te explicamos en qué consisten los
          requisitos para que puedas solicitar tu visa americana de manera
          exitosa.
        </p>
      </div>

      <div className="w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[1210px] px-4">
        <FaqComponent />
      </div>

      <div className="w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12 px-4 ">
        <h2 className="font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6">
          Beneficios de viajar a Estados Unidos con seguro de viaje
        </h2>

        <div className="video-container max-w-[793px] mx-auto h-full px-4">
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/isIPXRQSL9g?si=-VeIbQh-1N8yeKPY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="xl:h-[434px] md:h-[331px] h-[186px]"
          ></iframe>
        </div>
      </div>

      {/* Quoter */}
      <div className=" w-full flex flex-col items-center bg-quoter-landscape ">
        <div className="w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] px-4">
          <h2 className="font-bold text-white md:text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6">
            Cotiza ahora tu seguro de viaje para Estados Unidos
          </h2>
          <p className="px-4 text-center mb-12">
            Además de solicitar la visa para viajar a Estados Unidos, te
            recomendamos contratar un{" "}
            <a
              className=" underline text-blue-500 "
              href="https://assist-365.com/mx/destinos/seguro-de-viaje-internacional"
            >
              seguro de viaje internacional.
            </a>{" "}
            De esta manera, podrás evitar cualquier tipo de preocupación en tu
            viaje, sobre todo, teniendo en cuenta los altos costos que tiene el
            servicio de salud en el territorio estadounidense. Estar internado
            un día en un hospital de los Estados Unidos puede tener un costo de
            hasta USD 7.000 y un traslado en ambulancia puede costar hasta USD
            2.500.
          </p>
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
