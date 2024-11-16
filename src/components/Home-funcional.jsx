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
  const [active, setActive] = useState(false);

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

  const onDeleteProduct = (product) => {
    const results = carrito.filter(item => item.id !== product.id);
    setTotal(total - product.precio * product.cantidad);
    setCountProducts(countProducts - product.cantidad);
    setCarrito(results);
  };

  const onCleanCart = () => {
    setCarrito([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <div className="Home">
      <Navbar />
      <header>
        <h1>Tienda</h1>
        <div className='container-icon'>
          <div className='container-cart-icon' onClick={() => setActive(!active)}>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='icon-cart'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' />
            </svg>
            <div className='count-products'>
              <span id='contador-productos'>{countProducts}</span>
            </div>
          </div>
          <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
            {carrito.length ? (
              <>
                <div className='row-product'>
                  {carrito.map(product => (
                    <div className='cart-product' key={product.id}>
                      <div className='info-cart-product'>
                        <span className='cantidad-producto-carrito'>{product.cantidad}</span>
                        <p className='titulo-producto-carrito'>{product.titulo}</p>
                        <img src={`./img/${product.imagen}`} alt={product.titulo} className='imagen-producto-carrito' />
                        <span className='precio-producto-carrito'>${product.precio}</span>
                      </div>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='icon-close' onClick={() => onDeleteProduct(product)}>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                      </svg>
                    </div>
                  ))}
                </div>
                <div className='cart-total'>
                  <h3>Total:</h3>
                  <span className='total-pagar'>${total}</span>
                </div>
                <button className='btn-clear-all' onClick={onCleanCart}>Vaciar Carrito</button>
              </>
            ) : (
              <p className='cart-empty'>El carrito está vacío</p>
            )}
          </div>
        </div>
      </header>
      <section id="popular" className="Home-section">
        <input className='BusquedaBarra' type="text" id="busqueda" value={busqueda} onChange={handleBusqueda} placeholder="Buscar libros..." />
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
