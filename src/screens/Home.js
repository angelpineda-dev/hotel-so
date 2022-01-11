import { Link } from "react-router-dom";
import Atractions from "../components/Atractions";
import HeroIntro from "../components/content/HeroIntro";

import Services from "../components/Services";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroIntro textBtn={"Reservar"} />
      <main>
        <Services />
        <Atractions />
        <p className="text-center">
          {" "}
          <em>
            Somos un hotel 100% familiar, de 3 estrellas y un poco más.
          </em>{" "}
        </p>
        <Link to="/" className="btn btn__glass">
          Reservar
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default Home;
