import React, { useState } from 'react';
import '../App.css';

function Checkout({ cartItems }) {
  const [receipt, setReceipt] = useState(null);
  const [shippingDetails, setShippingDetails] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type and size here if needed
      setReceipt(file);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShippingDetails(prevState => ({ ...prevState, [name]: value }));
  };

  const handleCheckout = () => {
    // Handle the checkout process, e.g., save order details and uploaded e-receipt to the backend
    console.log('Checkout process initiated...');
  };

  return (
    <div className="checkout">

      {/* 1. Review Cart */}
      <div className="cart-review">
        <h2>Review Cart</h2>
        {/* Display cart items here */}
      </div>

      {/* 2. Shipping Details */}
      <div className="shipping-details">
        <h2>Shipping Details</h2>
        <input type="text" name="address" placeholder="Address" value={shippingDetails.address} onChange={handleInputChange} />
        <input type="text" name="city" placeholder="City" value={shippingDetails.city} onChange={handleInputChange} />
        <input type="text" name="postalCode" placeholder="Postal Code" value={shippingDetails.postalCode} onChange={handleInputChange} />
        <input type="text" name="country" placeholder="Country" value={shippingDetails.country} onChange={handleInputChange} />
      </div>

      {/* 3. Payment Instructions */}
      <div className="payment-instructions">
        <h2>Payment Instructions</h2>
        <p>Please transfer the payment to our bank account (details below). Once done, upload a picture of your e-receipt as proof of payment.</p>
        {/* Display bank details or other payment instructions */}
      </div>

      {/* 4. Upload E-Receipt */}
      <div className="upload-receipt">
        <h2>Upload E-Receipt</h2>
        <input type="file" onChange={handleFileChange} />
        {receipt && <p>File uploaded: {receipt.name}</p>}
      </div>

      <button className="checkout-button" onClick={handleCheckout}>Submit Order</button>
    </div>
  );
}

export default Checkout;
