import React from 'react';
import Slider from "react-slick";

function ImageCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const carouselItems = [
        { src: "path_to_image1.jpg", alt: "Image 1", caption: "Caption 1" },
        { src: "path_to_image2.jpg", alt: "Image 2", caption: "Caption 2" },
        // ... Add more images as needed
    ];

    return (
        <div className="image-carousel">
            <Slider {...settings}>
                {carouselItems.map((item, index) => (
                    <div key={index} className="carousel-item">
                        <img src={item.src} alt={item.alt} />
                        <div className="carousel-caption">
                            <h3>{item.caption}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ImageCarousel;
