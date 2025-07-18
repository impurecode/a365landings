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
          Documentación necesaria para viajar a Brasil
        </h2>
        <div className="flex xl:flex-row flex-col-reverse gap-y-12 items-center">
          <div className="div-1">
            <p className="px-4">
              {" "}
              Para viajar a Brasil desde México, es fundamental contar con toda
              la documentación que exigen las autoridades. Estos son algunos de
              los requisitos: <br /> <br />
              - Pasaporte: los ciudadanos mexicanos deben asegurarse de que su
              pasaporte tenga una validez mínima de seis meses a partir de la
              fecha de entrada al país.
              <br /> <br />
              -Boletos de avión de viaje redondo y los datos de hospedaje.
              <br /> <br />
              Como puedes ver, no se requiere de ningún tipo de visado para
              quienes van como turistas por un período menor a 90 días. Tampoco
              es necesario contar con certificados de vacunación específicos.
              <br /> <br />
              En caso de que visites algunos estados como Acre, Amazonas y
              Bahía, es recomendable tomar algunas previsiones de salud y
              aplicarse la vacuna contra la fiebre amarilla al menos 10 días
              antes del viaje.
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
          Recomendaciones para viajar a Brasil desde México
        </h2>
        <div className="flex flex-row items-center">
          <div className="div-1">
            <p className="px-4">
              {" "}
              El Consulado General de México en Río de Janeiro tiene una lista
              de recomendaciones muy útiles para quienes están pensando en
              viajar a Brasil desde México. Dentro de ellas se destacan:
              <br /> <br />
              - Tener una copia fotostática del pasaporte en físico o en
              digital, para evitar complicaciones en caso de robo o extravío.
              <br /> <br />
              - Verificar la validez de las tarjetas de débito o crédito
              mexicanas en el territorio de Brasil.
              <br /> <br />
              - Tener a la mano los datos de contacto de las representaciones de
              México en Brasil y de algún contacto en caso de emergencia.
              <br /> <br />
              - Tomar precauciones para cuidar las pertenencias personales,
              sobre todo en lugares turísticos en los que las tasas de robo
              suelen ser muy altas.
              <br /> <br />
              Seguir estas recomendaciones te permitirá evitar problemas durante
              tu viaje. Asimismo, es recomendable contar con un seguro de viaje
              internacional, ya que con él es posible cubrir cualquier
              imprevisto que se presente.
            </p>
          </div>

          <div className="div-2"></div>
        </div>
      </div>

      <div className="w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12 px-4 ">
        <h2 className="font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl xl:mb-12 mt-6 px-4">
          Consejos para mantenerse seguro durante un viaje a Brasil
        </h2>
        <div className="flex xl:flex-row flex-col-reverse gap-y-12 items-center">
          <div className="div-1">
            <p className="px-4">
              {" "}
              Como en cualquier viaje internacional, es esencial tomar
              precauciones para garantizar una experiencia segura. Brasil es un
              lugar muy atractivo para viajar, pero los viajeros se exponen a
              brotes de enfermedades como el dengue y en algunas ciudades los
              niveles de inseguridad son muy altos.
              <br /> <br />
              Es recomendable investigar las áreas recomendadas para turistas y
              aquellas que es mejor evitar, especialmente después del anochecer.
              <br /> <br />
              De igual manera, hay que resaltar la importancia de contratar el
              seguro de viaje internacional como el que ofrece Assist 365, ya
              que su cobertura te puede proporcionar una tranquilidad invaluable
              durante tu estancia en Brasil.
              <br /> <br />
              Este seguro puede ser clave en situaciones inesperadas, en las que
              requieras desde atención médica hasta asistencia legal y soporte
              en caso de pérdida de equipaje.
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
            Cotiza tu seguro de viaje a Brasil
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
