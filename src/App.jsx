import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx'
import Products from './components/Products/Products.jsx';
import Footer from './components/Footer/Footer.jsx';
import Destacado from './components/Destacado/Destacado.jsx'
import Login from './components/Login/Login.jsx'
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Products></Products>
      <Destacado></Destacado>
      <Footer></Footer>
      
    </div>
  );
}

export default App;