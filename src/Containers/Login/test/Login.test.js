import React from 'react';
import { shallow, mount } from 'enzyme';
import { Login, mapStateToProps, mapDispatchToProps } from '../index';
import { fetchUser } from '../../../thunks/user'

describe('Login', () => {
  let wrapper;
  let mockEvent;
  let mockFunc;
  let mockUser;
  
  beforeEach(() => {
    mockFunc = jest.fn();
    mockEvent = {
      preventDefault: mockFunc,
      target: {
        name: 'name',
        value: 'Alex'
      }
    }

    mockUser = {
                id: 2,
                name: 'rtg',
                loggedIn: true,
                email: 'alex@turing.com'
               }

    wrapper = shallow(<Login
                        fetchUser={jest.fn()}
                        loading={'true'}
                        user={mockUser}
                      />);
  });
  
    it('should render like the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
  describe('handleChange', () => {
    it('should set state upon invocaton of handleChange', () => {
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state().name).toEqual('Alex')
    });
  });

  describe('handleSubmit', () => {
    it.skip('should invoke loginUser if loginAttempt is successful', async () => {
      await wrapper.instance().handleSubmit(mockEvent);
      expect(wrapper.instance().loginUser).toHaveBeenCalled();
    });
  });

  describe('createUser', () => {
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
      let mockState = {
        user: {id: 2, user: 'Bob', email: "bob@bob.com", loggedIn: true},
        loading: 'resolved'
      }
      const  expected = {
        user: {id: 2, user: 'Bob', email: 'bob@bob.com', loggedIn: true},
        loading: 'resolved'
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    });

  });
  
  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn()

    it('should map a key of fetchUser', () => {
      const dispatchedProps = mapDispatchToProps(mockDispatch)
      expect(dispatchedProps.fetchUser).toBeDefined()
    });
    
    it('should have fetchUser call dispatch', () => {
      const mockUser = { name: 'Alex', email: 'alex@123.com', password: '123'}

      const dispatchedProps = mapDispatchToProps(mockDispatch)
      dispatchedProps.fetchUser(mockUser)

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});