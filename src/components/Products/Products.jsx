import React from 'react';
import Card from './Card/Card.jsx';
import { instrumentales } from '../../mock/mockData.js';
import './Products.css';

const Products = () => {
  return (
    <div className="products">
      {instrumentales.map((instrumental) => (
        <Card 
          key={instrumental.id}
          image={instrumental.image}
          title={instrumental.name}
          description={instrumental.description}
          audioUrl={instrumental.audioUrl}
        />
      ))}
      
    </div>
  );
};

export default Products;