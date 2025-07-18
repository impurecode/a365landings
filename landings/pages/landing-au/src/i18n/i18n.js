import i18n from "i18next";
import { initReactI18next } from "react-i18next";
i18n.use(initReactI18next).init({
  resources: {

    "es-AR": {
      translations: {
        index: {
          headingPart1: "¿Cuáles son los requisitos para entrar a Uruguay?",
          headingPart2: "",
          subHeading: "Tu seguro de viaje para todo el mundo",
          quoterHeading: "Cotiza ahora tu asistencia al viajero Assist 365",
          testimonials: {
            heading: "Sabemos como cuidarte",
            subheading:
              "Escuchamos a nuestros clientes para acercarle la cobertura que se ajuste a sus necesidades.",
            content: {
              0: {
                name: "Eleonora",
                country_code: "ar",
                country_name: "Argentina",
                content:
                  "Agradezco su atención, el personal de servicio al cliente muy empático, la atención donde me derivaron muy buen...",
              },
              1: {
                name: "Jorge",
                country_code: "mx",
                country_name: "México",
                content:
                  "La contratación fue simple y la atención del equipo muy buena. La aerolínea extravió mi equipaje y me dieron soporte.",
              },
              2: {
                name: "Jonathan",
                country_code: "cl",
                country_name: "Chile",
                content:
                  "Empáticos y cordiales. Buena gestión. Volvería a contratar.",
              },
              3: {
                name: "Luisa",
                country_code: "ar",
                country_name: "Argentina",
                content:
                  "Gracias por estar pendiente de mi salud, les agradezco mucho. Muy agradecida, un servicio de calidad",
              },
              4: {
                name: "Jonathan",
                country_code: "cl",
                country_name: "Chile",
                content:
                  "Empáticos y cordiales. Buena gestión. Volvería a contratar.",
              },
              5: {
                name: "Jorge",
                country_code: "mx",
                country_name: "México",
                content:
                  "La contratación fue simple y la atención del equipo muy buena. La aerolínea extravió mi equipaje y me dieron soporte.",
              },
            },
          },
          features: {
            1: {
              title: "Viajá con tranquilidad",
              content:
                "No te preocupes si te duele una muela en Sudáfrica a la madrugada. Trabajamos 24/7 para darte el mejor servicio.",
            },
            2: {
              title: "Encontrá lo mejor para vos",
              content:
                "No importa si estas en un pequeño break de tu trabajo o si estás por embarcar en algún Aeropuerto. Contrata rápido y fácil.",
            },
            3: {
              title: "No te preocupes si cambias de destino",
              content:
                "Nuestras coberturas sirven en todo el mundo. Vayas a donde vayas, solo preocupate por pasarla bien.",
            },
          },
          landings: {
            heading: "Viajá de manera segura a los tops destinos",
          },
          landingsTop: {
            heading: "Requisitos para viajar a los principales destinos",
          },
        },
        faqs: {
          0: {
            question: "Documentación requerida para menores de 18 años",
            answer:
              "La asistencia al viajero es un servicio que brinda cobertura y soporte médico en caso de emergencias durante tu viaje. Con ASSIST 365 obtendrás protección médica, repatriación sanitaria, asistencia legal,  cobertura por pérdida de equipaje, entre varios otros servicios esenciales para garantizar tu tranquilidad mientras viajas.",
          },
          1: {
            question:
              "¿Cuál es la diferencia entre un seguro de viaje y un seguro médico para viajar?",
            answer:
              "Un seguro de viaje proporciona una amplia cobertura que incluye prestaciones médicas, asistencia por vuelo demorado, pérdida de equipaje y otros imprevistos relacionados con tu viaje. Mientras que un seguro médico para viajar se enfoca principalmente en la atención médica durante tu estadía en el extranjero, cubriendo gastos médicos, hospitalización y repatriación sanitaria.",
          },
          2: {
            question:
              "Personas autorizadas para ingresar a Uruguay:",
            answer:
              "Un seguro de viaje proporciona una amplia cobertura que incluye prestaciones médicas, asistencia por vuelo demorado, pérdida de equipaje y otros imprevistos relacionados con tu viaje. Mientras que un seguro médico para viajar se enfoca principalmente en la atención médica durante tu estadía en el extranjero, cubriendo gastos médicos, hospitalización y repatriación sanitaria.",
          },
        },
      },
    },
  },
  lng: "es-AR",
  fallbackLng: "es-AR",
  ns: ["translations"],
  defaultNS: "translations",
});
export default i18n;
