import React from 'react';
import { useAppContext } from './AppContext';
import ProductList from './ProductList';
import ProductSlider from './ProductSlider';
import ImageCarousel from './ImageCarousel';

function HomePage() {
    const { products } = useAppContext();

    const recommendedProducts = products.filter(product => product.category === 'Sneakers' || product.category === 'Boots');
    const accessories = products.filter(product => product.category === 'Accessories');

    return (
        <div className="home-page">
            <ImageCarousel />
            <ProductSlider title="Recommended Products" products={recommendedProducts} />
            <ProductList />
            <ProductSlider title="Shoe Accessories" products={accessories} />
        </div>
    );
}

export default HomePage;
