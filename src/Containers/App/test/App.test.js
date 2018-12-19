import React from 'react';
import ReactDOM from 'react-dom';
import App from '../index';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('should display a randomly selected country', () => {
  });

  it('should render like the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })  

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
})  

