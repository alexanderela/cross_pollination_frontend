import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Game from '../Game';
import Account from '../Account';
import Login from '../Login';
import './App.scss';
import mockData from '../../mockData/mockData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      totalPoints: 0,
      usedCountries: [],
      countries: [],
      countryOptions: [],
      correctCountry: {},
    };
  };

  componentDidMount() {
     this.setState({
       countries: mockData
     }, () => this.createOptions());
   };

  createOptions = () => {
    let countryOptions = [];
    const { countries } = this.state;

    while(countryOptions.length < 4) {
      countryOptions.push(countries[Math.floor(Math.random() * countries.length - 1)]);
    };

    this.setState({
      countryOptions
    }, () => this.selectCorrectCountry(this.state.countryOptions));
   }

  selectCorrectCountry = (countryOptions) => {
    const { usedCountries } = this.state;
    const correctCountry = countryOptions[Math.floor(Math.random() * 4)];

    const updatedCountries = [...usedCountries, correctCountry]
    this.setState({ 
      correctCountry,
      usedCountries: updatedCountries,
    });
  }

  compilePoints = (newPoints) => {
    const totalPoints = this.state.totalPoints + newPoints
    this.setState({ totalPoints });
  };

  render() {
    const { totalPoints } = this.state;
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

export default App;
