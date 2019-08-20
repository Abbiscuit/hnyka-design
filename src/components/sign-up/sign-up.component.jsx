import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

class SignUp extends Component {
  render() {
    return (
      <div className="sign-up">
        <h2 className="title">登録</h2>
        <form>
          <div>
            <label htmlFor="name">名前: </label>
            <input type="name" name="name" className="form-input" required />
          </div>
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
          <div>
            <label htmlFor="confirmPassword">パスワード (確認用): </label>
            <input
              type="password"
              name="confirmPassword"
              className="form-input"
              required
            />
          </div>
          <div className="buttons">
            <CustomButton type="submit"> 登録 </CustomButton>
          </div>
          <Link to="/signin" className="auth-option">
            ログイン（既にアカウントをお持ちの方）
          </Link>
        </form>
      </div>
    );
  }
}

export default SignUp;
