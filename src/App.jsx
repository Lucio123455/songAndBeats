// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Footer from './components/Footer/Footer.jsx';
import Destacado from './components/Destacado/Destacado.jsx';
import Spinner from './components/Spinner/Spinner.jsx';
import ItemDetail from './components/ItemDetail/ItemDetail.jsx'; // Importa ItemDetail
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import './App.css';
import { CartProvider } from './context/cartContext.jsx';
import Cart from './components/Cart/Cart.jsx';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  return (
    <CartProvider>
    <BrowserRouter>
      {loading ? (
        <Spinner /> 
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/product/:id" element={<ItemDetail />} /> {/* Agrega esta ruta */}
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;




