import React, { useState, useEffect} from 'react';
import product_data from '../components/product_data';
import './BoltSeals.css'; // Import the CSS file
import MobileHeader from '../components/MobileHeader';
import Header from '../components/Header'

const BoltSeals = () => {
  const filteredBoltSeals = product_data.boltSeals.filter((seal) => seal.price > 50);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      const header = document.querySelector('.header');
      const navbarHeight = document.querySelector('.ribbon')?.offsetHeight || 0; // Safe navigation with optional chaining
  
      if (header) {
        if (window.scrollY > navbarHeight) {
          header.classList.add('fixed-header');
        } else {
          header.classList.remove('fixed-header');
        }
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
   // Scroll to the top of the page when the component is mounted
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <div>
    {isMobile ? <MobileHeader /> : <Header />}
    <div className="nd-container12">
      <div className="featuredP-text12">Bolt Seals</div>
      <div className="product-list12">
        {filteredBoltSeals.map((seal) => (
          <div key={seal.id} className="Products-container321">
            <img src={seal.thumb} alt={seal.product_name} className="image12" />
            <div className="product-name12">{seal.product_name}</div>
            <div className="product-description12">{seal.description}</div>
            <div className="product-price12">{`${seal.currency} ${seal.price}`}</div>
            <button className="button321">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BoltSeals;
