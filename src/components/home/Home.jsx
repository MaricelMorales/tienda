import React, { useState } from 'react'; 
import './Home.css';
import Navbar from '../Navbar.jsx'; 

import { Link } from 'react-router-dom'; 

class Producto { 
  constructor(id, titulo, imagen, precio, autor, categoria, link) { 
    this.id = id; 
    this.titulo = titulo; 
    this.imagen = imagen; 
    this.precio = precio; 
    this.autor = autor; 
    this.categoria = categoria; 
    this.link = link; 
  } 
} 

const productos = [ 
  new Producto(1, 'La Biblioteca de la Medianoche', 'BibliotecadelaMedianoche.jpg', 28600, 'HAIG, MATT', 'fantasía', './products/Product1'), 
  new Producto(2, 'Proyecto Hail Mary', 'ProyectoHeilMary.jpg', 35899, 'WEIR, ANDY', 'ciencia ficcion', '/products/Product2'), 
  new Producto(3, 'Viento y Verdad', 'vientoyverdad.webp', 32900, 'Sanderson, Brandon', 'fantasía', '/products/Product3'), 
  new Producto(4, 'Mañana, mañana y mañana', 'Mañana.jpg', 28600, 'HAIG, MATT', 'romance', '/products/Product4'), 
  new Producto(5, 'La Biblioteca de la Medianoche', 'ProyectoHeilMary.jpg', 28600, 'HAIG, MATT', 'fantasía', '/products/Product5'), 
]; 
function Home() { 
  const [busqueda, setBusqueda] = useState(''); 
  const [productosFiltrados, setProductosFiltrados] = useState(productos); 
  const [order, setOrder] = useState('titulo'); 
  
  const filtrarProductos = (productos, busqueda) => { 
    return productos.filter(producto => 
      producto.titulo.toLowerCase().includes(busqueda.toLowerCase()) 
    ); 
  }; 
  const handleBusqueda = (event) => { 
    const valorBusqueda = event.target.value; 
    setBusqueda(valorBusqueda); 
    const productosFiltrados = filtrarProductos(productos, valorBusqueda); 
    setProductosFiltrados(productosFiltrados); }; 
    
  const productosOrdenados = productosFiltrados.sort((a, b) => { 
    if (order === 'titulo') { 
      return a.titulo.localeCompare(b.titulo); 
    } else if (order === 'precio') { 
      return a.precio- b.precio; 
    } 
  });
  return (
    <div className="Home">
      <Navbar />
      <section id="popular" className="Home-section">
      <input className='BusquedaBarra'
          type="text"
          id="busqueda"
          value={busqueda}
          onChange={handleBusqueda}
          placeholder="Buscar libros..."
        />
        <h1>Libros Populares</h1>
        <div className="Home-products">
          {productosFiltrados.map(producto => (
            <Link to={producto.link} key={producto.id} className="Home-product-link">
              <div className="Home-product">
                <img src={`./img/${producto.imagen}`} alt={producto.titulo} />
                <h3>{producto.titulo}</h3>
                <p>{producto.autor}</p>
                <p className='precio'>${producto.precio}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className='Banner'>
        <aside className="responsive-banner first">
          <div className="container-envelope">
            <svg className="cirle-a" height="160" width="160">
              <circle cx="80" cy="80" r="80" />
            </svg>
            <svg className="cirle-b" height="60" width="60">
              <circle cx="30" cy="30" r="30" />
            </svg>
            <svg className="cirle-c" height="600" width="600">
              <circle cx="300" cy="300" r="300" />
            </svg>
            <svg className="cirle-d" height="60" width="60">
              <circle cx="30" cy="30" r="30" />
            </svg>
            <img src="https://i.pinimg.com/originals/f2/d1/f9/f2d1f900f688ddca0765ec8e2d3900e1.png" />
            <div className="col-xs-12">
              <p>Descubre Nuevas Aventuras</p>
              <p>Explora nuestra colección de libros</p>
              <a target="_blank" href="https://www.silocreativo.com/en/showcase/" className="more-link">Get inspired</a>
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
