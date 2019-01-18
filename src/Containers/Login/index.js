import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../Thunks/user';
import './Login.scss';
import PropTypes from 'prop-types';

export class Login extends Component {
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
      _isMounted: false
    }
  }

  componentDidMount() {
    this._isMounted = true
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  createUser = () => {
    this.setState({ createUser: !this.state.createUser });
  }

  loginUser = async (event) => {
    const { createUser, name, email, password } = this.state;
    const { fetchUser } = this.props;

    event.preventDefault();
    return createUser
      ? fetchUser(null, email, password)
      : fetchUser(name, email, password)
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

  handleSubmit = async (event) => {
    const user = await this.loginUser(event)
    if (this.state._isMounted === true) {
      return user
    } else {
      return null
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
    const { emailCredentials, formLogin, name, email, password, error } = this.state;
    const { loading } = this.props;
    const showError = loading === `Email & password don't match` || loading === `Login to save score`
      ? loading
      : ''

    return (
      <div className='Login'>
        <div className='login-background-color'>
          <h1 className={!emailCredentials ? 'login-title' : 'login-title-small'}>World<br />Of Flags</h1>
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
              <div className='login-error'>{error}</div>
              <div className='login-signup-slider' onClick={this.changeFormPurpose}>
                <div className='form-slider-login'>login</div>
                <div className={formLogin ? 'form-slider form-slider-left' : 'form-slider form-slider-right'}></div>
                <div className='form-slider-signup'>sign up</div>
              </div>
              {
                !formLogin &&
                <div>
                  <h4 className='error'>{showError}</h4>
                  <input
                    className='login-input login-name'
                    value={name}
                    name='name'
                    onChange={this.handleChange}
                  />
                  {!name &&
                    <div className='login-input-placeholder name-placeholder'>name</div>
                  }
                </div>
              }
              <h4 className='error'>{showError}</h4>
              <input
                className='login-input login-email'
                value={email}
                name='email'
                onChange={this.handleChange}
              />
              {!email &&
                <div className='login-input-placeholder email-placeholder'>email</div>
              }
              <input
                className='login-input login-password'
                value={password}
                type='password'
                name='password'
                onChange={this.handleChange}
              />
              {!password &&
                <div className='login-input-placeholder password-placeholder'>password</div>
              }
              <button className='login-submit' onClick={this.handleSubmit}>login</button>
              <button className='login-back' onClick={this.closeCredentials}>go back</button>
            </form>
          }
        </div>
      </div>
    );
  }
}

export const mapStateToProps = ({ user, loading }) => ({
  user: user,
  loading: loading
})

export const mapDispatchToProps = (dispatch) => ({
  fetchUser: (name, email, password) => dispatch(fetchUser(name, email, password))
});

Login.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.string.isRequired,
  fetchUser: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
