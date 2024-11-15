import React from 'react';
import './App.css';
import Home from './components/home/Home.jsx';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from './components/Navbar.jsx';
import Producto1 from './products/Product1.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/Product1" element={<Producto1 />} />
      </Routes>
    </Router>
  );
}

export default App;
