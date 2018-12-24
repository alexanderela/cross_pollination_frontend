import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './Account.scss';


class Account extends Component {
  render() {
    return (
      <div className='Account'>
        <div className='account-area'>
          <div className='back-button'>
          </div>
        </div>
        <div className='profile-image-container'>
          {/* <img alt='' className='profile-image' /> */}
        </div>
        <div className='user-data'>
          <p className='profile-name'>Alex Ela</p>
          <div className='points-container'>
            <div className='points-label'>points</div>
            <div className='points-number'>25</div>
          </div>
          <div className='account-data'>
            <div className='email-label'>email</div>
            <div className='email-text'>email@email.com</div>
          </div>
          <div className='extra-data'>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
