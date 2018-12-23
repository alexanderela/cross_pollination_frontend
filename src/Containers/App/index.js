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
// import allCountries from '../../utilities/allCountriesImagesObject.js'

export class App extends Component {
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

    // let randomNumber = Math.floor(Math.random() * (162 - 86) + 86);
    // const correctCountry = await API.fetchCorrectCountry(randomNumber);
    // const { usedCountries } = this.state;
      
    // this.props.setCountryNames(countryNames);
    // const usedCountriesUpdated = [...usedCountries, correctCountry[0].name]

    //  this.setState({
    //    correctCountry: correctCountry[0],
    //    usedCountries: usedCountriesUpdated
    //  }, () => this.createOptions());
   };

   //change createOptions above to checkForUsedCountries, so that first, checks used countries

  // checkForUsedCountries = () => {
  //   let unusedCountries = [];
  //   const { usedCountries } = this.state;

  //   if(usedCountries.length) {
  //     unusedCountries = usedCountries.reduce((filteredCountries, country) => {
  //       if (!usedCountries.includes(country)) {
  //         filteredCountries.push(country);
  //       }
  //       return filteredCountries;
  //     }, []);   
  //   }
    
  //   this.createOptions();
  //   return unusedCountries;
  // };

  createOptions = () => {
    let countryOptionsPrelim = [];
    const { correctCountry } = this.state;
    const { countryNames } = this.props

    countryOptionsPrelim.push(correctCountry.name)
    
    while(countryOptionsPrelim.length < 4) {
      countryOptionsPrelim.push(countryNames[Math.floor(Math.random() * countryNames.length - 1)]);
    };

    const countryOptions = this.shuffleArray(countryOptionsPrelim)

    this.setState({
      countryOptions
    });
   };

shuffleArray = (array) => {
  let m = array.length, t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

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

export const mapStateToProps = ({ user, countryNames }) => ({ user, countryNames });

export const mapDispatchToProps = (dispatch) => ({
  setCountryNames: (countryNames) => dispatch(setCountryNames(countryNames))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
