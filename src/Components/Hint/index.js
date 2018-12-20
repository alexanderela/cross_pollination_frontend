import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './Hint.scss';

const Hint = () => {
  return(
    <div className='Hint'>
      <p className='hint-title'>Hint</p>
      <div className='button hint-continue'>Continue</div>
    </div>
  )
}

export default Hint;