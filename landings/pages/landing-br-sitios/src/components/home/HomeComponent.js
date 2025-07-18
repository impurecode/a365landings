import React, { useState, useEffect, useContext } from "react";
import Hero from "../hero/Hero";

import Testimonials from "./../testimonials/Testimonials";

import FaqComponent from "../faq/index.js";
import useMediaQuery from "@mui/material/useMediaQuery";
import { StoreContext } from "../../context/StoreContext.js";
import { types } from "../../context/StoreReducer";
import { QuoterComponent } from 'quoter365';
import { quoter_config } from '../../config/app.config.js';
import copacabana from '../../assets/img/riodejaneiro.jpg'
import doforte from '../../assets/img/salvador.jpg'
import pipa from '../../assets/img/iguazu.jpg'
import atalaia from '../../assets/img/brasilia.jpg'
import lopesmendes from '../../assets/img/sao_paulo.jpg'



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
      <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12'>
        <h2 className="font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6">
        5 ciudades que debes visitar en Brasil
        </h2>
      </div>

      <div className="w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[1210px] px-4 flex flex-col gap-12 md:gap-20">
        <div className='max-w-[793px] mx-auto h-full px-4 flex flex-col gap-4 md:gap-8'>
          <h3 className='font-bold text-blue-primary font-titillium text-xl md:text-4xl ' >Rio de Janeiro</h3>
          <p className='font-titillium text-base md:text-xl'>Es uno de los destinos turísticos más populares de Brasil y del mundo, por su mezcla única de playas, vida nocturna, cultura y patrimonio. Desde la icónica estatua del Cristo Redentor en la cima del Corcovado hasta las playas de Copacabana e Ipanema, esta ciudad tiene algo para todos los gustos. <br/> <br/> Además, podés disfrutar de la música, la comida y la danza en la ciudad que es conocida por su famoso e icónico carnaval. <br/> <br/>
Además, en Rio también puedes visitar el Estadio Maracaná, la Catedral de Río de Janeiro y el Pan de Azúcar.
.</p>
          <img src={copacabana} alt='copacabana' ></img>
        </div>
        <div className='max-w-[793px] mx-auto h-full px-4 flex flex-col gap-4 md:gap-8'>
          <h3 className='font-bold text-blue-primary font-titillium text-xl md:text-4xl ' >Salvador de Bahía</h3>
          <p className='font-titillium text-base md:text-xl'>Es un destino turístico que destaca por su historia y su cultura afrobrasileña. Es la capital del estado de Bahía y es conocida por sus coloridas calles, sus hermosas playas y su vibrante vida nocturna. En el centro histórico de Salvador de Bahía se encuentran iglesias barrocas, museos, plazas y edificios coloniales que reflejan la influencia africana en la ciudad. <br/><br/>


Salvador de Bahía tiene otros lugares además de sus playas que puedes visitar: Iglesia San Francisco, Casa do Rio Vermelho y Pelourinho.
.</p>
          <img src={doforte} alt='do forte' ></img>
        </div>
        <div className='max-w-[793px] mx-auto h-full px-4 flex flex-col gap-4 md:gap-8'>
          <h3 className='font-bold text-blue-primary font-titillium text-xl md:text-4xl ' >Foz do Iguaçu o Cataratas del Iguazú</h3>
          <p className='font-titillium text-base md:text-xl'>Es una de las atracciones turísticas más impresionantes de Brasil, gracias a sus cataratas del mismo nombre, que se encuentran en la frontera de Brasil. Las Cataratas del Iguazú son una de las maravillas naturales del mundo, con 275 cascadas que se extienden a lo largo de 2,7 kilómetros y es uno de los lugares turísticos de Brasil cerca de Argentina. <br/> <br/> En Foz do Iguaçu también puedes disfrutar de Parque das Aves, Marco Das Tres Fronteiras y Garganta do Diabo.
</p>
          <img src={pipa} alt='pipa' ></img>
        </div>
        <div className='max-w-[793px] mx-auto h-full px-4 flex flex-col gap-4 md:gap-8'>
          <h3 className='font-bold text-blue-primary font-titillium text-xl md:text-4xl ' >Brasilia</h3>
          <p className='font-titillium text-base md:text-xl'>Brasilia, la capital de Brasil, es una ciudad moderna y única. Diseñada por el famoso arquitecto Oscar Niemeyer, la ciudad es conocida por su arquitectura moderna y su diseño urbano futurista. Además, es un importante centro cultural y político, con muchos museos, galerías de arte y teatros. <br/> <br/>
En Brasilia también puedes disfrutar de una experiencia diferente en Pontao do Lago Sul, Catedral Metropolitana y Santuario Dom Bosco.
</p>
          <img src={atalaia} alt='atalaia' ></img>
        </div>
        <div className='max-w-[793px] mx-auto h-full px-4 flex flex-col gap-4 md:gap-8'>
          <h3 className='font-bold text-blue-primary font-titillium text-xl md:text-4xl ' >São Paulo</h3>
          <p className='font-titillium text-base md:text-xl'>Lopes Mendes es una playa de ensueño, siendo una de las playas del sur de Brasil, con kilómetros de arena blanca y aguas cristalinas. Es famosa por ser una de las mejores playas de para practicar surf en Brasil, debido a que cuenta con excelentes olas para surfear. Además, está ubicada en una isla deshabitada, convirtiéndola en una isla virgen, de vida marina abundante, rodeada de selva tropical. Es la playa ideal para escapar de la ciudad y conectarse con la naturaleza.</p>
          <img src={lopesmendes} alt='lopes mendes' ></img>
        </div>
      </div>

      <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12 px-4 '>
        <h2 className="font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6">
        ¿Es obligatorio contar con un seguro de viaje para entrar a Brasil?
        </h2>
        <h3 className='px-4 mb-12'>Para viajar seguro, es necesario y obligatorio contar con un <a href='https://assist-365.com/ar/destinos/seguro-de-viaje-brasil' className='underline text-blue-500'>seguro de asistencia al viajero en tu viaje a Brasil,</a>  debido a que es una forma inteligente de cuidarte y estar preparado ante cualquier situación de emergencia. Destinos como Brasil con una gran cantidad de actividades por hacer, es esencial contar con un asistente al viajero. </h3> 
      
        <div className="video-container max-w-[793px] mx-auto h-full px-4">
          <iframe
            width="100%"
         
            src="https://www.youtube.com/embed/QdHep6vNdkw?si=lrmq6syocwqZozja"
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
        Cotiza tu seguro de viaje para Brasil
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