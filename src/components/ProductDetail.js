import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) return <p>Product not found!</p>;

  return (
    <Card>
      <Card.Img variant="top" src={product.imageURL} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Button variant="primary" href="/checkout">Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductDetail;
