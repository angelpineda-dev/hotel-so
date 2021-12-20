import { faTv } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ServiceCard = ({ title, desc, icon }) => {
  return (
    <section className="card">
      <div className="card__icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{desc}</p>
    </section>
  );
};

ServiceCard.defaultProps = {
  title: "Televisión",
  desc: "Televisión con servicio de cable",
  icon: faTv,
};
