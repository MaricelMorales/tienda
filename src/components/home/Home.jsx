import React from 'react';
import './Home.css';
import Navbar from '../Navbar.jsx';


// Definición de la clase Producto y el array productos
class Producto {
  constructor(id, titulo, imagen, precio, autor) {
    this.id = id;
    this.titulo = titulo;
    this.imagen = imagen;
    this.precio = precio;
    this.autor = autor;
    this.link = link;
  }
}

const productos = [
  new Producto(1, 'La Biblioteca de la Medianoche', 'BibliotecadelaMedianoche.jpg', 28.600, 'HAIG, MATT', './products/Product1'),
  new Producto(2, 'Proyecto Hail Mary', 'ProyectoHeilMary.jpg', 35.899, 'WEIR, ANDY','./products/Product1'),
  new Producto(1, 'Viento y Verdad', 'vientoyverdad.webp', 32.900, 'Sanderson, Brandon', './products/Product1'),
  new Producto(1, 'La Biblioteca de la Medianoche', 'ProyectoHeilMary.jpg', 28.600, 'HAIG, MATT', './products/Product1'),
  new Producto(1, 'La Biblioteca de la Medianoche', 'ProyectoHeilMary.jpg', 28.600, 'HAIG, MATT', './products/Product1'),

];

function Home() {
  return (
    <div className="Home">
      <Navbar/>
      <section id="popular" className="Home-section">
        <h1>Libros Populares</h1>
        <div className="Home-products">
            <Link>
                {productos.map(producto => (
                <div className="Home-product" key={producto.id}>
                <img src={`./img/${producto.imagen}`} alt={producto.titulo} />
                <h3>{producto.titulo}</h3>
                <p>{producto.autor}</p>
                <p className='precio'>${producto.precio}</p>
                </div>
                ))}
            </Link>
        </div>
      </section>

      <section className='Banner'>
      <aside class="responsive-banner first">
        <div class="container-envelope">
          <svg class="cirle-a" height="160" width="160">
           <circle cx="80" cy="80" r="80"/>
          </svg>
          <svg class="cirle-b" height="60" width="60">
            <circle cx="30" cy="30" r="30"/>
          </svg>
    <svg class="cirle-c" height="600" width="600">
      <circle cx="300" cy="300" r="300"/>
    </svg>
   <svg class="cirle-d" height="60" width="60">
      <circle cx="30" cy="30" r="30"/>
    </svg>
    <img src="https://i.pinimg.com/originals/f2/d1/f9/f2d1f900f688ddca0765ec8e2d3900e1.png" />
    <div class="col-xs-12">
      <p>Descubre Nuevas Aventuras</p>
      <p>Explora nuestra colección de libros</p>
      <a target="_blank" href="https://www.silocreativo.com/en/showcase/" class="more-link">Get inspired</a>
    </div>
  </div>
</aside>

      </section>

      <footer className="Home-footer">
        <p>Contacto: info@booksbook.com</p>
        <p>Síguenos en:</p>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Home;
