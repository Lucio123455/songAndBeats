// src/components/Cart/Cart.jsx
import React from 'react';
import { useCartContext } from '../../context/cartContext';
import { collection, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase/dbConnection';
import './Cart.css'; 

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCartContext();

  const handlePurchase = async () => {
    try {
      const deletePromises = cart.map(item => {
        const docRef = doc(db, "productos", item.id);
        return deleteDoc(docRef);
      });
  
      await Promise.all(deletePromises);
      clearCart();
  
      alert("Compra exitosa");
    } catch (error) {
      console.error("ERROR", error);
      alert("No se ha podido completar la compra, puede ser que alguien ya haya comprado este producto");
    }
  };

  return (
    <div className="cart-container">
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">El carrito esta vacio</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">${item.price}</p>
                <button className="remove-item-button" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <button className="purchase-button" onClick={handlePurchase}>Buy Now</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
