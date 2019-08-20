import React from 'react';

import './about.styles.scss';

const AboutPage = () => {
  return (
    <section className="about">
      <p>Hnyka Storeへようこそ！</p>
      <p>
        「毎日のちょっとした瞬間に、はなやかな気持ちになれたら…」
        <br /> そんなコンセプトでモノづくりをしています。
      </p>
      <a
        href="https://www.instagram.com/hnyka_abbiscuit/"
        className="instagram"
      >
        instagramアカウントはこちら
      </a>
    </section>
  );
};

export default AboutPage;
