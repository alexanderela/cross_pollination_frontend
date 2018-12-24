import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './Game.scss';
import Hint from '../../Components/Hint';
import Results from '../../Components/Results';
import { connect } from 'react-redux';
// import flag from '../../images/flags/mexico.png';


export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correct: false,
      incorrect: false,
      showHint: false,
      hint: '',
      hintsUsed: 0,
      hintsExhausted: false,
      pointsPossible: 3
    }
  }

  // async componentDidMount(){
  //   var req = require.context('../../images/flags', false, /.*\.png$/);
  //   req.keys().forEach(function(key){
  //     req(key);
  //   });
  // }

  checkAnswer = (e) => {
    const { correctChoice } = this.props;
    console.log(e.target.innerText)
    console.log(correctChoice.name)
    const { innerText } = e.target
    if (innerText === correctChoice.name) {
      this.setState({
        correct: true,
        incorrect: false
      })
    } else {
      this.setState({
        incorrect: true,
        correct: false
      })
    }
  }

  giveHint = () => {
    let { hintsUsed, pointsPossible } = this.state;
    const { outline, questions } = this.props.correctChoice;

    this.setState({
      showHint: true
    });
    
    // if (hintsUsed === 0) {
    //   this.setState({
    //     hint: questions[0]
    //   });
    // } 
    
    // if (hintsUsed === 1) {
    //   this.setState({
    //     hint: outline
    //   });
    // }

    // if (hintsUsed >= 2) {
    //   this.setState({
    //     hintsExhausted: true
    //   })
    // }

    this.setState({
      hintsUsed: hintsUsed + 1,
      pointsPossible: pointsPossible - 1,
    });
  }

  showButtons = () => {
    const { choices } = this.props
    return choices.map(choice => {
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

  closeResults = () => {
    this.setState({
      incorrect: false,
      correct: false,
      hintsExhausted: false,
      hintsUsed: 0,
      pointsPossible: 3,
    });
  }

  hideHint = () => {
    this.setState({
      showHint: false
    });
  }

  getImagePath = () => {
    const { flag } = this.props.currgetImagePathentCountry;
    return `https://flagz4u.herokuapp.com${flag}`
  }

  render() {
    const choiceButtons = this.showButtons();
    const { correct, incorrect, pointsPossible, showHint } = this.state;
    const { name } = this.props.correctChoice;

    return (
      <div className='Game'>
        <div className='top-container'>
          <div className='account-area'>
            <div className='back-button'>
            </div>
            <h5 className='account-text'>Alex <strong>25</strong></h5>
          </div>
        </div>
        <div className='flag-main'>
          <img src={() => this.getImagePath}/>
        </div>
        <div className='hint-button' onClick={this.giveHint}>
          Hints: 2
        </div>
        { choiceButtons }
        { correct &&
          <Results
            status='Correct'
            closeResults={this.closeResults}
            correctCountry={name}
            points={pointsPossible}
          />
        }
        { incorrect &&
          <Results
            status='Wrong'
            closeResults={this.closeResults}
            correctCountry={name}
            points={pointsPossible}
          />
        }
        {showHint && 
          <Hint hideHint={this.hideHint} />
        }
        {/* <Hint /> */}
      </div>
    );
  }
}

export const mapStateToProps = ({ user, currentCountry, usedCountries  }) => ({
  user, 
  currentCountry, 
  usedCountries,   
});

export const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Game);
