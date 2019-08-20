import React from 'react';

import './checkout.styles.scss';
import CheckoutItems from '../../components/checkout-items/checkout-items.component';

const CheckoutPage = () => {
  return (
    <section className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>商品</span>
        </div>
        <div className="header-block">
          <span>商品名</span>
        </div>
        <div className="header-block">
          <span>数量</span>
        </div>
        <div className="header-block">
          <span>単価</span>
        </div>
        <div className="header-block">
          <span>金額</span>
        </div>
        <div className="header-block">
          <span>{'削除'}</span>
        </div>
      </div>
      <CheckoutItems />
      <CheckoutItems />
      <CheckoutItems />
      <div className="total-price">
        <span>合計金額: 10,000円</span>
      </div>
    </section>
  );
};

export default CheckoutPage;
