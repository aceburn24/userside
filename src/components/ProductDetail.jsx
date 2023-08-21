import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Carousel } from 'react-bootstrap';

import { useAppContext } from './AppContext';

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const { products, addToCart, addToWishlist, removeFromWishlist } = useAppContext();
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id, 10));

  if (!product) return <p>Product not found!</p>;

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id);

  const handleAddToCart = () => {
    addToCart({...product, quantity});
    alert('Added to cart!');
    removeFromWishlist(product.id); // Remove the product from wishlist if it's added to the cart
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
    alert('Added to wishlist!');
  };

  return (
    <div>
      <Card>
        <Carousel>
          {product.images && product.images.length > 0 ? product.images.map((image, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
            </Carousel.Item>
          )) : <p>No images available</p>}
        </Carousel>

        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              {product.description}
          </Card.Text>
          <p>Stock: {product.stock}</p>
          <Card.Text>
            {product.description}
          </Card.Text>
          <label>Quantity: </label>
          <input 
            type="number" 
            value={quantity} 
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            min="1" 
            max={Math.min(product.stock, 10)} 
          />

          <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
          <Button variant="secondary" onClick={handleAddToWishlist}>Add to Wishlist</Button>
          <Button variant="info" href="/checkout">Buy Now</Button>
        </Card.Body>

      </Card>

      <div className="related-products">
        <h3>Related Products</h3>
        {relatedProducts.map(relatedProduct => (
          <Card key={relatedProduct.id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={relatedProduct.imageURL} />
            <Card.Body>
              <Card.Title>{relatedProduct.name}</Card.Title>
              <Card.Text>
                {relatedProduct.description}
              </Card.Text>
              <Button variant="primary" href={`/product/${relatedProduct.id}`}>View Details</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProductDetail;
