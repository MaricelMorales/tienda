import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="./img/logo (1).png" alt="Logo" />
        </Link>
      </div>
      <ul className="navMenu">
        <li className="Menu">
          <Link to="/catalogo">Catálogo</Link>
          <div className="menu-contenido">
            <Link to="/ficcion">Ficción</Link>
            <Link to="/no-ficcion">No ficción</Link>
            <Link to="/poesia">Poesía</Link>
            <Link to="/filosofia">Filosofía</Link>
            <Link to="/infantil">Infantil</Link>
            <Link to="/libro-ilustrado">Libro ilustrado</Link>
            <Link to="/arte">Arte</Link>
            <Link to="/clasicos">Clásicos</Link>
            <Link to="/comics">Comics - Novela gráfica</Link>
          </div>
        </li>
        <li className="Menu">
          <Link to="/populares">Populares</Link>
          <div className="menu-contenido">
            <Link to="/populares/1">1</Link>
            <Link to="/populares/2">2</Link>
            <Link to="/populares/3">3</Link>
            <Link to="/populares/4">4</Link>
          </div>
        </li>
        <li className="Menu">
          <Link to="/ofertas">Ofertas</Link>
          <div className="menu-contenido">
            <Link to="/ofertas/1">1</Link>
            <Link to="/ofertas/2">2</Link>
            <Link to="/ofertas/3">3</Link>
            <Link to="/ofertas/4">4</Link>
          </div>
        </li>
        <li className="Menu">
          <Link to="/contacto">Contacto</Link>
          <div className="menu-contenido">
            <Link to="/contacto/1">1</Link>
            <Link to="/contacto/2">2</Link>
            <Link to="/contacto/3">3</Link>
            <Link to="/contacto/4">4</Link>
          </div>
        </li>
      </ul>
      <button className="navButton"></button>
    </nav>
  );
};

export default Navbar;
