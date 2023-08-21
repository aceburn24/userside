import React from 'react';
import { useAppContext } from './AppContext';

function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart } = useAppContext();

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlist.map(product => (
          <div key={product.id}>
            <span>{product.name} - ₱{product.price.toFixed(2)}</span>
            <button onClick={() => {
              addToCart(product);
              removeFromWishlist(product.id);
            }}>Add to Cart</button>
            <button onClick={() => removeFromWishlist(product.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}


export default Wishlist;
