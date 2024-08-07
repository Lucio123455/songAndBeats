// src/components/Navitem/Navitem.jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import './Navitem.css';


const Navitem = ({ categoria }) => {
  

  return (
    <>
      
        <NavLink to={`/${categoria.toLowerCase()}`} className="nav-link">
          {categoria}
        </NavLink>
      
    </>
  );
}

export default Navitem;

