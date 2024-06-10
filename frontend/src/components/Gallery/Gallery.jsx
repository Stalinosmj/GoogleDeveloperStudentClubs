import React from "react";
import Slider from "react-slick";
import "./Gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { assets} from "../../assets/image-gallery";
import { NextArrow, PrevArrow } from "../../assets/arrow"; // Import custom arrows

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "25%",
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slider-container">
      <h1>Key Moments</h1>
      <Slider {...settings}>
        {assets.map((item, index) => (
          <div key={index} className="image-item">
            <img src={item.image} alt={item.caption} />
        
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
