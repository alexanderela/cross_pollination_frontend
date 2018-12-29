import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './Results.scss';

class Results extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    const { getCountry, closeResults } = this.props;

    getCountry()
    closeResults();
  }

  render() {
    const { status, correctCountry, points, totalPoints } = this.props;
    return (
      <div className='Results'>
        <p className='results-title'>{ status }!</p>
        <p className='results-correct-country'>{ correctCountry } was the correct answer</p>
        <p className='points-gained'><strong>+{ points }</strong> pts</p>
        <div className='results-divider'></div>
        <p>Total</p>
        <p className='total-points-count'>{ totalPoints }</p>
        <div className='button results-continue' onClick={this.handleClick}>Continue</div>
      </div>
    );
  }
}

export default Results;
