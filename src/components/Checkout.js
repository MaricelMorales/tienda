import React, { useState } from 'react';
import './Checkout.css';

const Checkout = ({ carrito, total }) => {

  const [nombre, setNombre] = useState(''); // Estado para el nombre del usuario
  const [apellido, setApellido] = useState(''); // Estado para el apellido del usuario
  const [tarjeta, setTarjeta] = useState(''); // Estado para el número de tarjeta de crédito
  const [vencimiento, setVencimiento] = useState(''); // Estado para la fecha de vencimiento de la tarjeta
  const [cvv, setCvv] = useState(''); // Estado para el CVV de la tarjeta
  const [mensaje, setMensaje] = useState(''); // Estado para el mensaje

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje('Pago realizado con éxito');
  };

  return (
    <div className="checkout">
      <h2>Resumen del Pedido</h2>
      <ul>
        {carrito.map(product => (
          <li key={product.id}>
            {product.titulo} - {product.cantidad} x ${product.precio}
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
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Checkout;
