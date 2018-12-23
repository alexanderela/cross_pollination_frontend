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

//Moved all logic out of ComponentDidMount
  componentDidMount() {
    this.getCountry()
  };

//This function handles getting the country, after it filters through all the fetch/helpers, we send the country to the global store and alse update the used countries array to include this current country
  getCountry = async () => {
    const { usedCountries, setCurrentCountry, updateUsedCountries } = this.props
    //rolledback databases, currently 149 countries
    let randomNumber = Math.floor(Math.random() * (149 - 1) + 1);
    // const allCountries = await Fetch.fetchAllCountries()
    // console.log(allCountries)
    const currentCountry = await Fetch.fetchCorrectCountry(randomNumber, usedCountries); //sending this array to use in a check

    setCurrentCountry(currentCountry)//send to redux
    updateUsedCountries(currentCountry.name)//send to redux
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
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


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

