// src/components/Navitem/Navitem.jsx
import React from 'react';
import './Navitem.css';

const Navitem = (props) => {
    return (
        <li className="nav-item">
            <a href="#" className="nav-link"> {props.name} </a>
        </li>
    );
}

export default Navitem;