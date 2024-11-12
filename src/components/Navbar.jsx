import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./img/logo (1).png" alt="Logo" />
      </div>
      <ul className="navMenu">       
        
        <li class="Menu"><a href='#' >Catalogo</a>
            <div class="menu-contenido">
            <a href="#ficcion">Ficción</a>
            <a href="#no-ficcion">No ficción</a>
            <a href="#poesia">Poesía</a>
            <a href="#filosofia">Filosofía</a>
            <a href="#infantil">Infantil</a>
           <a href="#libro-ilustrado">Libro ilustrado</a>
            <a href="#arte">Arte</a>
            <a href="#clasicos">Clásicos</a>
            <a href="#comics">Comics - Novela gráfica</a>

            </div>
        </li>
        <li class="Menu"><a href='#' >Populares</a>
            <div class="menu-contenido">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>

            </div>
        </li>

        <li class="Menu"><a href='#' >Ofertas</a>
            <div class="menu-contenido">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>

            </div>
        </li>
        <li class="Menu"><a href='#'>Contacto</a>
            <div class="menu-contenido">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>

            </div>
        </li>
      </ul>
      <button className="navButton">
      </button>
    </nav>
  );
};

export default Navbar;