import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import * as API from '../../utilities/API';
import './Login.scss';
import city1 from '../../images/intros/city1.jpg'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      createUser: false,
      error: '',
      emailCredentials: false,
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  expandCredentials = () => {
    this.setState({
      emailCredentials: true
    })
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
    const { emailCredentials } = this.state;
    return (
      <div className='Login' style={{
        backgroundImage: `url(${city1})`}}>
        <div className='login-background-color'>
        <h1 className={!emailCredentials ? 'login-title' : 'login-title-small'}>Flagship</h1>
          {
            !emailCredentials &&
            <div className='login-divider'>
              <div className='divider'></div>
              <div className='login-divider-text'>login / sign up</div>
              <div className='divider'></div>
            </div>
          }
          <div className='login-button-facebook'>Facebook</div>
          <div className='login-button-twitter'>Twitter</div>
          {
            !emailCredentials &&
            <div className='login-button-email' onClick={this.expandCredentials}>Email</div>
          }
          {
            emailCredentials &&
            <form className='login-form'>
              <div className='form-instructions'>press return to submit</div>
              <input className='login-input login-name' name='name' />
              <div className='login-input-placeholder name-placeholder'>name</div>
              <input className='login-input login-email' name='email' />
              <div className='login-input-placeholder email-placeholder'>email</div>
              <input className='login-input login-password' name='password' />
              <div className='login-input-placeholder password-placeholder'>password</div>
            </form>
          }

        </div>
      </div>
    );
  }
}

export default Login;
