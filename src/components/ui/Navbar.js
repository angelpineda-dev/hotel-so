import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const refMenu = useRef();

  const handleMenu = () => {
    refMenu.current.classList.toggle("active");
  };
  return (
    <article className="menu">
      <header className="menu__header">
        <small className="menu__header-temp">32°C</small>
        <NavLink to="/">
          <h2 className="menu__header-logo">Suites Ordoñez</h2>
        </NavLink>
        <button className="menu__header-btn" onClick={handleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </header>
      <nav className="menu__links" ref={refMenu}>
        <NavLink to="/rooms">Reservar</NavLink>
        <NavLink to="/about">Nosotros</NavLink>
        <NavLink to="/faq">Preguntas</NavLink>
      </nav>
    </article>
  );
};

export default Navbar;
