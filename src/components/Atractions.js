import {
  faTicketAlt,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import { ServiceCard } from "./ServiceCard";

const atractions = [
  {
    id: 10,
    icon: faTicketAlt,
    title: "Boletos",
    desc: "Venta de boletos para paseos en yate, lanchas de fondo de cristal y discotecas",
  },
  {
    id: 11,
    icon: faUmbrellaBeach,
    title: "Lugares",
    desc: "Información de los principales atractivos turísticos y cualquier tipo de servicio que necesite.",
  },
];

const Atractions = () => {
  return (
    <section>
      <h2>Atracciones</h2>
      {atractions.map(({ id, icon, title, desc }) => (
        <ServiceCard key={id} icon={icon} title={title} desc={desc} />
      ))}
    </section>
  );
};

export default Atractions;
