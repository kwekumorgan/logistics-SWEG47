import React, { useState } from 'react';
import './Payment.css';

const PaymentPage = () => {
  const [sameAsBilling, setSameAsBilling] = useState(true);

  const handleCheckboxChange = () => {
    setSameAsBilling(!sameAsBilling);
  };

  return (
    <div className="payment-page">
      <h1 className="checkout-heading">Checkout</h1>

      <div className="content">
        <div className="billing-details">
          <h2>Billing Details</h2>
          <form>
            {/* Billing Address Fields */}
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your full name" />
            </div>
            <div className="form-group">
              <label htmlFor="address1">Address Line 1</label>
              <input type="text" id="address1" placeholder="Enter your address" />
            </div>
            <div className="form-group">
              <label htmlFor="address2">Address Line 2</label>
              <input type="text" id="address2" placeholder="Enter your address" />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" id="city" placeholder="Enter your city" />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input type="text" id="state" placeholder="Enter your state" />
            </div>
            <div className="form-group">
              <label htmlFor="zip">ZIP Code</label>
              <input type="text" id="zip" placeholder="Enter your ZIP code" />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <select id="country">
                <option>Ghana</option>
                <option>Nigeria</option>
                <option>South Africa</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="Enter your phone number" />
            </div>

            {/* Checkbox for Same as Billing */}
            <div className="form-group">
              <label>
                <input 
                  type="checkbox" 
                  checked={sameAsBilling} 
                  onChange={handleCheckboxChange} 
                />
                Shipping address is the same as billing address
              </label>
            </div>

            {/* Shipping Address Form */}
            {!sameAsBilling && (
              <div className="shipping-address">
                <h3>Shipping Address</h3>
                <div className="form-group">
                  <label htmlFor="shippingName">Full Name</label>
                  <input type="text" id="shippingName" placeholder="Enter your full name" />
                </div>
                <div className="form-group">
                  <label htmlFor="shippingAddress1">Address Line 1</label>
                  <input type="text" id="shippingAddress1" placeholder="Enter your address" />
                </div>
                <div className="form-group">
                  <label htmlFor="shippingAddress2">Address Line 2</label>
                  <input type="text" id="shippingAddress2" placeholder="Enter your address" />
                </div>
                <div className="form-group">
                  <label htmlFor="shippingCity">City</label>
                  <input type="text" id="shippingCity" placeholder="Enter your city" />
                </div>
                <div className="form-group">
                  <label htmlFor="shippingState">State</label>
                  <input type="text" id="shippingState" placeholder="Enter your state" />
                </div>
                <div className="form-group">
                  <label htmlFor="shippingZip">ZIP Code</label>
                  <input type="text" id="shippingZip" placeholder="Enter your ZIP code" />
                </div>
                <div className="form-group">
                  <label htmlFor="shippingCountry">Country</label>
                  <select id="shippingCountry">
                    <option>Ghana</option>
                    <option>Nigeria</option>
                    <option>South Africa</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <ul className="summary-list">
            <li className="summary-item">
              <img src="item-image.jpg" alt="Item" />
              <div className="item-details">
                <p>Product Name</p>
                <p>GHS 29.99</p>
              </div>
            </li>
            {/* Repeat for other items */}
          </ul>
          <div className="totals">
            <p>Subtotal: GHS 59.98</p>
            <p>Shipping: GHS 5.00</p>
            <p><strong>Total: GHS 64.98</strong></p>
          </div>

          <div className="payment-method">
            <h3>Payment Method</h3>
            <div className="form-group">
              <label>
                <input type="radio" name="payment" value="card" checked />
                Credit/Debit Card
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="card-number">Card Number</label>
              <input type="text" id="card-number" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="form-group">
              <label htmlFor="expiry-date">Expiry Date</label>
              <input type="text" id="expiry-date" placeholder="MM/YY" />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" placeholder="123" />
            </div>
          </div>

          <div className="place-order-container">
            <button className="place-order-button">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
