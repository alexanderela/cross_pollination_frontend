import React from 'react';
import { shallow, mount } from 'enzyme';
import { Account, mapStateToProps, mapDispatchToProps } from '../index';

describe('Account', () => {
  let wrapper;
  let mockUser;
  let signOut;
  let mockSignOut

  beforeEach(() => {
    mockSignOut = jest.fn()
    mockUser = {
            id: 2,
            name: 'rtg',
            loggedIn: true,
            email: 'alex@turing.com'
           }
    wrapper = shallow(<Account 
                        user={mockUser} 
                        signOut={mockSignOut}
                      />)
  });

  it('should render like the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('changeRoute', () => {
    it('should invoke forceUpdate', () => {
      wrapper.instance().forceUpdate = jest.fn()
      wrapper.instance().changeRoute()
      expect(wrapper.instance().forceUpdate).toHaveBeenCalled()
    })
  })

  describe('logoutUser', () => {
    it('should invoke signOut', () => {
      wrapper.instance().logoutUser()
      expect(wrapper.instance().props.signOut).toHaveBeenCalledWith({})
    })
  })

  describe('mapStateToProps', () => {
    it('should create the correct props object', () => {
      let mockState = {
        user: {id: 2, user: 'Bob', email: "bob@bob.com", loggedIn: true}
      }
      const  expected = {
        user: {id: 2, user: 'Bob', email: 'bob@bob.com', loggedIn: true}
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)      
    })
  })

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn()

    it('should map a key of signOut', () => {
      const dispatchedProps = mapDispatchToProps(mockDispatch)
      expect(dispatchedProps.signOut).toBeDefined()
    })

    it('should have signOut call dispatch', () => {
      const mockUser = {id: 2, user: 'Bob', email: 'bob@bob.com', loggedIn: true}
      const dispatchedProps = mapDispatchToProps(mockDispatch)
      dispatchedProps.signOut(mockUser)
      expect(mockDispatch).toHaveBeenCalled()
    })
  })
});