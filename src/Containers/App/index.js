import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Game from '../Game';
import Account from '../Account';
import Login from '../Login';
import './App.scss';
import mockData from '../../mockData/mockData';
import * as API from '../../utilities/API';
import { connect } from 'react-redux';
import { setCountryNames } from '../../actions/countryActions';
import countryNames from '../../utilities/countryNames';

class App extends Component {
  constructor() {
    super();
    this.state = {
      totalPoints: 0,
      usedCountries: [],
      countryOptions: [],
      correctCountry: {},
    };
  };

  async componentDidMount() {
    let randomNumber = Math.floor(Math.random() * 78 - 1);
    const correctCountry = await API.fetchCorrectCountry(randomNumber);

     this.setState({
       correctCountry: correctCountry[0]
     }
    //  ,  () => this.createOptions());
     )

    this.props.setCountryNames(countryNames);
   };

  createOptions = () => {
    let countryOptions = [];
    const { countries } = this.state;

    while(countryOptions.length < 4) {
      countryOptions.push(countries[Math.floor(Math.random() * countries.length - 1)]);
    };

    this.setState({
      countryOptions
    }, () => this.checkForUsedCountries(this.state.countryOptions));
   };

  checkForUsedCountries = (countryOptions) => {
    const { usedCountries } = this.state;
    const unusedCountries = countryOptions.reduce((filteredCountries, country) => {
      if (!usedCountries.includes(country)) {
        filteredCountries.push(country);
      }
      return filteredCountries;
    }, []);
    
    this.selectCorrectCountry(unusedCountries);
    return unusedCountries;
  };

  selectCorrectCountry = (countryOptions) => {
    const { usedCountries } = this.state;
    const correctCountry = countryOptions[Math.floor(Math.random() * 4)];

    const updatedCountries = [...usedCountries, correctCountry]
    // this.setState({ 
    //   correctCountry,
    //   usedCountries: updatedCountries,
    // });
  };

  compilePoints = (newPoints) => {
    const totalPoints = this.state.totalPoints + newPoints
    this.setState({ totalPoints });
  };

  render() {
    const { totalPoints, countries } = this.state;
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' render={() => {
            return <Game compilePoints={this.compilePoints} />
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

export const mapStateToProps = ({ user, countryNames }) => ({ user, countryNames });

export const mapDispatchToProps = (dispatch) => ({
  setCountryNames: (countryNames) => dispatch(setCountryNames(countryNames))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
