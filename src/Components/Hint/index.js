import React, { Component } from 'react';
import './Hint.scss';
import PropTypes from 'prop-types';

class Hint extends Component {

  handleClick = () => {
    this.props.hideHint()
  }

  getCountryOutlinePath = () => {
    const { outline } = this.props
    const outlineUrl = `https://flagz4u.herokuapp.com${outline}`
    return outlineUrl
  }

  showHint = () => {
    const { hint, fact } = this.props;

    if (hint === 'fact') {
      return <p className="hint-fact">{fact}</p>
    } else if (hint === 'outline') {
        const outline = this.getCountryOutlinePath()
        return <img src={outline} alt='Country Outline' className='hint-outline'/>
    } else if(hint === 'out of hints') {
        return <p className='hint-fact out-of-hints'>You are out of hints!</p>
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

Hint.propTypes = {
  hint: PropTypes.string.isRequired,
  outline: PropTypes.string.isRequired,
  fact: PropTypes.string.isRequired,
  hideHint: PropTypes.func.isRequired,
}

export default Hint;
