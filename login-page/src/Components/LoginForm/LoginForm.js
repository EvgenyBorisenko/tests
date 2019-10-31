import React, { Component } from 'react';
import s from './LoginFile.module.css';

class LoginForm extends Component {
  state = {
    login: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault()
  };

  render() {
    const { login, password, } = this.state;

    return (
      <div className={s.container}>
        <form className={s.loginForm} onSubmit={this.handleSubmit}>
          <div className={s.inputBox}>
            <label className={s.loginLabel} >Login</label>
            <input
              type="text"
              name="login"
              value={login}
              min="6"
              required
              onChange={this.handleChange}
              placeholder="Login"
              className={s.loginInput} />
          </div>
          <div className={s.inputBox}>
            <label className={s.loginLabel} >Password</label>
            <input
              type="password"
              name="password"
              value={password}
              min="8"
              required
              onChange={this.handleChange}
              placeholder="Password"
              className={s.loginInput} />
          </div>
          <button className={s.loginButton} type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;