import React from 'react';
import Slider2 from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MobileSlider.css';
import image3 from '../Media/MobilePic.png';

const MobileSlider = ({ onNavigateToProduct }) => {
      
  const settings1 = {
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
    <div className="mobile-slider-wrapper">
      <Slider2 {...settings1}>
        {/* Render a single slide with one image */}
        <div className="image-container1">
          <img src={image3} alt="KASH WORKERS" className="full-screen-image" />
          <div className="overlay"></div>
          <div className="text1">Secure Your Seals With Confidence</div>
          <div className="text3">Reliable sealing solutions for every shipping need.</div>
          <button className="button1" onClick={onNavigateToProduct}>Shop Now</button>
        </div>

        
      
      </Slider2>

      

   
    </div>
  );
};

export default MobileSlider;
