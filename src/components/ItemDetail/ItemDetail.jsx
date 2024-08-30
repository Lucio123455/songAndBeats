import React, { useState } from 'react';
import { useCartContext } from '../../context/cartContext';
import './ItemDetail.css';
import BarraReproductor from '../Destacado/BarraReproductor/BarraReproductor.jsx';

const ItemDetail = ({ id, name, description, price, image, audioUrl }) => {
  const { addToCart } = useCartContext();
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    const beat = { id, name, description, price, image, audioUrl };
    addToCart(beat);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000); 
  };

  return (
    <section className="item-detail" style={{ backgroundImage: `url(${image})` }}>
      <h2>{name}</h2>
      <p className="price">${price}</p>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
      {showMessage && <p className="confirmation-message">Producto agregado al carrito!</p>}
      <div className="barra-reproductor">
        <BarraReproductor name={name} image={image} audioUrl={audioUrl} />
      </div>
    </section>
  );
};

export default ItemDetail;





