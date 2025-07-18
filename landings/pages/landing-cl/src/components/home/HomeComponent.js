import React, { useState, useEffect, useContext } from "react";
import Hero from "../hero/Hero";

import Testimonials from "./../testimonials/Testimonials";

import FaqComponent from "../faq/index.js";
import useMediaQuery from "@mui/material/useMediaQuery";
import { StoreContext } from "../../context/StoreContext.js";
import { types } from "../../context/StoreReducer";
import { QuoterComponent } from 'quoter365';
import { quoter_config } from '../../config/app.config.js';

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
      <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12 px-4 '>
        <h2 className="font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6 px-4">
        ¿Qué necesito para viajar a Chile desde Argentina?
        </h2>
       <p className='px-4'> Desde septiembre de 2020, Chile exige a todos los viajeros internacionales que ingresen al país la presentación de un seguro médico que tenga cobertura para gastos médicos y hospitalarios.<br/><br/>
Este seguro de viaje es obligatorio para todos los visitantes extranjeros, incluyendo turistas y viajeros de negocios. Es importante que los viajeros cuenten con el seguro de viaje adecuado antes de su llegada a Chile, ya que las autoridades migratorias pueden solicitar la prueba de este seguro durante el proceso de entrada al país. <br/> <br/>
Si necesitas más información o estás buscando un seguro internacional te recomendamos que visites nuestra sección de <a href='https://assist-365.com/ar/destinos/seguro-de-viaje-internacional' className='underline text-blue-500'>seguros de viaje internacionales.</a> </p> 
       
      </div>

      <div className="w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[1210px] px-4">
        <FaqComponent />
      </div>

      <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12 px-4 '>
        <h2 className="font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6">
        ¿Necesito un seguro de viaje para viajar a Chile hoy? 
        </h2>
      
        <div className="video-container max-w-[793px] mx-auto h-full px-4">
          <iframe
            width="100%"
         
            src="https://www.youtube.com/embed/_jUgyF-d7G4?si=QmLGUJ3Nk4qa2oly"
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
        Cotiza tu seguro de viaje para Chile
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