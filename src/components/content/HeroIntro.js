import homeHero from "../../assets/images/home/homeHero.png";

const HeroIntro = ({ title, text, textBtn, image }) => {
  return (
    <article
      style={{
        backgroundImage: `url(${image || homeHero})`,
      }}
    >
      <h1>{title}</h1>
      <p>{text}</p>
      {textBtn && <button>{textBtn}</button>}
    </article>
  );
};

export default HeroIntro;

HeroIntro.defaultProps = {
  title: "Suites Ordoñez",
  text: "Sus mejores vacaciones, son con nosotros.",
  textBtn: "Reservar",
};
