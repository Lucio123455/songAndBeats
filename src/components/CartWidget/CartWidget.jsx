import React from 'react';
import './CartWidget.css';
import { FaShoppingCart } from 'react-icons/fa'; 

const CartWidget = ({ itemCount }) => {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={34} />
      {itemCount > 0 && <span className="item-count">{itemCount}</span>}
    </div>
  );
};

export default CartWidget;

