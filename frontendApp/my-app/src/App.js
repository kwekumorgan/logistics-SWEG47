// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import Payment from './components/Payment';
import About from './components/About';
import Events from './components/Events';
import LoginRegister from './components/LoginRegister';
import Footer from './components/Footer';
import Carts from './components/Carts'; // Import the Carts component
import { CartProvider } from './components/CartContext'; // Import the CartProvider

import './App.css';

function App() {
  return (
    <CartProvider> {/* Wrap your application with CartProvider */}
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/login" element={<LoginRegister />} />
            <Route path="/carts" element={<Carts />} /> {/* Add route for Carts component */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
