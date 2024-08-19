import React, { useState } from 'react';
import './TextBox.css';
import p1 from '../Media/p1.jpg';
import p8 from '../Media/P8.jpg';
import p3 from '../Media/p7.jpg';
import p4 from '../Media/p4.jpg';
import p5 from '../Media/p3.jpg';
import p12 from '../Media/TRYB2.png';
import p7 from '../Media/PsSQ.jpg';
import p6 from '../Media/TRYB.png';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TextBox = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShopNow = () => {
    setShowModal(false);
    navigate('/product');
  };

  const productData = [
    { id: 1, img: p8, description: 'Product 1' },
    { id: 2, img: p3, description: 'Product 2' },
    { id: 3, img: p1, description: 'Product 3' },
    { id: 4, img: p4, description: 'Product 4' },
    { id: 5, img: p5, description: 'Product 5' },
    { id: 6, img: p12, description: 'Product 6' },
    { id: 7, img: p7, description: 'Product 7' },
    { id: 8, img: p1, description: 'Product 8' },
    { id: 9, img: p6, description: 'Product 9' },
    { id: 10, img: p3, description: 'Product 10' }
  ];

  return (
    <div className="text-box-container">
      {productData.map(product => (
        <div className="text-box" key={product.id} onClick={handleImageClick}>
          <img src={product.img} alt={product.description} />
          <div className="product-description">{product.description}</div>
        </div>
      ))}

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shop Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>Would you like to shop now?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleShopNow}>
            Shop Now
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TextBox;
