import React from 'react';
import Slider from "react-slick";

function ProductSlider({ title, products }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <div className="product-slider">
            <h2>{title}</h2>
            <Slider {...settings}>
                {products.map(product => (
                    <div key={product.id} className="product-slider-item">
                        <div className="card">
                            <img src={product.image} alt={product.name} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">Price: ₱{product.price}</p>
                                {/* You can add buttons or links for more actions here, e.g., "Add to Cart" */}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ProductSlider;
