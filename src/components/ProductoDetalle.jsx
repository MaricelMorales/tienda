import React from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../data.js';
import { toast } from 'react-toastify';

import './Product.css';

function ProductoDetalle({ carrito, setCarrito, total, setTotal, countProducts, setCountProducts }) {
  // Desestructura las props recibidas: carrito, setCarrito, total, setTotal, countProducts, setCountProducts

  const { id } = useParams(); // Obtiene el parámetro 'id' de la URL usando useParams
  const producto = productos.find(p => p.id === parseInt(id)); // Busca el producto en el array 'productos' cuyo id coincida con el id de la URL

  const agregarAlCarrito = (producto) => {
    // Función para agregar un producto al carrito
    const productoEnCarrito = carrito.find(item => item.id === producto.id); // Busca si el producto ya está en el carrito
    if (productoEnCarrito) {
      // Si el producto ya está en el carrito, incrementa su cantidad
      productoEnCarrito.cantidad++;
      setCarrito([...carrito]); // Actualiza el carrito con la nueva cantidad del producto
    } else {
      // Si el producto no está en el carrito, lo agrega con cantidad 1
      producto.cantidad = 1;
      setCarrito([...carrito, producto]); // Actualiza el carrito agregando el nuevo producto
    }

    toast.success('Libro agregado al carrito'); // Muestra una notificación de éxito
    setTotal(total + producto.precio); // Actualiza el total de la compra sumando el precio del producto
    setCountProducts(countProducts + 1); // Incrementa el conteo de productos en el carrito
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

