import React from 'react';
import { useAppContext } from './AppContext';

function Cart() {
  const { cartItems, addToCart, removeFromCart, deleteFromCart } = useAppContext();

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id}>
            <span>{item.name} - ₱{item.price.toFixed(2)} x {item.quantity}</span>
            <button onClick={() => addToCart(item, 1)}>+</button>
            <button onClick={() => removeFromCart(item, 1)}>-</button>
            <button onClick={() => deleteFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}


export default Cart;
