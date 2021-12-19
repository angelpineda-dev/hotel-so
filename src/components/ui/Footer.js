import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopyright,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import Ubication from "../content/Ubication";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Ubicación</h2>
        <Ubication />
        <ul>
          <li>
            Estamos ubicados a 50 metros de la Avenida Costera Miguel Alemán, en
            el puerto de Acapulco, Guerrero.
          </li>
          <li>
            La playa Hornos se encuentra cruzando la avenida, a menos de 100
            metros.
          </li>
        </ul>
      </div>

      <div>
        <h2>Contactanos</h2>
        <div>
          <p>
            <FontAwesomeIcon icon={faFacebookSquare} /> Siguenos en Facebook.
          </p>
        </div>
        <div>
          <p>
            {" "}
            <FontAwesomeIcon icon={faPhone} /> (744) 485-96-26 / (744) 485-67-31
          </p>
        </div>
        <div>
          <p>
            {" "}
            <FontAwesomeIcon icon={faEnvelope} /> suitesordonez@hotmail.com
          </p>
        </div>
      </div>

      <div>
        <p>
          <em>
            <FontAwesomeIcon icon={faCopyright} /> Suites Ordoñez 2022
          </em>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
