import React, { useState } from 'react';
import './App.css';
import Home from './components/Home-funcional.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Producto1 from './products/Product1.jsx';

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
        } />
        <Route path="/products/Product1" element={<Producto1 />} />
      </Routes>
    </Router>
  );
}

export default App;



/*import React from 'react';
import './App.css';
import Home from './components/Home.jsx';

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
*/



/*
import { useState } from 'react';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';

function App() {
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

	return (
		<>
			<Header
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
			<ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
		</>
	);
}

export default App;
*/