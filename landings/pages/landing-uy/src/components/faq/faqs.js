const faqs = [
  {
    question: "Documentación requerida para mayores de 18 años: ",
    answer: (
      <div>
        <p>- DNI Digital tarjeta (último ejemplar emitido por el RENAPER).</p>
        <p>
          - DNI Digital libreta celeste (último ejemplar emitido por el
          RENAPER).
        </p>
        <p>- Pasaporte.</p> <br />
        <p>
          {" "}
          <span className="font-bold">No es válido:</span> Un DNI escrito a mano
          (tapa verde, tapa bordó y libreta celeste de niños y niñas recién
          nacidos), la constancia de DNI en trámite o documentos deteriorados.
        </p>
      </div>
    ),
  },
  {
    question: "Documentación requerida para menores de 18 años:",
    answer: (
      <div>
        <p>
          El menor de edad además de presentar el documento de viaje habilitado,
          necesita autorización de acuerdo con distintas consideraciones:
        </p>{" "}
        <br />
        <p>
          {" "}
          <span className="font-bold">Si viaja con ambos padres:</span> Deben
          acreditar el vínculo, presentando:
        </p>{" "}
        <br />
        <p>
          - Libreta Civil de Familia, Partida de Nacimiento o Certificado de
          Nacimiento (sin importar la fecha de su emisión).
        </p>
        <p>
          - DNI del menor de 18 años, en el que consten los datos asociados de
          los padres.
        </p>{" "}
        <br />
        <p>
          {" "}
          <span className="font-bold">
            Si el menor de 18 viaja con uno sólo de sus padres:
          </span>
          Además de demostrar el vínculo con alguno de los documentos citados,
          debe acompañar la autorización del padre/madre ausente.
        </p>{" "}
        <br />
        <p>
          {" "}
          <span className="font-bold">
            Si el o la menor es hijo o hija de menores de 18 años:
          </span>
          Necesita la autorización de los padres y el permiso de uno de sus
          abuelos.
        </p>{" "}
        <br />
        <p>
          {" "}
          Es importante hacer énfasis en que{" "}
          <span className="font-bold">
            toda esta documentación debe ser presentada en original
          </span>{" "}
          o copias debidamente legalizadas o certificadas por una entidad del
          estado.
        </p>{" "}
        <br />
      </div>
    ),
  },
  {
    question: "Personas autorizadas para ingresar a Uruguay:",
    answer: (
      <div>
        <p>
          - <span className="font-bold">Vacunación:</span> Haber recibido una
          dosis o las dos dosis contra el virus SARS-CoV-2, mejor conocido como
          COVID-19. Deben ser aprobadas y acreditar la vacunación mediante
          certificado emitido por la autoridad sanitaria de su país de origen.{" "}
        </p>
        <p>
          - <span className="font-bold">Test previo al ingreso: </span> No es
          requerido.{" "}
        </p>
        <p>
          - <span className="font-bold">Test posterior al ingreso:</span> No
          necesitan realizarse un test al séptimo día.{" "}
        </p>
        <p>
          - <span className="font-bold">Cobertura de salud: </span> En caso de
          ser extranjero debe disponer de cobertura de salud/ seguro médico en
          Uruguay.{" "}
        </p>
      </div>
    ),
  },
  // Add more FAQs as needed
];

export default faqs;
