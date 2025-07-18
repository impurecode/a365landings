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
          ¿Qué documentos necesito para viajar a Argentina?
        </h2>
        <div className='flex xl:flex-row flex-col-reverse gap-y-12 items-center'>
          <div className='div-1'>
            <p className='px-4'>
              {" "}
              Viajar a Argentina desde Chile es una experiencia accesible y
              emocionante debido a la cercanía geográfica y las facilidades
              migratorias entre ambos países. A continuación, se detallan los
              documentos necesarios: <br /> <br />
              <ul class='list-disc px-4'>
                <li>
                  Cédula de identidad vigente: Este documento es suficiente para
                  entrar a Argentina sin necesidad de un pasaporte.
                </li>
                <li>
                  Pasaporte válido: Aunque no es obligatorio, es recomendable
                  llevarlo, especialmente si planeas realizar trámites
                  adicionales o visitar otros países desde Argentina.
                </li>
              </ul>
              <br />
              Los ciudadanos chilenos tienen la ventaja de no necesitar
              pasaporte ni visa para estancias cortas de hasta 90 días, esto
              hace que viajar a Argentina sea muy fácil. Esto aplica para
              cualquier medio de transporte, con tan solo tener el DNI chileno
              se puede pasar por migración.
              <br /> <br />
              Lo ideal es que los documentos que se presenten durante el viaje
              estén en buen estado de conservación para evitar problemas en los
              puntos de control migratorio.
            </p>
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

      {/* <div className="w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[1210px] px-4">
        <FaqComponent />
      </div> */}

      <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12 px-4 '>
        <h2 className='font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6 px-4'>
          Requisitos para viajar en un vehículo particular
        </h2>
        <div className='flex flex-row items-center'>
          <div className='div-1'>
            <p className='px-4'>
              {" "}
              Para quienes desean viajar en auto a Argentina también hay buenas
              noticias, y es que los requisitos para hacerlo son mínimos. Solo
              hay que contar con: <br /> <br />
              <ul class='list-disc px-4'>
                <li>
                  Certificado de Inscripción Vehicular: Documento que acredita
                  la propiedad del vehículo.
                </li>
                <li>
                  Licencia de conducir vigente: Es fundamental tener una
                  licencia válida.
                </li>
                <li>
                  Seguro de Responsabilidad Civil Internacional (RCI) o Seguro
                  Mercosur: Este seguro es obligatorio y cubre los daños a
                  terceros en caso de accidente.
                </li>
              </ul>
              <br />
              Si el conductor no es el propietario del vehículo, se requiere una
              autorización notarial del titular.
              <br /> <br />
              Este método de viaje resulta ideal para quienes viven cerca de las
              áreas fronterizas y desean pasar a conocer la parte argentina. Sin
              embargo, para largas distancias, lo mejor puede ser viajar en
              avión, ya que el costo de los boletos aéreos es relativamente
              bajo.
            </p>
          </div>

          <div className='div-2'></div>
        </div>
      </div>

      <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12 px-4 '>
        <h2 className='font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl xl:mb-12 mt-6 px-4'>
          ¿Se necesita seguro para viajar a Argentina?
        </h2>
        <div className='flex xl:flex-row flex-col-reverse gap-y-12 items-center'>
          <div className='div-1'>
            <p className='px-4'>
              {" "}
              Aunque no es obligatorio, se recomienda encarecidamente contar con
              un seguro médico de viaje. Este seguro debería cubrir:
              <br /> <br />
              <ul class='list-disc px-4'>
                <li>
                  Consultas médicas: Cubre las visitas a médicos generales y
                  especialistas.
                </li>
                <li>
                  Repatriación sanitaria: En caso de necesitar regresar a Chile
                  por motivos médicos.
                </li>
                <li>
                  Tratamientos de emergencia: En caso de enfermedades repentinas
                  o accidentes.
                </li>
                <li>
                  Hospitalización: Cubre los gastos asociados a internaciones
                  necesarias debido a condiciones médicas graves.
                </li>
              </ul>
              <br />
              Contar con un seguro médico de viaje es una de las mejores
              decisiones que puedes tomar para garantizar una estancia segura y
              sin contratiempos en Argentina.
              <br /> <br />
              Al momento de elegir un
              <a
                href='https://assist-365.com/cl/destinos/seguro-de-viaje-argentina'
                className='underline text-blue-500'
              >
                {" "}
                seguro de viaje para Argentina
              </a>{" "}
              , lo ideal es tomar en cuenta factores como el costo y los límites
              de la cobertura.
              <br /> <br />
              En Assist 365 ofrecemos el mejor seguro de viajes internacional, y
              te podemos ayudar a lograr que tus vacaciones sean tan
              satisfactorias como lo sueñas.
            </p>
          </div>

          <div className='div-2 hidden xl:block'>
            <img
              className='md:min-w-[400px]'
              src={img3}
              alt='imagen de pasaporte y documentos de viaje'
            ></img>
          </div>

          <div className='div-2 xl:hidden block mt-12'>
            <img
              className='md:min-w-[200px]'
              src={img3}
              alt='imagen de pasaporte y documentos de viaje'
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
      <div className=' w-full flex flex-col items-center bg-quoter-landscape '>
        <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] px-4'>
          <h2 className='font-bold text-white md:text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6'>
            Cotiza tu seguro de viaje para Argentina
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
