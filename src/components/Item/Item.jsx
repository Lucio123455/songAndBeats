import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ product }) => {
  product.isStar = true;

  return (
    <div className="item-card">
      <img src={product.image} alt={product.name} className="item-image" />
      <div className="item-body">
        <h3 className="item-title">{product.name}</h3>
        <p className="item-price">${product.price}</p>
        <p className="item-description">{product.description} </p>
        <Link to={`/product/${product.id}`} className="item-button">
          Detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
