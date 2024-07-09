import React, { useState } from 'react';
import './Navbar.css';
import Navitem from './Navitem/Navitem.jsx';
import { categorias } from '../../mock/mockData.js';
import logo from '../../assets/logo.jpeg';
import CartWidget from '../CartWidget/CartWidget'; 

const Navbar = () => {
  const [itemCount, ] = useState(0);

  return (
    <nav className="navbar">
      <a href="" className='logo'><img src={logo} alt="Logo" /></a>
      <ul className="nav-list">
        {categorias.map((categoria, index) => (
          <Navitem key={index} name={categoria} />
        ))}
        <div className='cart-widget'><CartWidget itemCount={itemCount} /> {/* Incluye el CartWidget */}</div>
      </ul>
       
    </nav>
  );
}

export default Navbar;


