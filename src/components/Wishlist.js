import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

function Wishlist({ wishlistItems, removeFromWishlist, moveToCart }) {
  return (
    <ListGroup>
      {wishlistItems.map(item => (
        <ListGroup.Item key={item.id}>
          {item.name}
          <Button variant="success" size="sm" onClick={() => moveToCart(item.id)}>Move to Cart</Button>
          <Button variant="danger" size="sm" onClick={() => removeFromWishlist(item.id)}>Remove</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default Wishlist;
