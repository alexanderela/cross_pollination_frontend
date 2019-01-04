import React from 'react';
import { shallow, mount } from 'enzyme';
import { Account } from '../index';

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
});