import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header'; // Added this line
import Footer from './components/Footer'; // Added this line
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import { AuthProvider } from './components/AuthContext';
import Authentication from './components/Authentication';
import GuestDashboard from './components/GuestDashboard'; 
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import UserProfile from './components/UserProfile';
import ChatBox from './components/Chatbox';
import { AppProvider } from './components/AppContext';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HomePage from './components/HomePage'; 

import './App.css';

function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <Router>
          <Header /> {/* Added this line */}
          <Navbar />
          <div className="container">
            <Routes>
            <Route path="/" element={<HomePage />} />
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
          <ChatBox /> {/* Here's where you'd add the chatbox */}
          <Footer /> {/* Added this line */}
        </Router>
      </AuthProvider>
    </AppProvider>
  );
}

export default App;
