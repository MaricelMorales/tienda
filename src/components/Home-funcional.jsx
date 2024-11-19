import React, { useState } from 'react';
import './Home.css';
import Navbar from './Navbar.jsx';
import { productos } from '../data.js';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home({ carrito, setCarrito, total, setTotal, countProducts, setCountProducts }) {
  const [busqueda, setBusqueda] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState(productos);

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
    const productoEnCarrito = carrito.find(item => item.id === producto.id);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
      setCarrito([...carrito]);
    } else {
      producto.cantidad = 1;
      setCarrito([...carrito, producto]);
    }

    toast.success('Libro agregado al carrito');
    setTotal(total + producto.precio);
    setCountProducts(countProducts + 1);
  };

  const librosFantasia = productos.filter(producto => producto.categoria === 'cuento');

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
        <input className='BusquedaBarra' type="text" id="busqueda" value={busqueda} onChange={handleBusqueda} placeholder="Buscar libros..." />
      </header>
      <section id="popular" className="Home-section">
        <h1>Libros Populares</h1>
        <div className="Home-products">
          {productosFiltrados.map(producto => (
            <div key={producto.id} className="Home-product">
              <Link to={`/products/${producto.id}`}>
                <img src={`./img/${producto.imagen}`} alt={producto.titulo} />
                <h3>{producto.titulo}</h3>
                <p>{producto.autor}</p>
                <p className='precio'><span>${producto.precio}</span></p>
              </Link>
              <button onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button>
            </div>
          ))}
        </div>
      </section>
      <section className='Banner'> 
        <div className="offer-banner"> 
          <h2>¡Oferta Especial!</h2> 
          <p>Descuento del 20% en todos los libros de fantasía</p> 
          <div className="offer-products"> 
            {librosFantasia.map(producto => ( 
              <div key={producto.id} className="offer-product"> 
                <Link to={`/products/${producto.id}`}> 
                 <img src={`./img/${producto.imagen}`} alt={producto.titulo} /> 
                 <h3>{producto.titulo}</h3> 
                 <p>{producto.autor}</p> 
                 <p className='precio'>${producto.precio}</p> 
                </Link> 
              </div> 
            ))} 
          </div> 
          <Link to="/catalogo"> 
            <button className="btn-shop-now">Comprar Ahora</button> 
          </Link>
        </div>
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
      <ToastContainer />
    </div>
  );
}

export default Home;
