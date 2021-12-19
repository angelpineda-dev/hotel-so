import Atractions from "../components/Atractions";
import HeroIntro from "../components/HeroIntro";
import Services from "../components/Services";
import Footer from "../components/ui/Footer";

const Home = () => {
  return (
    <>
      <HeroIntro />
      <main>
        <Services />
        <Atractions />
        <p>
          {" "}
          <em>
            Somos un hotel 100% familiar, de 3 estrellas y un poco más.
          </em>{" "}
        </p>
        <button>Reservar</button>
      </main>
      <Footer />
    </>
  );
};

export default Home;
