import React, { Component } from 'react';
import s from './LoginForm.module.css';




class LoginForm extends Component {
  state = {
    login: '',
    password: '',
    loginError: "",
    passwordError: "",
    isOpen: true,
  };


  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  validate = () => {
    let loginError = "";
    let passwordError = "";

    if (!this.state.login) {
      loginError = "Value is required";
    }
    if (!this.state.password) {
      passwordError = "Value is required";
    }
    if (passwordError || loginError) {
      this.setState({ passwordError, loginError });
      return false;
    }

    return true;
  };

  handleSubmit = e => {
    e.preventDefault()
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);

    }

  };

  // handleClose = () => {
  //   this.setState({ isOpen: false });
  // };

  render() {
    const { login, password, } = this.state;

    const { isOpen } = this.state
    return (
      <div className={s.container}>
        {isOpen && (<form className={s.loginForm} onSubmit={this.handleSubmit}>
          <div className={s.inputBox}>
            <label className={s.loginLabel} >Login</label>
            <input
              minLength="6"
              type="text"
              name="login"
              value={login}
              onChange={this.handleChange}
              className={s.loginInput} />
            <p style={{ fontSize: 14, color: "red" }}>
              {this.state.loginError}
            </p>
          </div>

          <div className={s.inputBox}>
            <label className={s.loginLabel} >Password</label>
            <input
              minLength="8"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className={s.loginInput} />
            <p style={{ fontSize: 14, color: "red" }}>
              {this.state.passwordError}
            </p>
          </div>

          <button className={s.loginButton} type="submit" onClick={this.handleClose}>Submit</button>
        </form>)}
      </div>
    );
  }
}

export default LoginForm;