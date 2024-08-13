// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Products from './components/Products/Products.jsx';
import Footer from './components/Footer/Footer.jsx';
import Destacado from './components/Destacado/Destacado.jsx';
import Spinner from './components/Spinner/Spinner.jsx'; 
import CardDetail from './components/Products/Card/CardDetail/CardDetail.jsx';

import './App.css';

{/*hola*/}

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Spinner /> 
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/destacado" element={<Destacado />} />
            <Route path="/card/:id" element={<CardDetail />} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;



