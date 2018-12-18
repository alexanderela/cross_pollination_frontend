import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className='Login'>
        <h1 className='login-title'>FlagShip</h1>
        <div className='button login-button-facebook'>Facebook</div>
        <div className='button login-button-twitter'>Twitter</div>
        <div className='button login-button-email'>Email</div>
      </div>
    );
  }
}

export default Login;
