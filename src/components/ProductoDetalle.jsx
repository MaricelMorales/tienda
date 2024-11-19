import React from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../data.js';
import { toast } from 'react-toastify';

import './Product.css';

function ProductoDetalle({ carrito, setCarrito, total, setTotal, countProducts, setCountProducts }) {
  const { id } = useParams();
  const producto = productos.find(p => p.id === parseInt(id));

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

  return (
    <div className='producto-detalle'>
      <div className='detalle-principal'>
        <div className='img'>
          <img src={`../img/${producto.imagen}`} alt={producto.titulo} />
        </div>
        <div className='txt'>
          <h1>{producto.titulo}</h1>
          <p>{producto.autor}</p>
          <p>$ {producto.precio}</p>
          <button onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button>

        </div>
      </div>
      <div>

      </div>

      <p>{producto.sinopsis.split('\n').map((line, index) => ( <p key={index}>{line}</p> ))}</p>
      <p>{producto.isbn}</p>

    </div>
  );
}

export default ProductoDetalle;

