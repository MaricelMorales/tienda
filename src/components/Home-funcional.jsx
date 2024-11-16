import React, { useState } from 'react';
import './Home.css';
import Navbar from './Navbar.jsx';
import { productos } from '../data.js';

function Home() {
  const [busqueda, setBusqueda] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState(productos);
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  const filtrarProductos = (productos, busqueda) => {
    return productos.filter(producto =>
      producto.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );
  };

  const handleBusqueda = (event) => {
    const valorBusqueda = event.target.value;
    setBusqueda(valorBusqueda);
    const productosFiltrados = filtrarProductos(productos, valorBusqueda);
    setProductosFiltrados(productosFiltrados);
  };

  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find(item => item.id === producto.id);
    if (productoExistente) {
      productoExistente.cantidad += 1;
      setCarrito([...carrito]);
    } else {
      producto.cantidad = 1;
      setCarrito([...carrito, producto]);
    }
    setTotal(total + producto.precio);
    setCountProducts(countProducts + 1);
  };

  return (
    <div className="Home">
      <Navbar
        carrito={carrito}
        setCarrito={setCarrito}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <header>
        <h1>Tienda</h1>
        <input className='BusquedaBarra' type="text" id="busqueda" value={busqueda} onChange={handleBusqueda} placeholder="Buscar libros..." />
      </header>
      <section id="popular" className="Home-section">
        <h1>Libros Populares</h1>
        <div className="Home-products">
          {productosFiltrados.map(producto => (
            <div key={producto.id} className="Home-product">
              <img src={`./img/${producto.imagen}`} alt={producto.titulo} />
              <h3>{producto.titulo}</h3>
              <p>{producto.autor}</p>
              <p className='precio'>${producto.precio}</p>
              <button onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button>
            </div>
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
