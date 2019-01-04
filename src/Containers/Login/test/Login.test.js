import React from 'react';
import { shallow, mount } from 'enzyme';
import { Login, mapStateToProps, mapDispatchToProps } from '../index';
import { fetchUser } from '../../../thunks/user'

describe('Login', () => {
  let alex;
  let wrapper;
  let mockEvent;
  let mockFunc;
  let mockUser;
  let expected;
  
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

  describe('createUser', () => {
    it('should should set state upon invocaton of createUser', () => {
      wrapper.setState({ createUser: false })
      wrapper.instance().createUser()
      expect(wrapper.state().createUser).toEqual(true)
    });
  });
  
  describe('loginUser', () => {
    it('should call fetchUser with the correct parameters if createUser is truthy', () => {
      wrapper.setState({ 
                          createUser: true,
                          name: 'Alex',
                          email: 'alex@123.com',
                          password: '123' 
                        })
      wrapper.instance().loginUser(mockEvent)
      expect(wrapper.instance().props.fetchUser).toHaveBeenCalledWith(null, 'alex@123.com', '123')
    });

    it('should call fetchUser with the correct parameters if createUser is falsy', () => {
      wrapper.setState({ 
                          createUser: false,
                          name: 'Alex',
                          email: 'alex@123.com',
                          password: '123' 
                        })
      wrapper.instance().loginUser(mockEvent)
      expect(wrapper.instance().props.fetchUser).toHaveBeenCalledWith('Alex', 'alex@123.com', '123')
    });

  });

  describe('handleChange', () => {
    it('should set state upon invocaton of handleChange', () => {
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state().name).toEqual('Alex')
    });
  });

  describe('expandCredentials', () => {
    it('should should set state upon invocaton of expandCredentials', () => {
      wrapper.setState({ emailCredentials: false })
      wrapper.instance().expandCredentials()
      expect(wrapper.state().emailCredentials).toEqual(true)
    });
  });

  describe('closeCredentials', () => {
    it('should should set state upon invocaton of closeCredentials', () => {
      wrapper.setState({ emailCredentials: true })
      wrapper.instance().closeCredentials()
      expect(wrapper.state().emailCredentials).toEqual(false)
    });
  });
  
  describe('changeFormPurpose', () => {
    it('should should set state upon invocaton of changeFormPurpose', () => {
      wrapper.setState({ formLogin: true })
      wrapper.instance().changeFormPurpose()
      expect(wrapper.state().formLogin).toEqual(false)
    });
  });

  describe('handleSubmit', () => {
    it('should invoke loginUser if loginAttempt is successful', async () => {
      wrapper.instance().loginUser = jest.fn()
      await wrapper.instance().handleSubmit(mockEvent);
      expect(wrapper.instance().loginUser).toHaveBeenCalled();
    });

    it('should return a user if component is mounted', () => {
      wrapper.setState({ _isMounted: true })
      const submit = wrapper.instance().handleSubmit(mockEvent)
      expect(submit).toBeDefined()
    })
  });
  
  describe('clearInputs', () => {
    it('should clear inputs on submit', () => {
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