import HeroIntro from "../components/content/HeroIntro";
import faqHero from "../assets/images/faq/faqHero.png";
import Footer from "../components/ui/Footer";
import PriceTable from "../components/content/PriceTable";

const rooms = [
  {
    id: 1,
    size: "Chica",
    price: {
      low: 850,
      medium: 1050,
      high: 1600,
    },
  },
  {
    id: 2,
    size: "Mediana",
    price: {
      low: 1500,
      medium: 1800,
      high: 2400,
    },
  },
  {
    id: 3,
    size: "Grande",
    price: {
      low: 1800,
      medium: 2450,
      high: 2800,
    },
  },
  {
    id: 4,
    size: "Extra grande",
    price: {
      low: 2500,
      medium: 3150,
      high: 4000,
    },
  },
];

const Faq = () => {
  return (
    <>
      <HeroIntro
        title={"Preguntas Frecuentas"}
        text={"Tarifas, terminos, condiciones y más."}
        image={faqHero}
      />
      <section>
        <h2>Tarifas</h2>
        <p>
          Para brindarte un mejore servicio, ponemos a tu disposición las
          tarifas del presente año*.
        </p>
      </section>

      <section>
        {rooms.map(({ id, size, price }) => (
          <PriceTable key={id} size={size} price={price} />
        ))}

        <p>
          {" "}
          <em>
            *LAS TARIFAS ESTARÁN SUJETAS A CAMBIOS DE ACUERDO A INFLACIÓN,
            INCREMENTO DE IMPUESTOS DE ACUERDO A LA LEY Y CUALQUIER POLÍTICA
            NUEVA QUE SE PRESENTE.
          </em>{" "}
        </p>
      </section>

      <section>
        <h2>CLÁUSULAS</h2>
        <p>
          <b>Cláusula 1:</b> Los costos de las habitaciones es por el cupo
          completo de esta y de acuerdo a la temporada. El excedente de personas
          se cobrará de manera individual de acuerdo al tamaño de habitación y
          de temporada, favor de preguntar en recepción para mayor información.
        </p>
        <p>
          <b>Cláusula 2:</b> En caso de presentarse excedentes de personas de
          acuerdo a lo estipulado en la leyenda anterior, la persona extra
          quedará en resguardo del registrado y se atendrá a los servicios
          disponibles de la habitación a ocupar.
        </p>
        <p>
          <b>Cláusula 3:</b> Para su comodidad cotizar habitaciones de acuerdo
          al cupo a ocupar Adultos y niños (Niños mayores de 6 años cuentan como
          adultos).
        </p>

        <div>
          <p>
            <b>Cláusula 4:</b> En caso de modificación o cancelación de su
            reservación, deberá notificar mediante correo y confirmar por
            teléfono con anticipación.
          </p>
          <ul>
            <li>Puentes, Semana Santa y vacaciones de verano: un mes.</li>
            <li>Vacaciones de Diciembre: 3 meses.</li>
            <li>
              El resto del año en temporada baja con 15 días de anticipación.
            </li>
            <li>Todo esto con previa liquidación al 100% de su reservación.</li>
            <li>
              Al no cumplir con estos requisitos no se llevará a cabo la
              cancelación y procesos que conlleven a ella.
            </li>
            <li>
              La confirmación de cancelación (en su debido tiempo), deberá ser
              directamente con el gerente en turno, en caso contrario, no
              procederá.
            </li>
          </ul>
        </div>

        <p>
          <b>Cláusula 5:</b> Horarios de atención de 9 am a 9 pm.
        </p>

        <p>
          <b>Cláusula 6:</b> Reservaciones y/o aclaraciones por vía Whatsapp de
          5 pm a 10 pm y/o correo electrónico disponible 24/7
        </p>

        <div>
          <p>
            <b>Cláusula 7:</b> Estacionamiento sin costo. La empresa no se hace
            responsable por daños y/o perdidas de bienes de las unidades dentro
            y fuera de las instalaciones. Todo vehículo será manipulado solo y
            exclusivamente por el propietario o alguna persona que lo
            represente.
          </p>
          <ul>
            <li>
              En caso de estar bloqueando a otro vehiculo la empresa hará los
              movimientos de la unidad (al colocar una unidad delante de otra,
              se pedirá las llaves de dicho automóvil, para realizar los
              movimientos).{" "}
            </li>
            <li>
              Se deslinda de toda responsabilidad al no dejar las llaves y estar
              en una posición donde se estorbe el paso.
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Faq;
