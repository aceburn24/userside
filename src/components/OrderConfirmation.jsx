import React from 'react';
import { Link } from 'react-router-dom';

function OrderConfirmation({ orderDetails }) {
    // Generate a random order ID for demonstration purposes
    const orderId = Math.floor(Math.random() * 1000000);

    return (
        <div className="order-confirmation">
            <h2>Thank you for your order!</h2>
            <p>Your order ID is: {orderId}</p>
            <p>Your order has been received and is now being processed.</p>
            
            <h3>Order Details:</h3>
            <ul>
                {orderDetails.products.map(product => (
                    <li key={product.id}>
                        {product.name} - Quantity: 1 - Price: ₱{product.price}
                    </li>
                ))}
            </ul>
            <p><strong>Total Amount:</strong> ₱{orderDetails.totalAmount}</p>
            <p><strong>Order Date:</strong> {new Date(orderDetails.date).toLocaleString()}</p>
            
            <Link to="/">Return to Homepage</Link>
        </div>
    );
}

export default OrderConfirmation;
