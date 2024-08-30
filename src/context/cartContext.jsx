import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]); 
  };

  const addToCart = (beat) => {
    const exists = cart.some(item => item.id === beat.id);
    if (!exists) {
      setCart([...cart, beat]);
    }
  };

  const removeFromCart = (beatId) => {
    setCart(cart.filter(item => item.id !== beatId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart  }}>
      {children}
    </CartContext.Provider>
  );
};


