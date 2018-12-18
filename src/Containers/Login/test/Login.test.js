import React from 'react';
import { shallow, mount } from 'enzyme';
import Login from '../index';

describe('Login', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Login />)
  });
  
    it('should render like the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
  describe('handleChange', () => {
    it('should set state upon invocaton of handleChange', () => {
    });
  });

  describe('submitLogin', () => {
    it('should invoke loginUser if loginAttempt is successful', () => {
    });

    it('should set errorState if loginAttempt fails', () => {
    });
  });

  describe('createNewUser', () => {
    it('should alert the user if the account already exists', () => {
    });

    it('should set state for "create" or "error" if create state is false and fetchResponse is successful', () => {
    });

    it('should should set "error" state if "create" state is true and fetch response fails', () => {
    });

    it('should clear inputs if "create" state is true and fetch response fails', () => {
    });
  });
  
  describe('newUserResponse', () => {
    it('should invoke API.createUser upon invocation', () => {
    });
  });
  
  describe('clearInputs', () => {
    it('should clear inputs', () => {
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

it('should', () => {});