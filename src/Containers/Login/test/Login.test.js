import React from 'react';
import { shallow, mount } from 'enzyme';
import Login from '../index';

describe('Login', () => {
  let wrapper;
  let mockEvent;
  let mockFunc;
  
  beforeEach(() => {
    mockFunc = jest.fn();
    mockEvent = {
      preventDefault: mockFunc,
      target: {
        name: 'name',
        value: 'Alex'
      }
    }
    wrapper = shallow(<Login loginUser={jest.fn()} />);
  });
  
    it('should render like the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
  describe('handleChange', () => {
    it.skip('should set state upon invocaton of handleChange', () => {
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state().name).toEqual('Alex')
    });
  });

  describe('submitLogin', () => {
    it.skip('should invoke loginUser if loginAttempt is successful', async () => {
      await wrapper.instance().submitLogin(mockEvent);
      expect(wrapper.instance().props.loginUser).toHaveBeenCalled();
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
    it.skip('should clear inputs on submit', () => {
      wrapper.setState({
        name: 'Bruce',
        email: 'Ela',
        password: 'Rau',
      });
      wrapper.instance().clearInputs();
      expect(wrapper.state().name).toEqual('');
      expect(wrapper.state().email).toEqual('');
      expect(wrapper.state().password).toEqual('');
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