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

  async componentDidMount() {
    this.setState({
      countries: mockData
    });

    await this.createOptions();
  };

  createOptions = () => {

    this.selectCorrectCountry();
  };

  selectCorrectCountry = () => {
  };

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
