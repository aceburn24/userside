import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
    const initialProducts = [
        { id: 1, name: 'Shoe A', price: 50, image: 'path_to_image_A', category: 'Sneakers', stock: 15 },
        { id: 2, name: 'Shoe B', price: 60, image: 'path_to_image_B', category: 'Boots', stock: 8 },
        { id: 3, name: 'Shoe C', price: 70, image: 'path_to_image_C', category: 'Sneakers', stock: 20 },
        { id: 4, name: 'Shoe D', price: 80, image: 'path_to_image_D', category: 'Boots', stock: 5 },
        { id: 5, name: 'Shoe E', price: 90, image: 'path_to_image_E', category: 'Sneakers', stock: 12 },
    ];
    

    const [products, setProducts] = useState(initialProducts);
    const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem('cartItems')) || []);
    const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem('wishlist')) || []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [cartItems, wishlist]);

    const addToCart = (product, inputQuantity) => {
        setCartItems(prevCartItems => {
            const existingProduct = prevCartItems.find(item => item.id === product.id);
            const maxQuantity = Math.min(product.stock, 10); // This determines the maximum quantity based on stock and the limit of 10
    
            // Check if product is out of stock
            if (product.stock <= 0) {
                alert('This product is out of stock.');
                return prevCartItems;
            }
    
            // If product exists in cart
            if (existingProduct) {
                const newQuantity = existingProduct.quantity + inputQuantity;
    
                if (newQuantity > maxQuantity) {
                    alert(`Maximum quantity reached for this product. Available stock: ${product.stock}`);
                    return prevCartItems;
                }
    
                return prevCartItems.map(item => 
                    item.id === product.id ? {...item, quantity: newQuantity} : item
                );
            }
    
            // If product does not exist in cart and stock is available
            return [...prevCartItems, {...product, quantity: inputQuantity}];
        });
    
        // Decrease the stock of the product
        setProducts(products => {
            return products.map(p => 
                p.id === product.id ? {...p, stock: p.stock - inputQuantity} : p
            );
        });
    };
    
    
    

    const deleteFromCart = (productId) => {
    setCartItems(prevCartItems => {
        return prevCartItems.filter(item => item.id !== productId);
    });
};


    const removeFromCart = (product, quantity = 1) => {
        setCartItems(prevCartItems => {
            const existingProduct = prevCartItems.find(item => item.id === product.id);
            if (existingProduct) {
                if (existingProduct.quantity <= quantity) {
                    return prevCartItems.filter(item => item.id !== product.id);
                } else {
                    return prevCartItems.map(item => 
                        item.id === product.id ? {...item, quantity: item.quantity - quantity} : item
                    );
                }
            }
            return prevCartItems;
        });
    };

    const addToWishlist = (product) => {
        setWishlist(prevWishlist => {
            const existingProduct = prevWishlist.find(item => item.id === product.id);
            if (!existingProduct) {
                return [...prevWishlist, product];
            }
            return prevWishlist; // If product is already in wishlist, return the existing wishlist
        });
    };

    const removeFromWishlist = (productId) => {
        setWishlist(wishlist.filter(item => item.id !== productId));
    };
    
    const value = {
        products,
        cartItems,
        addToCart,
        deleteFromCart, // <-- Add this
        removeFromCart,
        wishlist,
        addToWishlist,
        removeFromWishlist
    };
    
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
