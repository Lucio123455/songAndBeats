// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';
import Navitem from './Navitem/Navitem.jsx';
import { categorias } from '../../mock/mockData.js';
import logo from '../../assets/logo.jpeg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="" className='logo'><img src= {logo} alt="" /></a>
      <ul className="nav-list">
        {categorias.map((categoria, index) => (
          <Navitem key={index} name={categoria} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

