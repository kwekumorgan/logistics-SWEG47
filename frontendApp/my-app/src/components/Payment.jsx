import React from 'react';
import { Link } from 'react-router-dom';
import './Payment.css'; // Import the CSS file specific to the payment page

const PaymentPage = () => {
  return (
    <div className="payment-container">
      <header className="payment-header">
        <h1>Payment Page</h1>
        <Link to="/carts" className="back-link">Back to Cart</Link>
      </header>
      <div className="payment-content">
        <h2>Complete Your Purchase</h2>
        <form className="payment-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <input type="text" id="card-number" name="card-number" required />
          </div>
          <div className="form-group">
            <label htmlFor="expiry-date">Expiry Date</label>
            <input type="text" id="expiry-date" name="expiry-date" required />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" required />
          </div>
          <button type="submit" className="btn">Pay Now</button>
        </form>
      </div>
    </div>
  );
}

export default PaymentPage;
