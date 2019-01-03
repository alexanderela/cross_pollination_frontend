import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './Game.scss';
import Hint from '../../Components/Hint';
import Results from '../../Components/Results';
import Login from '../Login'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHint: false,
      hint: '',
      hintsUsed: 0,
      hintsExhausted: false,
      pointsPossible: 3,
      totalPoints: 0,
      status: ''
    }
  }

  checkAnswer = (e) => {
    const { currentCountry } = this.props;
    const { innerText } = e.target

    if (innerText === currentCountry.name) {
      this.setState({
        status: 'Correct'
      }, () => this.addPoints())
    } else {
      this.setState({ status: 'Wrong' })
    }
  }

  giveHint = () => {
    let { hintsUsed, pointsPossible } = this.state;
    const { outline, questions } = this.props.currentCountry;

    this.setState({ showHint: true });
    
    switch(true) {
      case (hintsUsed === 0):
        this.setState({ hint: 'fact' });
        break;      
      case (hintsUsed === 1):
        this.setState({ hint: 'outline'});
        break;     
      case (hintsUsed >= 2):
        this.setState({
          hint: 'out of hints',
          hintsExhausted: true,
        })
        break;
    }

    this.setState({
      hintsUsed: hintsUsed + 1,
      pointsPossible: pointsPossible - 1,
    });
  }

  showButtons = () => {
    const { multipleChoice } = this.props.currentCountry

    if(multipleChoice !== undefined) {
      return multipleChoice.map(choice => {
        return (<div 
                  className='option-button button' 
                  key={choice}
                  name={choice}
                  onClick={this.checkAnswer}
                >
                  {choice}
                </div>)  
      })
    }
  }

  closeResults = () => {
    this.setState({
      hintsExhausted: false,
      hintsUsed: 0,
      pointsPossible: 3,
      status: ''
    });
  }

  addPoints = () => {
    const { status, pointsPossible, totalPoints } = this.state

    if(status === 'Correct'){
      const updatedTotal = totalPoints + pointsPossible
      this.setState({ totalPoints: updatedTotal })
    }
  }

  hideHint = () => {
    this.setState({ showHint: false });
  }

 getCountryFlagPath = () => {
    const { flag } = this.props.currentCountry;
    const flagUrl = `https://flagz4u.herokuapp.com${flag}`
    return flagUrl
  }

  changeRoute = () => {
    this.forceUpdate();
  }

  render() {
    const choiceButtons = this.showButtons();
    const flagImage = this.getCountryFlagPath();

    const { pointsPossible, showHint, hint, totalPoints, status } = this.state;
    const { getCountry, user } = this.props;   
    const { name, facts, country_outline } = this.props.currentCountry;


    return (
      <div className='Game'>
        <div className='top-container'>
          <div className='account-area'>
            <div className='back-button-blank'>
            </div>
            <NavLink className='account-text' exact to='/account' onClick={this.changeRoute}>
              <h5 >{user.name} <strong>{totalPoints}</strong>
              </h5>
            </NavLink>
          </div>
        </div>
        <div className='flag-main'>
          <img src={flagImage} alt='' className='flag-image'/>
        </div>
        <div className='hint-button' onClick={this.giveHint}>
          Hints: 2
        </div>
        
        { choiceButtons }

        { status !== '' &&
          <Results
            status={status}
            closeResults={this.closeResults}
            correctCountry={name}
            points={pointsPossible}
            totalPoints={totalPoints}
            getCountry={getCountry}
          />
        }
        
        {showHint && 
          <Hint 
            hideHint={this.hideHint} 
            hint={hint}
            outline={country_outline}
            fact={facts.country_fact}
          />
        }
      </div>
    );
  }
}

export const mapStateToProps = ({ currentCountry }) => ({
  currentCountry    
});

export const mapDispatchToProps = (dispatch) => ({

})

Game.propTypes = {
  user: PropTypes.object.isRequired,
  currentCountry: PropTypes.object.isRequired,
  totalPoints: PropTypes.number.isRequired,
  getCountry: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
