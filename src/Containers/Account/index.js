import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './Account.scss';
let backArrow = require('../../Images/back.svg');


class Account extends Component {
  render() {
    return (
      <div className='Account'>
        <div className='account-area'>
          <div className='back-button'>
            <img alt='' className='back-img' src={backArrow} />
          </div>
        </div>
        <div className='profile-image-container'>
          <img alt='' className='profile-image' />
        </div>
        <div className='user-data'>
          <p>Alex Ela</p>
          <div className='points-container'>
            <p className='points-title'>POINTS</p>
            <p className='points-number'>25</p>
          </div>
          <p className='account-email'>email@email.com</p>
        </div>
      </div>
    );
  }
}

export default Account;
