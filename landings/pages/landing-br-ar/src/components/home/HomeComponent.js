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

      <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[1210px] px-4 flex flex-col gap-12 md:gap-20 mt-12'>
        <div className='max-w-[793px] mx-auto h-full px-4 flex flex-col gap-4 md:gap-8'>
          <h3 className='font-bold text-blue-primary font-titillium text-xl md:text-4xl '>
            1- Voos
          </h3>
          <p className='font-titillium text-base md:text-xl'>
            {" "}
            São 270 frequências semanais com saídas a partir de São Paulo, Rio
            de Janeiro, Curitiba, Florianópolis, Porto Alegre, Brasília,
            Salvador, Maceió, Recife, Fortaleza e Natal. <br />
            <br />
            Há voos diretos ligando a destinos como Córdoba, Rosario, Mendoza,
            Salta, Tucumán, Bariloche, Ushuaia e El Calafate, e claro, Buenos
            Aires. São 11 companhias aéreas que oferecem rotas entre os dois
            países: Aerolíneas Argentinas, Fly Biondi, Gol, JetSmart, Latam, Air
            Canada, British Airways, Emirates, Ethiopian Airlines, Swiss Air
            Lines e Turkish Airlines.
          </p>
          <img
            src='https://assistcdn.s3.us-west-1.amazonaws.com/assets/img/landings/image_6.jpg'
            alt='copacabana'
          ></img>
        </div>
        <div className='max-w-[793px] mx-auto h-full px-4 flex flex-col gap-4 md:gap-8'>
          <h3 className='font-bold text-blue-primary font-titillium text-xl md:text-4xl '>
            2- Aeroportos
          </h3>
          <p className='font-titillium text-base md:text-xl'>
            <ul>
              <li>
                -Aeroporto Internacional Jorge Newbery (Aeroparque): fica a 7,4
                km do centro. É possível utilizar Uber ou táxi para chegar até o
                destino. Na área dos táxis há um sistema onde se escaneia um
                código de barras que abre uma página do governo. Em seguida é
                necessário preencher com informações da viagem. Pelo próprio
                site acessado é possível ver o valor em pesos que irá pagar até
                o destino escolhido. Isso evita os preços abusivos. Porém esta
                funcionalidade só existe no Aeroparque.
              </li>{" "}
              <br />
              <li>
                - Aeroporto Internacional Ministro Pistarini (Ezeiza): fica a 31
                km do centro. Há uma empresa de ônibus(Tienda León) que faz o
                trajeto e é possível comprar passagens no atendimento deles no
                aeroporto. Também se pode optar por táxi ou Uber, sendo que o
                segundo tende a ser mais econômico. <br /> <br />
                <span class='font-bold'>Importante:</span> Nunca use transportes
                clandestinos.
              </li>
            </ul>
          </p>
          <img
            src='https://assistcdn.s3.us-west-1.amazonaws.com/assets/img/landings/image_7.jpg'
            alt='do forte'
          ></img>
        </div>
        <div className='max-w-[793px] mx-auto h-full px-4 flex flex-col gap-4 md:gap-8'>
          <h3 className='font-bold text-blue-primary font-titillium text-xl md:text-4xl '>
            3- Documentos entrada
          </h3>
          <p className='font-titillium text-base md:text-xl'>
            Qualquer cidadão brasileiro pode ingressar na Argentina como
            turista, portando apenas o RG, desde que o documento esteja em bom
            estado de conservação e contenha uma foto atualizada ou o novo RG
            Digital. A CNH ou Carteira Funcional não são aceitas como documentos
            de viagem válidos para a Argentina, pois apenas o RG e o Passaporte
            estão inclusos no acordo do Mercosul para circulação entre os países
            membros.
          </p>
          <img
            src='https://assistcdn.s3.us-west-1.amazonaws.com/assets/img/landings/image_8.jpg'
            alt='pipa'
          ></img>
        </div>
        <div className='max-w-[793px] mx-auto h-full px-4 flex flex-col gap-4 md:gap-8'>
          <h3 className='font-bold text-blue-primary font-titillium text-xl md:text-4xl '>
            4- Requisitos de entrada COVID-19
          </h3>
          <p className='font-titillium text-base md:text-xl'>
            {" "}
            Desde 1º de Setembro de 2022, não há mais requisitos de entrada ou
            restrições relacionadas à pandemia para ingressar na Argentina.
          </p>
          <img
            src='https://assistcdn.s3.us-west-1.amazonaws.com/assets/img/landings/image_12.jpg'
            alt='atalaia'
          ></img>
        </div>
        <div className='max-w-[793px] mx-auto h-full px-4 flex flex-col gap-4 md:gap-8'>
          <h3 className='font-bold text-blue-primary font-titillium text-xl md:text-4xl '>
            5- Tomadas e voltagem
          </h3>
          <p className='font-titillium text-base md:text-xl'>
            {" "}
            As tomadas são o padrão Tipo I ou "Tomada Australiana". É um padrão
            diferente do usado no Brasil. Portanto, será necessário um adaptador
            de tomada para conectar seus dispositivos brasileiros nas tomadas
            argentinas. Além disso, a voltagem na Argentina é de 220-240 volts.
          </p>
          <img
            src='https://assistcdn.s3.us-west-1.amazonaws.com/assets/img/landings/image_9.jpg'
            alt='lopes mendes'
          ></img>
        </div>
        <div className='max-w-[793px] mx-auto h-full px-4 flex flex-col gap-4 md:gap-8'>
          <h3 className='font-bold text-blue-primary font-titillium text-xl md:text-4xl '>
            6- Moedas aceitas no comércio
          </h3>
          <p className='font-titillium text-base md:text-xl'>
            {" "}
            <p>
              A moeda oficial na Argentina é o peso. O dólar é amplamente
              aceito. Também é possível pagar com cartões de crédito. Em algumas
              lojas da Calle Florida (principal centro de compras de Buenos
              Aires) é possível pagar com: cartão de crédito, peso, dólar, real
              e alguns estabelecimentos aceitam PIX!! É importante destacar 3
              pontos:
            </p>{" "}
            <br />
            <ul>
              <li>
                -Compre pesos em pequenas quantidades. Voltar ao Brasil com a
                moeda argentina é um péssimo negócio, pelos altos índices de
                inflação no país.
              </li>
              <br />
              <li>
                -Existe a cotação oficial e a cotação paralela chamada de Blue (
                tanto para dólar quanto para real). Na cotação paralela o real
                vale praticamente o dobro.
              </li>
              <br />
              <li>
                -Trocar dólares ou reais nas cuevas: as cuevas são as casas de
                câmbio paralelo, em Buenos Aires ficam concentradas
                principalmente na Calle Florida. Lá o chamado dólar ou real blue
                terá cotação bem mais vantajosa, porém se está operando um tipo
                de câmbio que embora seja tolerado pelas autoridades, é
                clandestino e, portanto, se receber notas falsas, não tem a quem
                reclamar. Ainda assim, buscando informações com outros viajantes
                ou indicações da recepção dos hotéis é possível encontrar uma
                “cueva” honesta.
              </li>
            </ul>
          </p>
          <img
            src='https://assistcdn.s3.us-west-1.amazonaws.com/assets/img/landings/image_11.jpg'
            alt='lopes mendes'
          ></img>
        </div>
        <div className='max-w-[793px] mx-auto h-full px-4 flex flex-col gap-4 md:gap-8'>
          <h3 className='font-bold text-blue-primary font-titillium text-xl md:text-4xl '>
            7- Transporte público
          </h3>
          <p className='font-titillium text-base md:text-xl'>
            {" "}
            Em Buenos Aires há mais de 180 linhas de ônibus e seis de metrô,
            além de diferentes linhas ferroviárias. Para locomover-se usando
            qualquer um desses transportes públicos é necessário adquirir o
            Cartão SUBE, um sistema único de ticket eletrônico. Não é aceito
            dinheiro em espécie e o valor da passagem é muito barato (equivale a
            menos de 1 real). <br />
            <br />
            <ul>
              <li>
                - Metrô (chamado de "subte" em Buenos Aires) é a forma mais
                rápida e fácil de chegar ao destino na Cidade de Buenos Aires.
                As seis linhas estão conectadas com as principais avenidas e
                estações de trem e ônibus e convergem para o micro-centro da
                cidade, a principal zona hoteleira e de atrativos turísticos.
                <br />O serviço funciona com regularidade de segunda a sexta das
                5h30 às 23h30m, sábados das 6h às 00h e domingos e feriados das
                8h às 22h30m, conforme a linha ou o horário. <br />
                Várias estações de metrô vendem os cartões SUBE, nelas é
                possível comprar e recarregar. O mesmo cartão também pode ser
                utilizado em trens e ônibus.
              </li>
              <br />
              <li>
                - Ônibus (chamado de "colectivo" em Buenos Aires) é outra forma
                rápida e econômica para trasladar-se pela Cidade de Buenos
                Aires. O serviço funciona com regularidade 24h e reduz a
                frequência após as 23h. Conforme a linha e o horário, as
                frequências podem variar entre 2 e 40 minutos entre um ônibus e
                outro.
              </li>
            </ul>
          </p>
          <img
            src='https://assistcdn.s3.us-west-1.amazonaws.com/assets/img/landings/image_10.jpg'
            alt='lopes mendes'
          ></img>
        </div>
        <div className='max-w-[793px] mx-auto h-full px-4 flex flex-col gap-4 md:gap-8'>
          <h3 className='font-bold text-blue-primary font-titillium text-xl md:text-4xl '>
            8 – Transporte privado
          </h3>
          <p className='font-titillium text-base md:text-xl'>
            {" "}
            Há uma grande oferta em Buenos Aires, tanto Uber quanto táxi. Os
            preços são relativamente parecidos e, no geral, mais barato do que
            se pagaria no Brasil. Para quem tem dificuldade com o idioma ou
            busca saber o valor exato a pagar antecipadamente, o Uber acaba
            sendo uma opção mais interessante. <br />
            Importante: Tanto em ônibus quanto em táxi, informe o seu destino ao
            motorista pelo cruzamento das ruas onde você quer ir, a menos que o
            ponto seja extremamente conhecido..
          </p>
          <img
            src='https://assistcdn.s3.us-west-1.amazonaws.com/assets/img/landings/image_5.png'
            alt='lopes mendes'
          ></img>
        </div>
        <div className='max-w-[793px] mx-auto h-full px-4 flex flex-col gap-4 md:gap-8'>
          <h3 className='font-bold text-blue-primary font-titillium text-xl md:text-4xl '>
            9- Retorno ao Brasil: Dúvidas do que se pode trazer de Buenos Aires
            ao Brasil?
          </h3>
          <p className='font-titillium text-base md:text-xl'>
            {" "}
            Ao retornar ao Brasil, é importante ficar atento às regras de
            entrada de produtos para não passar perrengue no aeroporto. Desde o
            ano passado, o limite de compras no exterior por via aérea ou
            marítima subiu de US$500 para US$1 mil (cerca de R$ 5 mil). A cota é
            renovada a cada um mês. <br />
            <br />
            Você também pode trazer outros US$ 1 mil de lojas free shop, que são
            as lojas do aeroporto. Caso esses valores sejam ultrapassados, o
            imposto de importação terá de ser pago, de acordo com a Receita
            Federal. <br />
            <br />
            Três itens estão no topo das listas da maioria das pessoas que
            visitam a Argentina: Alfajor, vinho e doce de leite. Não é para
            menos, são deliciosos e bem mais baratos do que no Brasil! Veja as
            regras para transporte deles:
            <ul class='pb-6'>
              <li>
                -Vinho -Geralmente as cias aéreas permitem que se levem até 6
                garrafas de vinho dentro da cabine. No total incluindo cabine e
                porão se pode transportar até 12 litros de vinho.
              </li>
              <br />
              <li>
                -Doce de leite - Para levar na mão, a soma dos doces de leite,
                além dos demais pastosos e líquidos que você quiser levar na
                cabine, não pode ultrapassar 1 litro. Isso inclui também
                perfumes e produtos de higiene pessoal, a menos que se compre no
                free shop. Despachados se pode levar até 5 kg.
              </li>
              <br />
              <li>
                -Alfajor - Na regulamentação brasileira, não há referência
                específica ao transporte de alfajor. Geralmente o transporte de
                alimentos industrializados é restrito à bagagem despachada.
                <br />
                <br />
                Importante: ao fazer suas compras desses itens no free shop,
                consulte os funcionários quanto às quantidades para se levar a
                bordo ou a própria cia aérea. Eles saberão passar as orientações
                de acordo com as normas.
              </li>
            </ul>
          </p>
          <img
            src='https://assistcdn.s3.us-west-1.amazonaws.com/assets/img/landings/image_4.png'
            alt='lopes mendes'
          ></img>
        </div>
      </div>

      <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] mt-12 mb-12 px-4 '>
        <h2 className='font-bold text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6'>
          ¿O que fazer em Buenos Aires em 2023?
        </h2>

        <div className='video-container max-w-[793px] mx-auto h-full px-4'>
          <iframe
            width='100%'
            src='https://www.youtube.com/embed/39IBQlzkWNI'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='xl:h-[434px] md:h-[331px] h-[186px]'
          ></iframe>
        </div>
      </div>

      {/* Quoter */}
      <div className=' w-full flex flex-col items-center bg-quoter-landscape '>
        <div className='w-full mx-auto max-w-[358px] sm:max-w-[633px] xl:max-w-[960px] px-4'>
          <h2 className='font-bold text-white md:text-blue-primary text-center font-titillium text-3xl sm:text-4xl xl:text-6xl mb-12 mt-6'>
            Cote seu seguro para Argentina
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
