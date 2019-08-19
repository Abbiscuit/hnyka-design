import React, { Component } from 'react';

import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
  render() {
    return (
      <div className="sign-in">
        <h2 className="title">ログイン</h2>
        <form>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" className="form-input" required />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              className="form-input"
              required
            />
          </div>
          <div className="buttons">
            <CustomButton type="submit"> ログイン </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
