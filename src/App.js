import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import { AuthProvider } from './components/AuthContext';
import Authentication from './components/Authentication';
import GuestDashboard from './components/GuestDashboard'; 
import './App.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Shoe A', price: 50, image: 'path_to_image_A', category: 'Sneakers' },
    { id: 2, name: 'Shoe B', price: 60, image: 'path_to_image_B', category: 'Boots' },
    // ... add more mock products as needed
  ]);
    const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <AuthProvider>
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          <Route path="/product/:id" element={<ProductDetail products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/guest" element={<GuestDashboard />} />
          <Route path="/" element={<ProductList products={products} />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
