import HeroIntro from "../components/content/HeroIntro";
import aboutHero from "../assets/images/about/aboutHero.png";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <HeroIntro
        title={"Nosotros"}
        text={
          "Suites Ordoñez una historia de más de 35 años brindando servicio con el distinguible toque familiar."
        }
        image={aboutHero}
      />
      <section>
        <h2>Historia</h2>
        <p>
          Todo comenzo cuando, una pareja de casados con su primer hijo
          decidieron que era tiempo de hacerse de su propio negocio.
        </p>

        <p>
          Al contar con experiencia relacionada a la hotelería emprendieron su
          propio negocio y actualmente cuentan con más de 35 años de experiencia
          y momentos memorables.
        </p>

        <p>
          Conforme pasaron los años, Hotel Suites Ordoñez crecio de manera
          agigantada y se fue rodeando de increibles lugares como plazas,
          farmacias y como un plus, una hermosa playa tan solo al cruzar una
          avenida.
        </p>
      </section>
      <section>
        <article>
          <h3>Misión</h3>
          <p>
            Superar las expectativas de todos nuestros clientes haciéndolos
            sentir como en casa, brindando un servicio de descanso óptimo de
            calidad así como de esparcimiento para todas las personas mediante
            un excelente trato, además de contribuir con el bienestar de
            nuestros colaboradores.
          </p>
        </article>
        <article>
          <h3>Visión</h3>
          <p>
            Posicionarnos como uno de los mejores hoteles familiares que reciba
            a los turistas que gusten un lugar cercano a la playa y en Costera.
          </p>
        </article>
        <article>
          <h3>Filosofía</h3>
          <p>
            Si el huésped es feliz nosotros también, además de hacer sentir a
            los huéspedes como en su casa, creemos que todos son parte de la
            familia y por esto nos consideramos como un hotel pet friendly.
          </p>
        </article>
      </section>
      <section>
        <h2>Valores</h2>
        <dl>
          <dt>Familia</dt>
          <dd>
            El valor nace y se desarrolla cuando cada uno de sus miembros asume
            con responsabilidad y alegría el papel que le ha tocado desempeñar.
          </dd>

          <dt>Servicio</dt>
          <dd>
            Servir implica ayudar a alguien de una forma espontánea, es decir
            adoptar una actitud permanente de colaboración hacia los demás.
          </dd>
          <dt>Superación</dt>
          <dd>
            Es una acción que requiere inmediatez, planeación, esfuerzo y
            trabajo permanente. Por lo que simplemente el tiempo, el deseo y la
            propia estimulación, no llegan a un buen puerto.
          </dd>
          <dt>Optimismo</dt>
          <dd>
            Nos caracterizamos por poseer ciertas cualidades que hacen a este
            valor, tales como el entusiasmo, el dinamismo, el emprendimiento
            ante determinadas circunstancias y por sobre todas las cosas,
            siempre vive de los hechos, es decir con los pies bien en el suelo.
          </dd>
          <dt>Compromiso y amor por el trabajo</dt>
          <dd>
            Nos caracterizamos por poseer ciertas cualidades que hacen a este
            valor, tales como el entusiasmo, el dinamismo, el emprendimiento
            ante determinadas circunstancias y por sobre todas las cosas,
            siempre vive de los hechos, es decir con los pies bien en el suelo.
          </dd>

          <dt>Trabajo en equipo</dt>
          <dd>
            El poder colaborar de manera conjunta, ayudará a optimizar el
            trabajo y a reducir tiempos perdidos.
          </dd>
        </dl>
      </section>
      <Footer />
    </>
  );
};

export default About;
