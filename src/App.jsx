// src/App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Products from './components/Products/Products.jsx';
import Footer from './components/Footer/Footer.jsx';
import Destacado from './components/Destacado/Destacado.jsx';


import './App.css';


const App = () => {
  const title = "anashe";
  return (
    <div>
      <Navbar />
      <Home />
      <Products />
      <Destacado />
      <Footer />
    </div>
  );
}

export default App;
