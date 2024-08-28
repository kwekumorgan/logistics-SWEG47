import React, { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './Slider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import video from '../Media/VIDEO.mp4';
import image from '../Media/BarretWard1.jpg';
import image2 from '../Media/Akwele.png';

const ImageSlider = ({ onNavigateToProduct }) => {
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

  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate('/about');
  };
  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        <div className="image-container">
          <img src={image} alt="Barret Ward" className="full-screen-image" />
          <div className="texta">Secure Your Seals With Confidence</div>
          <div className='text2'>Reliable sealing solutions for every shipping need.</div>
          <button className="button" onClick={onNavigateToProduct}>Shop Now</button>
        </div>
        <div className="image-container">
          <img src={image2} alt="Akwele" className="full-screen-image" />
          <div className="texta">Safeguard Your Shipments With Kash Logistics</div>
          <div className='text2'>Reliable sealing solutions for every shipping need.</div>
          <button className="button" onClick={navigateToAbout}>Learn More</button>
        </div>
        <div className="video-container">
          <video src={video} autoPlay loop muted playsInline className="full-screen-video" />
          <div className="texta">Secure Your Seals With Confidence</div>
          <div className='text2'>Reliable sealing solutions for every shipping need.</div>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
