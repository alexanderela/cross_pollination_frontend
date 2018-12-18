import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './Results.scss';

class Results extends Component {
  render() {
    return (
      <div className='Results'>
        <div className='account-area'>
          <h5 className='account-text'>Alex <strong>25</strong></h5>
        </div>
      </div>
    );
  }
}

export default Results;
