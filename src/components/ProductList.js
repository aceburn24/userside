import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <div className="col-md-4" key={product.id}>
          <ProductItem key={product.id} product={product} />
          <Card>
            <Card.Img variant="top" src={product.imageURL} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Button variant="primary" href={`/product/${product.id}`}>View Details</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
