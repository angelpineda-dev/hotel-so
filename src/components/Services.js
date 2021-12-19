import {
  faBrush,
  faPaw,
  faPhone,
  faSwimmingPool,
  faTv,
  faUtensils,
  faWifi,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { ServiceCard } from "./content/ServiceCard";

const services = [
  {
    id: 1,
    icon: faUtensils,
    title: "Cocineta",
    desc: "Prepare platillos como en casa.",
  },
  {
    id: 2,
    icon: faWind,
    title: "Ventilación",
    desc: "Disfrute de un rico ambiente mientras duerme con aire acondicionado.",
  },
  {
    id: 3,
    icon: faTv,
    title: "Televisión",
    desc: "Televisión con servicio de cable.",
  },
  {
    id: 4,
    icon: faSwimmingPool,
    title: "Alberca",
    desc: "Alberca con horario de 8:00 a 20:00 horas.",
  },
  {
    id: 5,
    icon: faBrush,
    title: "Limpieza",
    desc: "Servicio de limpieza incluido.",
  },
  {
    id: 6,
    icon: faPhone,
    title: "Teléfono",
    desc: "Teléfono para llamadas locales.",
  },
  {
    id: 7,
    icon: faPaw,
    title: "Pet Friendly",
    desc: "Tus mascotas son bienvenidas por ser parte de la familia.",
  },
  {
    id: 8,
    icon: faWifi,
    title: "Wi Fi",
    desc: "Conexión a internet para que disfrutes tu contenido favorito.",
  },
];

const Services = () => {
  return (
    <section>
      <h2>Servicios</h2>

      {services.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.title}
          icon={service.icon}
          desc={service.desc}
        />
      ))}
    </section>
  );
};

export default Services;
