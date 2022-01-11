import { Link } from "react-router-dom";
import homeHero from "../../assets/images/home/homeHero.png";

const HeroIntro = ({ title, text, textBtn, image }) => {
  // TODO: Recibir imagen en formato desktop
  // TODO: Recibir url para el Link

  return (
    <article className="hero">
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="hero__container"
      >
        <h1 className="hero__title">{title}</h1>
        <p className="hero__text">{text}</p>
        {textBtn && (
          <Link to="/" className="hero__link">
            {textBtn}
          </Link>
        )}
      </div>
    </article>
  );
};

export default HeroIntro;

HeroIntro.defaultProps = {
  title: "Suites Ordoñez",
  text: "Sus mejores vacaciones, son con nosotros.",
  textBtn: "",
  image: homeHero,
};
