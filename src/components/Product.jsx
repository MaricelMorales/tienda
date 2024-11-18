import React from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../data.js';

import './Product.css';

function Producto() {
  const { id } = useParams();
  const producto = productos.find(p => p.id === parseInt(id));

  return (
    <div className="Producto">
      <img src={`./img/${producto.imagen}`} alt={producto.titulo} />
      <h1>{producto.titulo}</h1>
      <p className="precio">${producto.precio}</p> 
    </div> 
  ); 
}

export default Producto;
