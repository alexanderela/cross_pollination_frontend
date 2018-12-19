import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './Results.scss';

class Results extends Component {
  render() {
    return (
      <div className='Results'>
        <p className='results-title'>Correct!</p>
        <p className='points-gained'><strong>+3</strong> pts</p>
        <div className='results-divider'></div>
        <p>Total</p>
        <p className='total-points-count'>25</p>
        <div className='button results-continue'>Continue</div>
      </div>
    );
  }
}

export default Results;
