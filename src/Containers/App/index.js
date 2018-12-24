import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Game from '../Game';
import Account from '../Account';
import Login from '../Login';
import './App.scss';
import mockData from '../../mockData/mockData';
import * as Fetch from '../../utilities/Fetch';
import { connect } from 'react-redux';
import { setCurrentCountry } from '../../actions/countryActions';
import { updateUsedCountries } from '../../actions/usedCountryActions';
import countryNames from '../../utilities/countryNames';
import { getCurrentCountry } from '../../Thunks/countries.js';
// import allCountries from '../../utilities/allCountriesImagesObject.js'

export class App extends Component {
  constructor() {
    super();
//i'd argue that we don't need any of this state if we are going to have redux
    this.state = {
      totalPoints: 0,
      usedCountries: [],
      countryOptions: [],
      correctCountry: {},
    };
  };

  componentDidMount() {
    this.getCountry()
  };

  getCountry = async () => {
    const { usedCountries, setCurrentCountry, updateUsedCountries } = this.props
    let randomNumber = Math.floor(Math.random() * (149 - 1) + 1);
    const currentCountry = await Fetch.fetchCorrectCountry(randomNumber, usedCountries); //sending this array to use in a check
    
    setCurrentCountry(currentCountry)
    updateUsedCountries(currentCountry.name)
  }

//didn't touch point system...
  compilePoints = (newPoints) => {
    const totalPoints = this.state.totalPoints + newPoints
    this.setState({ totalPoints });
  };

  render() {
    const { totalPoints, countryOptions, correctCountry } = this.state;
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' render={() => {
            return <Game 
                      compilePoints={this.compilePoints} 
                      correctChoice={correctCountry}
                      choices={countryOptions}
                      totalPoints={totalPoints}
                    />
          }} />
          <Route path='/login' render={() => {
            return <Login />
          }} />
          <Route path='/account' render={() => {
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

export default connect(mapStateToProps, mapDispatchToProps)(App);

