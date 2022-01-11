import { Link } from "react-router-dom";

const Room = ({ id, props }) => {
  const { name, img, price, bathrooms, beds, maxPeople } = props;
  return (
    <article className="room-card">
      <h2 className="room-card__title">{name}</h2>
      <section className="room-card__container">
        <img src={img} alt={name} className="room-card__container-image" />
        <section className="room-card__container-desc">
          <p>Precio: $ {price}.00</p>
          <p>Baños: {bathrooms}</p>
          <p>
            Camas: {beds}
            <p>Capacidad: Hasta {maxPeople} personas.</p>
          </p>
        </section>
        <section>
          <Link to={`/rooms/${id}`}>Reservar </Link>
        </section>
      </section>
    </article>
  );
};

export default Room;
