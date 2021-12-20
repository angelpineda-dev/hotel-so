import homeHero from "../../assets/images/home/homeHero.png";

const HeroIntro = ({ title, text, textBtn, image }) => {
  return (
    <article
      className="hero"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <h1 className="hero__title">{title}</h1>
      <p className="hero__text">{text}</p>
      {textBtn && <button className="hero__link">{textBtn}</button>}
    </article>
  );
};

export default HeroIntro;

HeroIntro.defaultProps = {
  title: "Suites Ordoñez",
  text: "Sus mejores vacaciones, son con nosotros.",
  textBtn: "Reservar",
  image: homeHero,
};
