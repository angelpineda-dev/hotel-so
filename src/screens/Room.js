import Calendar from "../components/calendar/Calendar";
import Navbar from "../components/ui/Navbar";

const room = {
  id: 1,
  name: "Suite 1",
  img: "https://placeimg.com/400/400/any",
  price: 2200,
  bathrooms: 3,
  beds: 2,
  maxPeople: 9,
  desc: "Habitación equipada para hasta 9 personas con una sala de estar, su propio comedor, cocineta para realizar comidas, televisión y aire acondicionado para dormir con un rico clima.",
};

const Room = () => {
  return (
    <>
      <Navbar />
      <main className="room">
        <h1 className="room__title">{room.name}</h1>
        <p>{room.desc}</p>
        <img src={room.img} alt={room.name} />
        <section>
          <p>Baños: {room.bathrooms}</p>
          <p>Camas: {room.beds}</p>
          <p>Capacidad máxima: {room.maxPeople}</p>
          <p>Precio por noche: $ {room.price}.00</p>
        </section>
        <Calendar />
      </main>
    </>
  );
};

export default Room;
