
import { Link } from 'react-router-dom';
import './Header.css';
import KashLogo from '../Media/KASHLOGO1.jpg';
import React, { useEffect } from 'react';
import './About.css'; // Import the CSS file specific to the About page
import SearchIcon from '../Media/Search.png';

const AboutPage = () => {
  useEffect(() => {
    function handleScroll() {
      const header = document.querySelector('.header');
      const navbarHeight = document.querySelector('.ribbon').offsetHeight;
      if (window.scrollY > navbarHeight) {
        header.style.position = 'fixed';
        header.style.top = '0';
      } else {
        header.style.position = 'relative';
        header.style.top = '';
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearch = () => {
    alert('Perform search operation');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
<div><header className="header">
      <img src={KashLogo} height="80" alt="Department Of Computer Science" />
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
      <Link to="/Carts">Carts</Link>
      <Link to="/About">About</Link>
      <Link to="/login">
      <button className="sign-in-button">Sign In</button>
      </Link>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          onKeyPress={handleKeyPress}
        />
        <button className="search-button" onClick={handleSearch}>
          <img src={SearchIcon} alt="Search" />
        </button>
      </div>
    </header>
    <div className="about-container">
      <div className="about-box">
        <p>
          We have the pleasure to introduce Kash Security Seal and Logistics (KSS & LOGISTICS) to your company. We are specialized in Seals business. KSS & Logistics is a registered Ghanaian owned business since 2012 and also a VAT registered business.
        </p>
        <p>
          We would like to make our line of service available to your company in the hope that we may establish a long lasting business relationship with your esteemed company for mutual benefits.
        </p>
        <p>
          KSS & Logistics offers integrated logistics services and tailored in all kinds of security seals. The plastic seals is made up of high quality food grade polypropylene, carbon steel, equipped with a galvanized spring steel locking insert for securing boxes and bins, hatches, doors, lockers, boxes and vessels, inspection hatches, bags, catering container, courier bags, security containers, medical containers, Tankers and the like. Optional customization with corporate name, telephone number, logo or barcode is also available.
        </p>
        <p>
          Our seals are safeguard products, so the quality control system is very important. We keeping the high quality as our principle, maintaining the client’s printing numbers, and doing 100% inspection for all the seals. Our seals passed the ISO9001:2015 certified, and most of the High security seals and container seals are ISO/PA 17712:2013 certified by international norm ISO/IEC17025 lab.
        </p>
      </div>
    </div>
    </div>
  );
}

export default AboutPage;
