import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { signOut } from '../../actions/userActions';
import { connect } from 'react-redux';
import './Account.scss';
import PropTypes from 'prop-types';

class Account extends Component {
  constructor(){
    super()
  }
  changeRoute = () => {
    this.forceUpdate();
  }

  logoutUser = () => {
    this.props.signOut({});
  }

  render() {
    const { user, totalPoints } = this.props
    console.log(user)
    return (
      <div className='Account'>
        <div className='account-area'>
          <NavLink to='/' onClick={this.changeRoute} className='back-button'></NavLink>
          <div className='account-logout' onClick={this.logoutUser} >log out</div>
        </div>
        <div className='profile-image-container'>
          {/* <img alt='' className='profile-image' /> */}
        </div>
        <div className='user-data'>
          <p className='profile-name'>{user.name}</p>
          <div className='points-container'>
            <div className='points-label'>points</div>
            <div className='points-number'>{totalPoints}</div>
          </div>
          <div className='account-data'>
            <div className='email-label'>email</div>
            <div className='email-text'>{user.email}</div>
          </div>
          <div className='extra-data'>
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  signOut: (user) => dispatch(signOut(user))
})

Account.propTypes = {
}

export default connect(mapStateToProps, mapDispatchToProps) (Account);
