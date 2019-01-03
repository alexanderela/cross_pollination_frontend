import React, { Component } from 'react';
import './Results.scss';
import PropTypes from 'prop-types';


class Results extends Component {

  handleClick = () => {
    const { getCountry, closeResults } = this.props

    getCountry()
    closeResults()
  }

  render() {
    const { status, correctCountry, points, totalPoints } = this.props
    return (
      <div className="Results">
        <p className="results-title">{status}!</p>
        <p className="results-correct-country">
          {correctCountry} was the correct answer
        </p>
        <p className="points-gained">
          <strong>+{points}</strong> pts
        </p>
        <div className="results-divider" />
        <p>Total</p>
        <p className="total-points-count">{totalPoints}</p>
        <div className="button results-continue" onClick={this.handleClick}>
          Continue
        </div>
      </div>
    )
  }
}

Results.propTypes = {
  getCountry: PropTypes.func.isRequired,
  closeResults: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  correctCountry: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  totalPoints: PropTypes.number.isRequired,
}

export default Results;
