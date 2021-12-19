import { faTv } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ServiceCard = ({ title, desc, icon }) => {
  return (
    <section>
      <FontAwesomeIcon icon={icon} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </section>
  );
};

ServiceCard.defaultProps = {
  title: "Televisión",
  desc: "Televisión con servicio de cable",
  icon: faTv,
};
