import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import * as API from '../../utilities/API';
import { connect } from 'react-redux';
import { fetchUser } from '../../Thunks/user';
import './Login.scss';
// import city1 from '../../images/intros/b.png'

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
      formLogin: true,
    }
  }

  createUser = () => {
    this.setState({createUser: !this.state.createUser});
  }

  loginUser = async (event) => {
    const { createUser, name, email, password } = this.state;
    event.preventDefault();
    return createUser
      ? this.props.fetchUser(name, email, password)
      : this.props.fetchUser(null, email, password) 
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
    });
  }

  closeCredentials = () => {
    this.setState({
      emailCredentials: false
    });
  }

  changeFormPurpose = () => {
    const { formLogin } = this.state;
    this.setState({
      formLogin: !formLogin
    })
  }

  // submitLogin = async (e) => {
  //   e.preventDefault();
  //   const { email, password } = this.state;
  // };

  handleSubmit = async (event) => {
    await this.loginUser(event)
    if (this.props.loading !== `Email & password don't match`) {
      this.props.activateLogin();
    }
  }

  clearInputs = () => {
    this.setState({
      name: '',
      email: '',
      password: '',
    });
  }
;
  render() {
    const { emailCredentials, formLogin, name, email, password } = this.state;
    const { loading } = this.props;
    const showError = loading === `Email & password don't match` || loading === `Login to save score`
      ? loading
      : ''

    return (
      <div className='Login'>
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
              <div className='login-signup-slider' onClick={this.changeFormPurpose}>
                <div className='form-slider-login'>login</div>
                <div className={formLogin ? 'form-slider form-slider-login' : 'form-slider form-slider-signup'}></div>
                <div className='form-slider-signup'>sign up</div>
              </div>
              {
                !formLogin &&
                <div>
                  <input className='login-input login-name' name='name' />
                  <div className='login-input-placeholder name-placeholder'>name</div>
                </div>
              }
              <input className='login-input login-email' name='email' />
              <div className='login-input-placeholder email-placeholder'>email</div>
              <input className='login-input login-password' name='password' />
              <div className='login-input-placeholder password-placeholder'>password</div>
              <button className='login-back' onClick={this.closeCredentials}>go back</button>
            </form>
          }
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.user,
  loading: state.loading
})

export const mapDispatchToProps = (dispatch) => ({
  fetchUser:(name, email, password) => dispatch(fetchUser(name, email, password))
})

export default connect (mapStateToProps, mapDispatchToProps)(Login);
