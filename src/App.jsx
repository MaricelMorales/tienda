import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home-funcional';
import ProductoDetalle from './components/ProductoDetalle';
import Checkout from './components/Checkout';

function App() {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <Router>
      <Navbar
        carrito={carrito}
        setCarrito={setCarrito}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <Routes>
        <Route path="/" element={
          <Home
            carrito={carrito}
            setCarrito={setCarrito}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
          />
        } />
        <Route path="/products/:id" element={
          <ProductoDetalle
            carrito={carrito}
            setCarrito={setCarrito}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
          />
        } />
        <Route path="/checkout" element={
          <Checkout
            carrito={carrito}
            total={total}
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;
