import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './Hint.scss';

class Hint extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.hideHint()
  }

  getCountryOutlinePath = () => {
    const { outline } = this.props;
    const outlineUrl = `https://flagz4u.herokuapp.com${outline}`
    return outlineUrl
  }

  showHint = () => {
    const { hint, outline, fact } = this.props;

    if(hint === 'fact') {
      return <p className='hint-fact'>{fact}</p>
    } else if (hint === 'outline') {
        const outline = this.getCountryOutlinePath()
        return <img src={outline} className='hint-outline'/>
    } else if(hint === 'out of hints') {
        return <p className='hint-fact'>You are out of hints!</p>
    }
  }
  render() {
    return(
      <div className='Hint'>
        <p className='hint-title'>Hint</p>
        {this.showHint()}
        <div 
          className='button hint-continue' 
          onClick={this.handleClick}>Continue
        </div>
      </div>
    )
  }
}

export default Hint;