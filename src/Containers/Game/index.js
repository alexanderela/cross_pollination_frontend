import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
// import './Game.css';

class Game extends Component {
  render() {
    return (
      <div className='Game'>
        <div className='top-container'>
          <div className='account-button'>
            <h5>Alex <strong>25</strong></h5>
          </div>
        </div>
        <div className='flag-main'></div>
        <p className='hint-text'></p>
        <div className='hint-button'>
          Hints: 2
        </div>
        <div className='option-button option1'>Option 1</div>
        <div className='option-button option2'>Option 2</div>
        <div className='option-button option3'>Option 3</div>
        <div className='option-button option4'>Option 4</div>
      </div>
    );
  }
}

export default Game;
