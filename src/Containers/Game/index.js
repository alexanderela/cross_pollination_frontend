import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './Game.scss';
import Hint from '../../Components/Hint';
let backArrow = require('../../Images/back.svg');


class Game extends Component {
  render() {
    return (
      <div className='Game'>
        <div className='top-container'>
          <div className='account-area'>
            <div className='back-button'>
              {/* <img alt='' className='back-img' src={backArrow} /> */}
            </div>
            <h5 className='account-text'>Alex <strong>25</strong></h5>
          </div>
        </div>
        <div className='flag-main'></div>
        <div className='hint-button'>
          Hints: 2
        </div>
        <div className='option-button button option1'>Option 1</div>
        <div className='option-button button option2'>Option 2</div>
        <div className='option-button button option3'>Option 3</div>
        <div className='option-button button option4'>Option 4</div>
        {/* <Hint /> */}
      </div>
    );
  }
}

export default Game;
