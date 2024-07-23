import React, { useState } from 'react';
import Card from './Card/Card.jsx';
import { instrumentales } from '../../mock/mockData.js';
import './Products.css';

const Products = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  return (
    <div className="products-container">
      <div className="products">
        {instrumentales.slice(0, visibleCount).map((instrumental) => (
          <Card 
            key={instrumental.id}
            image={instrumental.image}
            title={instrumental.name}
            description={instrumental.description}
            audioUrl={instrumental.audioUrl}
          />
        ))}
      </div>
      {visibleCount < instrumentales.length && (
        <button className="show-more-button" onClick={handleShowMore}>
          Ver más
        </button>
      )}
    </div>
  );
};

export default Products;

