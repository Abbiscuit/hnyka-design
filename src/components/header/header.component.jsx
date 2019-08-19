import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Hnyka
      </Link>
      <div className="options">
        <Link to="/about" className="option">
          About
        </Link>
        <Link to="/signin" className="option">
          Sign In
        </Link>
        <Link to="/" className="option">
          Cart
        </Link>
      </div>
    </header>
  );
};

export default Header;
