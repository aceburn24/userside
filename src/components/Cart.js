import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

function Cart({ cartItems, removeFromCart }) {
  return (
    <ListGroup>
      {cartItems.map(item => (
        <ListGroup.Item key={item.id}>
          {item.name} - ${item.price}
          <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default Cart;
