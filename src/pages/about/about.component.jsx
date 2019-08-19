import React from 'react';

import './about.styles.scss';

const About = () => {
  return (
    <section className="about">
      <p>Hnyka Storeへようこそ！</p>
      <p>
        「毎日のちょっとした瞬間に、はなやかな気持ちになれたら…」
        <br /> そんなコンセプトでモノづくりをしています。
      </p>
      <a
        href="https://www.instagram.com/hnyka_abbiscuit/"
        style={{
          borderBottom: '3px solid pink'
        }}
      >
        instagramアカウントはこちら
      </a>
    </section>
  );
};

export default About;
