<<<<<<< HEAD
import React, { Component } from 'react';
import './Hint.scss';
import PropTypes from 'prop-types';

class Hint extends Component {
=======
import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import './Hint.scss'

class Hint extends Component {
  constructor(props) {
    super(props)
  }
>>>>>>> Add styling for Account and login placeholders

  handleClick = () => {
    this.props.hideHint()
  }

  getCountryOutlinePath = () => {
    const { outline } = this.props
    const outlineUrl = `https://flagz4u.herokuapp.com${outline}`
    return outlineUrl
  }

  showHint = () => {
<<<<<<< HEAD
    const { hint, fact } = this.props;
=======
    const { hint, outline, fact } = this.props
>>>>>>> Add styling for Account and login placeholders

    if (hint === 'fact') {
      return <p className="hint-fact">{fact}</p>
    } else if (hint === 'outline') {
<<<<<<< HEAD
        const outline = this.getCountryOutlinePath()
        return <img src={outline} alt='Country Outline' className='hint-outline'/>
    } else if(hint === 'out of hints') {
        return <p className='hint-fact out-of-hints'>You are out of hints!</p>
=======
      const outline = this.getCountryOutlinePath()
      return <img src={outline} className="hint-outline" />
    } else if (hint === 'out of hints') {
      return <p className="hint-fact out-of-hints">You are out of hints!</p>
>>>>>>> Add styling for Account and login placeholders
    }
  }
  render() {
    return (
      <div className="Hint">
        <p className="hint-title">Hint</p>
        {this.showHint()}
        <div className="button hint-continue" onClick={this.handleClick}>
          Continue
        </div>
      </div>
    )
  }
}

<<<<<<< HEAD
Hint.propTypes = {
  hint: PropTypes.string.isRequired,
  outline: PropTypes.string.isRequired,
  fact: PropTypes.string.isRequired,
  hideHint: PropTypes.func.isRequired,
}

export default Hint;
=======
export default Hint
>>>>>>> Add styling for Account and login placeholders
