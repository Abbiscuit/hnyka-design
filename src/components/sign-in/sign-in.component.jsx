import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
  render() {
    return (
      <div className="sign-in">
        <h2 className="title">ログイン</h2>
        <form>
          <div>
            <label htmlFor="email">Eメール: </label>
            <input type="email" name="email" className="form-input" required />
          </div>
          <div>
            <label htmlFor="password">パスワード: </label>
            <input
              type="password"
              name="password"
              className="form-input"
              required
            />
          </div>
          <div className="buttons">
            <CustomButton type="submit"> ログイン </CustomButton>
            <CustomButton type="submit" isGoogleSignIn>
              Googleでログイン
            </CustomButton>
          </div>
          <Link to="/signup" className="auth-option">
            アカウントをお持ちでない方はこちら
          </Link>
        </form>
      </div>
    );
  }
}

export default SignIn;
