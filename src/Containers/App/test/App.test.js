import React from 'react';
import ReactDOM from 'react-dom';
import {App, mapStateToProps, mapDispatchToProps} from '../index';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  let wrapper;
  let mockNewPoints;
  let mockCorrectCountry;
  let mockCountryNames;

  beforeEach(() => {
    mockNewPoints = 3;
    mockCorrectCountry = {
        id: 23,
        name: 'Sweden',
        flag: './images/flags/Sweden.png',
        country_outline: './images/outlines/Sweden.png',
      };

    mockCountryNames = ['Mexico', 'Hungary', 'Ireland', 'Sweden']

    wrapper = shallow(<App 
                        countryNames={mockCountryNames}
                        user={{id: 1, loggedIn: true}}
                        setCountryNames={() => {}}
                      />)
  });

 it('should render like the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  describe('checkForUsedCountries', () => {
    it.skip('should return an array of countries not already used', () => {
      // wrapper.instance().selectCorrectCountry(mockCountries);
      wrapper.setState({ 
        correctCountry: mockCorrectCountry,
        usedCountries: mockCorrectCountry.name
      })
      console.log('FUCK ' + wrapper.state().usedCountries)
      const updatedCountryOptions = wrapper.instance().checkForUsedCountries();
      expect(updatedCountryOptions.length).toEqual(3);
    });

    it.skip('should invoke createOptions', () => {
      wrapper.instance().createOptions = jest.fn();
      wrapper.instance().checkForUsedCountries(mockCountryNames);
      expect(wrapper.instance().createOptions).toHaveBeenCalled();
    });
  });
  
  describe('selectCorrectCountry', () => {
    it.skip('should set a country object to state', () => {
      wrapper.instance().selectCorrectCountry(mockCountries);

      const actual = Object.keys(wrapper.state().correctCountry);
      const expected = ['name', 'flag', 'outline', 'questions']

      expect(actual).toEqual(expected);
    });

    it.skip('should add countries already guessed to state', () => {
      wrapper.instance().selectCorrectCountry(mockCountries);
      expect(wrapper.state().usedCountries.length).not.toEqual(0);
    });
  });

  describe('compilePoints', () => {
    it.skip('should set points to state', () => {
      expect(wrapper.state().totalPoints).toEqual(0);
      wrapper.instance().compilePoints(mockNewPoints);
      expect(wrapper.state().totalPoints).toEqual(3);
    });
  });

  describe('mapStateToProps', () => {
    it.skip('should create the correct props object', () => {
    });
  });
  
  describe('mapDispatchToProps', () => {
    it.skip('should map a key of setCountries', () => {
    });
    
    it.skip('setCountries should call dispatch', () => {
    });
  });
});

