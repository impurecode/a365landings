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
      {/* <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12'>
        <h1 className="font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6">
        5 ciudades que debes visitar en Brasil
        </h1>
      </div> */}

      <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[1210px] px-4 flex flex-col gap-12 md:gap-20 mt-12 mb-12'>
        <div className='max-w-[793px] mx-auto h-full px-4 flex flex-col gap-4 md:gap-8'>
          <h3 className='font-bold text-blue-primary font-titillium text-xl md:text-4xl text-center  '>
            Requisitos de entrada no Uruguai
          </h3>
          <p className='font-titillium text-base md:text-xl'>
            {" "}
            <ul>
              <li>
                -Passaporte válido por pelo menos 6 meses, ou Carteira de
                Identidade (RG) válida expedida pela Secretaria de Segurança
                Pública de Estado da Federação (atenção para RG antigas ou em
                mau estado).
              </li>{" "}
              <br />
              <li>
                - Brasileiros com passaportes com chip podem usar os leitores
                automáticos no Aeroporto de Carrasco, em Montevidéu.
              </li>
              <br />
              <li>
                - Carteiras de motorista brasileiras não são aceitas para
                entrada no Uruguai, apenas para dirigir.
              </li>
              <br />
              <li>
                - O Acordo do Mercosul exige que o RG tenha prazo de validade e
                informe a naturalidade do portador.
              </li>
              <br />
              <li>
                - Autoridades uruguaias não aceitam outras carteiras como
                documento de viagem, como carteiras profissionais de identidade
                emitidas por associações ou entidades de classe.
              </li>
              <br />
              <li>
                - Tempo máximo de permanência para turistas brasileiros é de até
                90 dias, renováveis por mais 90. Para informações adicionais,
                consultar o site da Embaixada do Uruguai em Brasília
                <a class='underline text-blue-500' href='www.emburuguai.org.br'>
                  (www.emburuguai.org.br)
                </a>
              </li>
            </ul>
          </p>
          <img
            src='https://assistcdn.s3.us-west-1.amazonaws.com/assets/img/landings/image_1.jpg'
            alt='copacabana'
          ></img>
        </div>
        <div className='max-w-[793px] mx-auto h-full px-4 flex flex-col gap-4 md:gap-8'>
          <h3 className='font-bold text-blue-primary font-titillium text-xl md:text-4xl text-center '>
            Requisitos covid-19
          </h3>
          <p className='font-titillium text-base md:text-xl'>
            <ul class='pb-6'>
              <li>
                -Desde 16 de fevereiro de 2023, não é mais necessário apresentar
                certificado de vacinação contra a COVID-19.
              </li>
              <br />
              <li>
                - Não é necessário teste PCR para os viajantes,
                independentemente de sua idade ou nacionalidade.
              </li>
              <br />
              <li>
                - Não é necessário apresentar uma declaração juramentada de
                entrada no Uruguai.
              </li>
              <br />
              <li>
                - Seguro viagem é obrigatório para pessoas estrangeiras que
                entram no país por qualquer meio.
              </li>
            </ul>
          </p>
          <img
            src='https://assistcdn.s3.us-west-1.amazonaws.com/assets/img/landings/image_2.jpg'
            alt='do forte'
          ></img>
        </div>
        <div className='max-w-[793px] mx-auto h-full px-4 flex flex-col gap-4 md:gap-8'>
          <h3 className='font-bold text-blue-primary font-titillium text-xl md:text-4xl text-center  '>
            Requisitos para dirigir no Uruguai
          </h3>
          <p className='font-titillium text-base md:text-xl'>
            {" "}
            <ul>
              <li>
                -Para dirigir no Uruguai é necessário apresentar RG ou
                passaporte válido e CNH ou PID (Permissão Internacional para
                Dirigir) emitida pelo Detran.
              </li>
              <br />
              <li>
                - Desde 1° de julho, o Uruguai implementou mudanças no
                funcionamento dos pedágios e alguns deles não receberão
                pagamento em dinheiro.
              </li>
              <br />
              <li>
                - No caso de estrangeiros a passagem por todos os pedágios do
                Uruguai devem ser feitas mediante o registro de usuário e
                veículo através do Passe Turista. Com o Passe turista você pode
                transitar pelos pedágios através da leitura da placa do seu
                veículo até chegar ao destino final.
              </li>
              <br />
              <li>
                - Como registrar: acesse telepeaje.com/paseturista ou no app
                Telepeajeuy e registrando seus dados.
              </li>
              <br />
              <li>
                - Após realizar seu registro, você receberá no seu e-mail, o
                usuário e a senha com os quais poderá acessar a web ou a app
                para consultar sua conta Telepeaje.
              </li>
              <br />
              <li>
                -Como pagar: online acessando telepeaje.com.uy/recargas, ou nas
                agências Abitab ou Redpagos para pagamento à vista, ou nos
                escritórios das empresas de pedágio para pagamento com cartões
                de débito ou crédito.
              </li>
            </ul>
          </p>
          <img
            src='https://assistcdn.s3.us-west-1.amazonaws.com/assets/img/landings/image_3.jpg'
            alt='pipa'
          ></img>
        </div>
      </div>

      {/* <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12 px-4 '>
        <h1 className="font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6">
        ¿O que fazer em Buenos Aires em 2023?
        </h1>
      
        <div className="video-container max-w-[793px] mx-auto h-full px-4">
          <iframe
            width="100%"
         
            src="https://www.youtube.com/embed/39IBQlzkWNI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen

            className='xl:h-[434px] md:h-[331px] h-[186px]'
          ></iframe>
        </div>
      </div> */}

      {/* Quoter */}
      <div className=' w-full flex flex-col items-center bg-quoter-landscape '>
        <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] px-4'>
          <h2 className='font-bold text-white md:text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6'>
            Cote seu seguro para Uruguay
          </h2>
        </div>

        <div
          className='quoter-wrapper sm:bg-[rgba(178,205,255,0.68)] rounded-[20px] sm:px-[14px] sm:py-[20px]
              max-w-[592px]  mb-20  mx-auto '
        >
          <div className='text-base md:text-xl font-semibold font-titillium text-white mb-[10px] md:mb-5 pl-1'>
            Cote seu seguro Assist 365
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
