import React from 'react';

import { Link } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

import './dropdown.styles.scss';

const Dropdown = () => {
  return (
    <div className="dropdown">
      <div className="cart-items">
        <div className="cart-item">
          <div className="image" />
          <div className="cart-details">
            <span className="name">Earings</span>
            <span className="price">2 x $18.00</span>
          </div>
        </div>
        <div className="cart-item">
          <div className="image" />
          <div className="cart-details">
            <span className="name">Earings</span>
            <span className="price">18.00</span>
          </div>
        </div>
        <div className="cart-item">
          <div className="image" />
          <div className="cart-details">
            <span className="name">Earings</span>
            <span className="price">18.00</span>
          </div>
        </div>
        <div className="cart-item">
          <div className="image" />
          <div className="cart-details">
            <span className="name">Earings</span>
            <span className="price">18.00</span>
          </div>
        </div>
      </div>
      <div className="checkout-button">
        <Link to="/checkout">
          <CustomButton>購入手続きへ</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
