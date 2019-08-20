import React from 'react';

import './catalogue.styles.scss';

import { product_data } from '../../product-data';

const Catalogue = () => {
  return (
    <section className="catalogue">
      {/* {
        shop_data.map.....
      } */}
      <div className="item-image image1" />
      <div className="item-image image2" />
      <div className="item-image image3" />
      <div className="item-image image4" />
      <div className="item-image image5" />
      <div className="item-image image6" />
    </section>
  );
};

export default Catalogue;
