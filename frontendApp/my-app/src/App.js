import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductDetailPage from './components/ProductDetailPage'; // Rename this for clarity
import Payment from './components/Payment';
import About from './components/About';
import Events from './components/Events';
import LoginRegister from './components/LoginRegister';
import Footer from './components/Footer';
import Carts from './components/Carts';
import { CartProvider } from './components/CartContext';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetailPage />} /> 
          <Route path="/payment" element={<Payment />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
        {location.pathname !== '/login' && <Footer />}
      </div>
    </CartProvider>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
