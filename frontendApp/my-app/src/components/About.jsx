import React, { useState, useEffect} from 'react';
import './Header.css';
import './About.css'; // Import the CSS file specific to the About page
import MobileHeader from '../components/MobileHeader';
import Header from '../components/Header'




const AboutPage = () => {
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
     
      <div className="about-container">
        <div className="about-box">
          <p>
            We have the pleasure to introduce Kash Security Seal and Logistics
            (KSS & LOGISTICS) to your company. We are specialized in Seals
            business. KSS & Logistics is a registered Ghanaian owned business
            since 2012 and also a VAT registered business.
          </p>
          <p>
            We would like to make our line of service available to your company
            in the hope that we may establish a long lasting business
            relationship with your esteemed company for mutual benefits.
          </p>
          <p>
            KSS & Logistics offers integrated logistics services and tailored in
            all kinds of security seals. The plastic seals is made up of high
            quality food grade polypropylene, carbon steel, equipped with a
            galvanized spring steel locking insert for securing boxes and bins,
            hatches, doors, lockers, boxes and vessels, inspection hatches,
            bags, catering container, courier bags, security containers,
            medical containers, Tankers and the like. Optional customization
            with corporate name, telephone number, logo or barcode is also
            available.
          </p>
          <p>
            Our seals are safeguard products, so the quality control system is
            very important. We keeping the high quality as our principle,
            maintaining the client’s printing numbers, and doing 100% inspection
            for all the seals. Our seals passed the ISO9001:2015 certified, and
            most of the High security seals and container seals are
            ISO/PA 17712:2013 certified by international norm ISO/IEC17025 lab.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
