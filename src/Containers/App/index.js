import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Game from '../Game';
import Account from '../Account';
import Login from '../Login';
import './App.scss';
import * as Fetch from '../../utilities/Fetch';
import { connect } from 'react-redux';
import { setCurrentCountry } from '../../actions/countryActions';
import { updateUsedCountries } from '../../actions/usedCountryActions';
import { getCurrentCountry } from '../../Thunks/countries.js';
import PropTypes from 'prop-types';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      totalPoints: 0
    };
  };

  componentDidMount() {
    this.getCountry()
  };

  getCountry = async () => {
    const { usedCountries, setCurrentCountry, updateUsedCountries } = this.props
    let randomNumber = Math.floor(Math.random() * (196 - 1) + 1);
    const currentCountry = await Fetch.fetchCorrectCountry(randomNumber, usedCountries);
    
    setCurrentCountry(currentCountry)
    updateUsedCountries(currentCountry.name)
  }

  render() {
    const { totalPoints } = this.state;
    const { user } = this.props
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' render={() => {
            if(user.loggedIn) {
              return <Game 
                compilePoints={this.compilePoints} 
                totalPoints={totalPoints}
                getCountry={this.getCountry}
                user={user}
              />
            } else {
                return <Login />
            }
          }}/>

          <Route exact path='/account' render={() => {
            return <Account totalPoints={totalPoints} />
          }} />
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = ({ user, currentCountry, usedCountries }) => ({ 
  user, 
  currentCountry, 
  usedCountries, 
});

export const mapDispatchToProps = (dispatch) => ({
  setCurrentCountry: country => dispatch(setCurrentCountry(country)),
  updateUsedCountries: country => dispatch(updateUsedCountries(country)),
  getCurrentCountry: (randomNumber, usedCountries) => dispatch(getCurrentCountry(randomNumber, usedCountries))
})

App.propTypes = {
  user: PropTypes.object.isRequired,
  currentCountry: PropTypes.object.isRequired,
  usedCountries: PropTypes.array.isRequired,
  setCurrentCountry: PropTypes.func.isRequired,
  updateUsedCountries: PropTypes.func.isRequired,
  getCurrentCountry: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

