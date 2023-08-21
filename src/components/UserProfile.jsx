// UserProfile.jsx

import React from 'react';

function UserProfile() {
    // For now, we'll use mock data. Later, this data will come from your backend.
    const userDetails = {
        name: "John Doe",
        email: "johndoe@example.com",
        address: "123 Main St, City, Country"
    };

    const orderHistory = [
        { id: 1, date: new Date(), total: 100, products: [{ name: "Shoe A", price: 50 }, { name: "Shoe B", price: 50 }] },
        // ... add more mock orders as needed
    ];

    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            <h3>Personal Details</h3>
            <p><strong>Name:</strong> {userDetails.name}</p>
            <p><strong>Email:</strong> {userDetails.email}</p>
            <p><strong>Address:</strong> {userDetails.address}</p>

            <h3>Order History</h3>
            <ul>
                {orderHistory.map(order => (
                    <li key={order.id}>
                        <p><strong>Date:</strong> {order.date.toLocaleString()}</p>
                        <p><strong>Total Amount:</strong> ₱{order.total}</p>
                        <ul>
                            {order.products.map(product => (
                                <li key={product.name}>{product.name} - ₱{product.price}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserProfile;
