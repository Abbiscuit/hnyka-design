import React from 'react';

import './checkout-items.styles.scss';

const CheckoutItems = () => {
  return (
    <section className="checkout-items">
      <div className="image-container">
        <div className="image" />
      </div>
      <span className="name">がま口財布</span>
      <span className="quantity">2</span>
      <span className="price">&yen;1,800</span>
      <span className="total-item-price">&yen;3,600</span>
      <div className="remove">&#10005;</div>
    </section>
  );
};

export default CheckoutItems;
