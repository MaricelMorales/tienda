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
    // Filtra los productos según el término de búsqueda
    return productos.filter(producto =>
      // Convierte el título del producto a minúsculas y verifica si incluye el término de búsqueda en minúsculas
      producto.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );
  };

  const handleBusqueda = (event) => {
    // Maneja el cambio en el campo de búsqueda
    const valorBusqueda = event.target.value; // Obtiene el valor del campo de búsqueda
    setBusqueda(valorBusqueda); // Actualiza el estado 'busqueda' con el valor ingresado
    const productosFiltrados = filtrarProductos(productos, valorBusqueda); // Filtra los productos según el valor de búsqueda
    setProductosFiltrados(productosFiltrados); // Actualiza el estado 'productosFiltrados' con los productos filtrados
  };

  const agregarAlCarrito = (producto) => {
    // Agrega un producto al carrito
    const productoEnCarrito = carrito.find(item => item.id === producto.id); // Busca si el producto ya está en el carrito
    if (productoEnCarrito) {
      // Si el producto ya está en el carrito, incrementa su cantidad
      productoEnCarrito.cantidad++;
      setCarrito([...carrito]); // Actualiza el carrito
    } else {
      // Si el producto no está en el carrito, lo agrega con cantidad 1
      producto.cantidad = 1;
      setCarrito([...carrito, producto]); // Actualiza el carrito
    }
    toast.success('Libro agregado al carrito'); // Muestra una notificación de éxito
    setTotal(total + producto.precio); // Actualiza el total de la compra
    setCountProducts(countProducts + 1); // Incrementa el conteo de productos en el carrito
  };

  const librosFantasia = productos.filter(producto => producto.categoria === 'cuento'); // Filtra los productos de la categoría 'cuento'

  return (
    <div className="Home">
      <Navbar
        carrito={carrito} // Pasa el estado 'carrito' al componente Navbar
        setCarrito={setCarrito} // Pasa la función 'setCarrito' para actualizar el estado 'carrito'
        total={total} // Pasa el estado 'total' al componente Navbar
        setTotal={setTotal} // Pasa la función 'setTotal' para actualizar el estado 'total'
        countProducts={countProducts} // Pasa el estado 'countProducts' al componente Navbar
        setCountProducts={setCountProducts} // Pasa la función 'setCountProducts' para actualizar el estado 'countProducts'
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
          <p>Descuento del 20% en todos los libros de Navidad</p> 
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
