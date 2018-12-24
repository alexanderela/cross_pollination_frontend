import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './Hint.scss';

const Hint = ({ hideHint, hint, outline, fact }) => {
  const handleClick = () => {
    hideHint()
  }

  const getCountryOutlinePath = () => {
    const outlineUrl = `https://flagz4u.herokuapp.com${outline}`
    return outlineUrl
  }

  const showHint = () => {
  	if(hint === 'fact') {
  		return <p className='hint-fact'>{fact}</p>
  	} else if (hint === 'outline') {
  			const outline = getCountryOutlinePath()
  		return <img src={outline} className='hint-outline'/>
  	} else if(hint === 'out of hints') {
  		return <p className='hint-fact'>You are out of hints!</p>
  	}
  }

  return(

    <div className='Hint'>
      <p className='hint-title'>Hint</p>
      {showHint()}
      <div 
      	className='button hint-continue' 
      	onClick={handleClick}>Continue
      </div>
    </div>
  )
}

export default Hint;