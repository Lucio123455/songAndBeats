// src/components/Navbar/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Navitem from './Navitem/Navitem.jsx';
import { categorias } from '../../mock/mockData.js';
import logo from '../../assets/logo.jpeg';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
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
          <Link to="/cart">
            <CartWidget />
          </Link>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;

