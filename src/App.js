import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import { AuthProvider } from './components/AuthContext';
import Authentication from './components/Authentication';
import GuestDashboard from './components/GuestDashboard'; 
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import UserProfile from './components/UserProfile';
import { AppProvider } from './components/AppContext';
import './App.css';

function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/auth" element={<Authentication />} />
              <Route path="/guest" element={<GuestDashboard />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/profile" element={<UserProfile />} />
              {/* Add other routes as needed */}
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </AppProvider>
  );
}

export default App;