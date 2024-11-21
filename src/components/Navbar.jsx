import React, { useState } from 'react'; 
import './Navbar.css'; 
import { Link } from 'react-router-dom'; 

const Navbar = ({ carrito = [], setCarrito, total, setTotal, countProducts, setCountProducts }) => {
  const [active, setActive] = useState(false); // Estado para controlar la visibilidad del carrito

  const onDeleteProduct = (product) => {
    // Función para eliminar un producto del carrito
    const results = carrito.filter(item => item.id !== product.id); // Filtra los productos que no coinciden con el ID del producto a eliminar
    setTotal(total - product.precio * product.cantidad); // Actualiza el total restando el precio del producto eliminado
    setCountProducts(countProducts - product.cantidad); // Actualiza el conteo de productos restando la cantidad del producto eliminado
    setCarrito(results); // Actualiza el carrito con los productos restantes
  };

  const onCleanCart = () => {
    // Función para vaciar el carrito
    setCarrito([]);
    setTotal(0); 
    setCountProducts(0); 
  };

  return (
    <nav className="navbar">
      <div className='container-navbar'>
        <div className="logo">
          <Link to="/">
            <img src="/img/logo (1).png" alt="Logo" /> 
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
            <div className='container-icon' onClick={() => setActive(!active)}>
              <img className="carritoIMG" src="/img/carrito-de-compras.png" alt="Carrito" /> 
              <span className="count-products">{countProducts}</span> {/* Muestra el conteo de productos en el carrito */}
            </div>
            <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
              {carrito.length ? (
                <>
                  <div className='row-product'>
                    {carrito.map(product => (
                      <div className='cart-product' key={product.id}>
                        <div className='info-cart-product'>
                          <span className='cantidad-producto-carrito'>{product.cantidad}</span> 
                          <img src={`/img/${product.imagen}`} alt={product.titulo} className='imagen-producto-carrito' /> 
                          <p className='titulo-producto-carrito'>{product.titulo}</p> 
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
                  <Link to="/checkout">
                    <button className='btn-checkout'>Ir a Pagar</button> 
                  </Link>
                </>
              ) : (
                <p className='cart-empty'>El carrito está vacío</p>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
