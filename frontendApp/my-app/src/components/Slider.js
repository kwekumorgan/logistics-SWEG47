import React from 'react';
import Slider from 'react-slick';
import './Slider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import video from '../Media/VIDEO.mp4';
import image from '../Media/BarretWard1.jpg';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        <div className="image-container">
          <img src={image} alt="Barret Ward" className="full-screen-image" />
        </div>
        <div className="video-container">
          <video src={video} autoPlay loop muted playsInline className="full-screen-video" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
