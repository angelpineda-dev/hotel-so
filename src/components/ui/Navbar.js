import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <article className="menu">
      <header className="menu__header">
        <small className="menu__header-temp">32°C</small>
        <NavLink to="/">
          <h2 className="menu__header-logo">Suites Ordoñez</h2>
        </NavLink>
        <button className="menu__header-btn">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </header>
      <nav className="menu__links">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/about">Nosotros</NavLink>
        <NavLink to="/faq">Preguntas</NavLink>
      </nav>
    </article>
  );
};

export default Navbar;
