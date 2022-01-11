import HeroIntro from "../components/content/HeroIntro";
import Room from "../components/content/Room";
import Navbar from "../components/ui/Navbar";

const rooms = [
  {
    id: 1,
    name: "Suite 1",
    img: "https://placeimg.com/400/400/any",
    price: 2200,
    bathrooms: 3,
    beds: 2,
    maxPeople: 9,
  },
  {
    id: 2,
    name: "Suite 2",
    img: "https://placeimg.com/400/400/any",
    price: 1800,
    bathrooms: 2,
    beds: 2,
    maxPeople: 6,
  },
  {
    id: 3,
    name: "Suite 3",
    img: "https://placeimg.com/400/400/any",
    price: 1500,
    bathrooms: 1,
    beds: 1,
    maxPeople: 3,
  },
];

const Rooms = () => {
  return (
    <>
      <Navbar />
      <HeroIntro
        title={"Habitaciones"}
        text={"Reserve aquí las habitaciones para usted y su familia."}
      />
      <main>
        {rooms.map(({ id, ...props }) => (
          <Room key={id} id={id} props={props} />
        ))}
      </main>
    </>
  );
};

export default Rooms;
