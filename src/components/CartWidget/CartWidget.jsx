import React from 'react';
import { useCartContext } from '../../context/cartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { cart } = useCartContext();

  return (
    <div className="cart-widget">
      <span>🛒</span>
      <span>{cart.length}</span>
    </div>
  );
};

export default CartWidget;


