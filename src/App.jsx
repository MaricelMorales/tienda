import React, { useState } from 'react';
import './App.css';
import Home from './components/Home-funcional.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Producto1 from './products/Producto1.jsx';

import Producto2 from './products/Producto2.jsx';
import Producto3 from './products/Producto3.jsx';
import Producto4 from './products/Producto4.jsx';
import Producto5 from './products/Producto5.jsx';
import Producto6 from './products/Producto6.jsx';
import Producto7 from './products/Producto7.jsx';
import Producto8 from './products/Producto8.jsx';
import Producto9 from './products/Producto9.jsx';
import Producto10 from './products/Producto10.jsx';
function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Home
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
          />
        }/>
        <Route path="/products/Producto1" element={<Producto1/>} />
        <Route path="/products/Producto2" element={<Producto2/>} />
        <Route path="/products/Producto3" element={<Producto3/>} />
        <Route path="/products/Producto4" element={<Producto4/>} />     
        <Route path="/products/Producto5" element={<Producto5/>} />    
        <Route path="/products/Producto6" element={<Producto6/>} />      
        <Route path="/products/Producto7" element={<Producto7/>} />       
        <Route path="/products/Producto8" element={<Producto8/>} />
        <Route path="/products/Producto9" element={<Producto9/>} />       
        <Route path="/products/Producto8" element={<Producto10/>} />
        
      </Routes>
    </Router>

  );
}

export default App;