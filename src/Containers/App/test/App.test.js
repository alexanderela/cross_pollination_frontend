import React from 'react';
import ReactDOM from 'react-dom';
import App from '../index';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  let wrapper;
  let mockNewPoints;
  let mockCountries;

  beforeEach(() => {
    mockNewPoints = 3;
    mockCountries = [
      {
        name: 'Mexico',
        flag: './images/flags/Mexico.png',
        outline: './images/outlines/Mexico.png',
        questions:
          ['Tabasco Hoy',
            'El Financiero & The Oaxaca Times',
            'Oaxaca,Durango,Nayarit']
      },
      {
        name: 'Hungary',
        flag: './images/flags/Hungary.png',
        outline: './images/outlines/Hungary.png',
        questions:
          ['Magyar Nemzet',
            'Its first king is known in English as St. Stephen & locally as Szent Istvan',
            'Nograd,Pest,Somogy']
      },
      {
        name: 'Ireland',
        flag: './images/flags/Ireland.png',
        outline: './images/outlines/Ireland.png',
        questions:
          ['The Connaught Telegraph & The Galway Advertiser',
            'In this country\'s parliament, the Dail has 166 seats, the Seanad, 60']
      },
      {
        name: 'Sweden',
        flag: './images/flags/Sweden.png',
        outline: './images/outlines/Sweden.png',
        questions:
          ['Svenska Dagbladet & Sundsvalls Tidning',
            'Ostergotland,Vasterbotten,Uppsala']
      }
    ];

    wrapper = shallow(<App />)
  });

  it('should display a randomly selected country', () => {
  });

  it('should render like the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  describe('createOptions', () => {
    it('should invoke selectCorrectCountry', () => {
      wrapper.instance().selectCorrectCountry = jest.fn();
      wrapper.instance().createOptions();
      expect(wrapper.instance().selectCorrectCountry).toHaveBeenCalled();
    });

    it('should set an array of 4 countries to state', () => {
      wrapper.instance().createOptions();
      expect(wrapper.state().countryOptions.length).toEqual(4);
    });
  });
  
  describe('selectCorrectCountry', () => {
    it.skip('should set a country object to state', () => {
      wrapper.instance().selectCorrectCountry(mockCountries);
      expect(wrapper.state().correctCountry).not.toEqual({});
    });
  });

  describe('compilePoints', () => {
    it('should set points to state', () => {
      expect(wrapper.state().totalPoints).toEqual(0);
      wrapper.instance().compilePoints(mockNewPoints);
      expect(wrapper.state().totalPoints).toEqual(3);
    });
  });

  describe('mapStateToProps', () => {
    it('should create the correct props object', () => {
    });
  });
  
  describe('mapDispatchToProps', () => {
    it('should map a key of setCountries', () => {
    });
    
    it('setCountries should call dispatch', () => {
    });
  });
});

