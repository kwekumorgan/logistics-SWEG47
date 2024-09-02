import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DesktopHome from './components/DesktopHome';
import MobileHome from './components/MobileHome';
import ProductDetailPage from './components/ProductDetailPage';
import Payment from './components/Payment';
import About from './components/About';
import Events from './components/Events';
import LoginRegister from './components/LoginRegister';
import Carts from './components/Carts';
import { CartProvider } from './components/CartContext';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import BoltSeals from './components/BoltSeals';
import CableSeals from './components/CableSeals';
import PlasticSeals from './components/PlasticSeals';
import './App.css';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Conditionally render the home page based on the screen size */}
          <Route path="/" element={isMobile ? <MobileHome /> : <DesktopHome />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          {/* Add routes for the category pages */}
          <Route path="/bolt-seals" element={<BoltSeals />} />
          <Route path="/cable-seals" element={<CableSeals />} />
          <Route path="/plastic-seals" element={<PlasticSeals />} />
        </Routes>
        {/* Conditionally render Footer based on location */}
        {location.pathname !== '/login' && <Footer />}
      </div>
    </CartProvider>
  );
};

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
