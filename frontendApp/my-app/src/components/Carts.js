import React from 'react';

const Carts = () => {
  // Example data for carts
  const carts = [
    { id: 1, name: 'Cart 1', items: ['Item 1', 'Item 2', 'Item 3'] },
    { id: 2, name: 'Cart 2', items: ['Item 4', 'Item 5'] },
    { id: 3, name: 'Cart 3', items: ['Item 6', 'Item 7', 'Item 8'] }
  ];

  return (
    <div className="carts">
      <h2>Carts</h2>
      {carts.map(cart => (
        <div key={cart.id} className="cart">
          <h3>{cart.name}</h3>
          <ul>
            {cart.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Carts;
