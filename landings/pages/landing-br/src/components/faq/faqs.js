const faqs = [
  {
    question: "Documentación requerida para mayores de 18 años: ",
    answer: (
      <div>
        <p>- Los ciudadanos pertenecientes al Mercosur pueden entrar con su DNI.</p>
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
    question: "Esquema de vacunación completo:",
    answer: (
      <div>
        <p>Este certificado completo debe presentarse digital/físico con al menos 3 dosis aplicadas o una prueba COVID-19 con resultado negativo o no detectable. Menores de 12 años están exceptuados. </p>
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
    question: "Autorización a menores de 18 años para que puedan viajar: ",
    answer: (
      <div>
        <p>
        Las autorizaciones deberán ser otorgadas por: escribanos, jueces competentes, autoridades del Registro de Estado Civil y Capacidad de las Personas o Cónsules extranjeros en la Argentina.
        </p>
        <p>
        Migraciones también cuenta con un servicio que otorga esa autorización, que tiene validez por un solo viaje y debe ser utilizada dentro de los 30 días de su emisión. El trámite se debe realizar de manera personal, y presencial en los puestos de control migratorio.
        </p>
      </div>
    ),
  },
  {
    question: "Seguro de viaje para Brasil: ",
    answer: (
      <div>
     <p>
     Recomendamos contar con un seguro de viaje para poder estar tranquilo y tener cobertura en caso de una enfermedad menor o un accidente.  <br/> <br/> El producto más elegido por nuestros usuarios es <span className="font-bold" >el plan World Cover de ASSIST 365</span>  que cubre asistencia médica en caso de accidente o enfermedad hasta 50.000 USD, asistencia covid y gastos hospitalarios por covid hasta 30.000 USD y mucho más!   <span className="font-bold" >Mira el video a continuación para más detalles del seguro de viaje para Brasil.</span> 
     </p>
        
      </div>
    ),
  },
];

export default faqs;
