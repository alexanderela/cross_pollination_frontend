import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Game from '../Game';
import Account from '../Account';
import Login from '../Login';
import Results from '../Results';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' render={() => {
            return <Game />
          }} />
          <Route path='/login' render={() => {
            return <Login />
          }} />
          <Route path='/account' render={() => {
            return <Account />
          }} />
          <Route path='/results' render={() => {
            return <Results />
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
