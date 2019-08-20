import React from 'react';
import { Link } from 'react-router-dom';

import Dropdown from '../dropdown/dropdown.component';

import './header.styles.scss';

class Header extends React.Component {
  state = {
    currentUser: null,
    hidden: true
  };

  render() {
    return (
      <header className="header">
        <Link to="/" className="logo">
          Hnyka
        </Link>
        <div className="options">
          <Link to="/about" className="option">
            About
          </Link>
          {this.state.currentUser ? (
            <Link to="/signout" className="option">
              Sign Out
            </Link>
          ) : (
            <Link to="/signin" className="option">
              Sign In
            </Link>
          )}

          <div
            className="option"
            onClick={() => this.setState({ hidden: !this.state.hidden })}
          >
            Cart
          </div>
        </div>
        {this.state.hidden ? null : <Dropdown />}
      </header>
    );
  }
}

export default Header;
