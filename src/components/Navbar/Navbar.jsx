// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Navitem from './Navitem/Navitem.jsx';
import { categorias } from '../../mock/mockData.js';
import logo from '../../assets/logo.jpeg';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  const [itemCount,] = useState(0);
  

  return (
    <nav className="navbar">
      <div className='logo'>
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-list">
        {categorias.map((element, index) => {
          return <Navitem key={index} categoria={element} />;
        })}
        <div className='cart-widget'>
          <CartWidget itemCount={itemCount} />
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
