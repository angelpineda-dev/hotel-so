import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>Página no encontrada</h1>
      <NavLink to="/">Inicio</NavLink>
    </>
  );
};

export default NotFound;
