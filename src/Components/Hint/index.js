import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './Hint.scss';

const Hint = (props) => {

  let handleClick = () => {
    props.hideHint()
  }

  return(
    <div className='Hint'>
      <p className='hint-title'>Hint</p>
      <div className='button hint-continue' onClick={handleClick}>Continue</div>
    </div>
  )
}

export default Hint;