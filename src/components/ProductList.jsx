import React, { useState, useEffect } from 'react'; // <-- Added useEffect
import { Card, Button, Modal, Pagination, Spinner } from 'react-bootstrap';
import '../App.css';

import { useAppContext } from './AppContext';

  function ProductList() {
  const { products, addToCart, addToWishlist } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showQuickView, setShowQuickView] = useState(false);
  const [sortMethod, setSortMethod] = useState('default');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);


  useEffect(() => {
    setLoading(false); // Set loading to false after the component has mounted
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term) {
      const results = products.filter(product =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts(products);
    }
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category) {
      const results = products.filter(product => product.category === category);
      setFilteredProducts(results);
    } else {
      setFilteredProducts(products);
    }
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setShowQuickView(true);
  };

  const handleSort = (method) => {
    setSortMethod(method);
    let sortedProducts = [...filteredProducts];
    switch (method) {
      case 'priceLowToHigh':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighToLow':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredProducts(sortedProducts);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredProducts.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="product-list">
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <>
          <div className="filters">
            <div className="search-box">
              <i className="fa fa-search search-icon"></i>
              <input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={e => handleSearch(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="filter-box">
              <i className="fa fa-filter filter-icon"></i>
              <select value={selectedCategory} onChange={e => handleFilter(e.target.value)} className="filter-select">
                <option value="">All Categories</option>
                <option value="Sneakers">Sneakers</option>
                <option value="Boots">Boots</option>
              </select>
            </div>
            <div className="sort-box">
              <i className="fa fa-sort sort-icon"></i>
              <select value={sortMethod} onChange={e => handleSort(e.target.value)} className="sort-select">
                <option value="default">Sort By</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="products row">
            {currentProducts.map(product => (
              <div className="col-md-4 product-card" key={product.id}>
                <Card>
                  <Card.Img variant="top" src={product.imageURL} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      ₱{product.price.toFixed(2)}
                    </Card.Text>
                    <Button variant="outline-info" onClick={() => handleQuickView(product)}>Quick View</Button>
                    <Button variant="outline-primary" href={`/product/${product.id}`}>View Details</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>

          <div className="pagination">
            <Pagination>
              {pageNumbers.map(number => (
                <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
                  {number}
                </Pagination.Item>
              ))}
            </Pagination>
          </div>

          <Modal show={showQuickView} onHide={() => setShowQuickView(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedProduct?.imageURL} alt={selectedProduct?.name} />
          <p>Stock: {selectedProduct?.stock}</p> {/* <-- Display stock here */}
          <p>₱{selectedProduct?.price.toFixed(2)}</p>
          <p>{selectedProduct?.description}</p>
          <div>
            <label>Quantity: </label>
            <input 
              type="number" 
              value={quantity} 
              onChange={(e) => setQuantity(e.target.value)} 
              min="1" 
              max={Math.min(selectedProduct?.stock, 10)} 
            />
          </div>
        </Modal.Body>

            <Modal.Footer>
            <Button variant="primary" onClick={() => { addToCart({...selectedProduct, quantity: parseInt(quantity, 10)}); alert('Added to cart!'); }}>Add to Cart</Button>
          <Button variant="secondary" onClick={() => { addToWishlist(selectedProduct); alert('Added to wishlist!'); }}>Add to Wishlist</Button>
          <Button variant="info" href={`/product/${selectedProduct?.id}`}>View Details</Button>
            </Modal.Footer>

          </Modal>
        </>
      )}
    </div>
  );
}

export default ProductList;
