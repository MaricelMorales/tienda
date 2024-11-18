import React, { useState } from 'react';

import './Checkout.css';


const Checkout = ({ carrito, total }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [tarjeta, setTarjeta] = useState('');
  const [vencimiento, setVencimiento] = useState('');
  const [cvv, setCvv] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje('Pago realizado con éxito');
  };

  return (
    <div className="checkout">
      <h2>Resumen del Pedido</h2>
      <ul>
        {carrito.map(producto => (
          <li key={producto.id}>
            {producto.titulo} - {producto.cantidad} x ${producto.precio}
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div>
          <label>Apellido:</label>
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
        </div>
        <div>
          <label>Tarjeta de Crédito:</label>
          <input type="text" value={tarjeta} onChange={(e) => setTarjeta(e.target.value)} required />
        </div>
        <div>
          <label>Fecha de Vencimiento:</label>
          <input type="text" value={vencimiento} onChange={(e) => setVencimiento(e.target.value)} required />
        </div>
        <div>
          <label>CVV:</label>
          <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
        </div>
        <button type="submit">Pagar</button>
      </form>
      {mensaje && <p className='msj'>{mensaje}</p>}
    </div>
  );
};

export default Checkout;
