import React, { useState, useEffect, useContext } from "react";
import Hero from "../hero/Hero";

import Testimonials from "./../testimonials/Testimonials";

import FaqComponent from "../faq/index.js";
import useMediaQuery from "@mui/material/useMediaQuery";
import { StoreContext } from "../../context/StoreContext.js";
import { types } from "../../context/StoreReducer";
import { QuoterComponent } from 'quoter365';
import { quoter_config } from '../../config/app.config.js';
import copacabana from '../../assets/img/copacabana.jpg'
import doforte from '../../assets/img/doforte.jpg'
import pipa from '../../assets/img/pipa.jpg'
import atalaia from '../../assets/img/atalaia.jpg'
import lopesmendes from '../../assets/img/lopesmendes.jpg'



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
        Top 5 de playas en Brasil
        </h2>
      </div>

      <div className="w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[1210px] px-4 flex flex-col gap-12 md:gap-20">
        <div className='max-w-[793px] mx-auto h-full px-4 flex flex-col gap-4 md:gap-8'>
          <h3 className='font-bold text-blue-primary font-titillium text-xl md:text-4xl ' >Copacabana – Rio de Janeiro</h3>
          <p className='font-titillium text-base md:text-xl'>Copacabana es una de las playas más famosas del mundo, localizada en la Zona Sur de la ciudad. Es una playa icónica que se extiende por más de cuatro kilómetros en el corazón de Río de Janeiro. Si estás buscando diversión, esta playa cuenta con numerosos bares y restaurantes de gastronomía local, y es famosa por su animada vida nocturna. Además, el paisaje en Copacabana es impresionante, con montañas y acantilados que rodean la playa.</p>
          <img src={copacabana} alt='copacabana' ></img>
        </div>
        <div className='max-w-[793px] mx-auto h-full px-4 flex flex-col gap-4 md:gap-8'>
          <h3 className='font-bold text-blue-primary font-titillium text-xl md:text-4xl ' >Praia do Forte - Bahia</h3>
          <p className='font-titillium text-base md:text-xl'>Praia do Forte es una playa maravillosa en la región de Bahía, en el noreste de Brasil. La playa ofrece un paisaje increible de aguas cristalinas y una amplia variedad de vida marina, lo que la convierte en un lugar ideal si sos fanático de los deportes acuáticos como: snorkel y buceo. Además, Praia do Forte es famosa por sus piscinas naturales, que se forman cuando la marea baja y podés caminar por ellas.</p>
          <img src={doforte} alt='do forte' ></img>
        </div>
        <div className='max-w-[793px] mx-auto h-full px-4 flex flex-col gap-4 md:gap-8'>
          <h3 className='font-bold text-blue-primary font-titillium text-xl md:text-4xl ' >Praia de Pipa - Rio Grande do Norte</h3>
          <p className='font-titillium text-base md:text-xl'>Praia de Pipa es una playa espectacular en la región de Río Grande do Norte, en el noreste de Brasil. La playa cuenta con una gran variedad de paisajes, desde acantilados y dunas de arena hasta aguas cristalinas y arrecifes de coral. Además, la playa es famosa por su vida nocturna y sus numerosos bares y restaurantes.</p>
          <img src={pipa} alt='pipa' ></img>
        </div>
        <div className='max-w-[793px] mx-auto h-full px-4 flex flex-col gap-4 md:gap-8'>
          <h3 className='font-bold text-blue-primary font-titillium text-xl md:text-4xl ' >Prainhas do Pontal Do Atalaia -  Arraial do Cabo</h3>
          <p className='font-titillium text-base md:text-xl'>Prainhas do Pontal Do Atalaia es una playa famosa por una escalera larguísima que termina en una playa turquesa espectacular que te lleva al paraíso caribeño. Está localizada cerca de Rio de Janeiro, convirtiéndose una joya al sureste de Brasil con una fina arena blanca de ambiente tranquilo, ideal para relajarse y disfrutar del sol. .</p>
          <img src={atalaia} alt='atalaia' ></img>
        </div>
        <div className='max-w-[793px] mx-auto h-full px-4 flex flex-col gap-4 md:gap-8'>
          <h3 className='font-bold text-blue-primary font-titillium text-xl md:text-4xl ' >Lopes Mendes – Ilha Grande</h3>
          <p className='font-titillium text-base md:text-xl'>Lopes Mendes es una playa de ensueño, siendo una de las playas del sur de Brasil, con kilómetros de arena blanca y aguas cristalinas. Es famosa por ser una de las mejores playas de para practicar surf en Brasil, debido a que cuenta con excelentes olas para surfear. Además, está ubicada en una isla deshabitada, convirtiéndola en una isla virgen, de vida marina abundante, rodeada de selva tropical. Es la playa ideal para escapar de la ciudad y conectarse con la naturaleza.</p>
          <img src={lopesmendes} alt='lopes mendes' ></img>
        </div>
      </div>

      <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12 px-4 '>
        <h2 className="font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6">
        ¿Es obligatorio contar con un seguro de viaje para entrar a Brasil?
        </h2>
        <h3 className='px-4 text-center mb-12'> El seguro de viaje en Francia ofrece una invaluable tranquilidad y protección para los viajeros. Al contar con este seguro, los visitantes estarán cubiertos ante cualquier eventualidad médica, evitando gastos inesperados en caso de accidentes o enfermedades durante su estadía.
        <br/>
        Para conocer más detalles sobre los requisitos para ingresar a Brasil, consulta nuestra nota <a href='https://assist-365.com/ar/requisitos/requisitos-para-viajar-a-brasil' className='underline text-blue-500'>"Cuáles son los requisitos para viajar a Brasil". </a>
        </h3> 
      
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