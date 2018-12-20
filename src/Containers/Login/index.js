import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import * as API from '../../utilities/API';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      createUser: false,
      error: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  // submitLogin = async (e) => {
  //   e.preventDefault();
  //   const { email, password } = this.state;
  // };

  clearInputs = () => {
    this.setState({
      name: '',
      email: '',
      password: '',
    });
  }
;
  render() {
    return (
      <div className='Login'>
        <h1 className='login-title'>FlagShip</h1>
        <div className='button login-button-facebook'>Facebook</div>
        <div className='button login-button-twitter'>Twitter</div>
        <div className='button login-button-email'>Email</div>

        <form className='login-form'>
          <input className='login-input login-name' name='name' placeholder='Name' />
          <input className='login-input login-email' name='email' placeholder='Email' />
          <input className='login-input login-password' name='password' placeholder='Password' />
        </form>
      </div>
    );
  }
}

export default Login;
