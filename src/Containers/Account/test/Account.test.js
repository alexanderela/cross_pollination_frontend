import React from 'react'
import { shallow, mount } from 'enzyme'
import Account from '../index'

describe('Account', () => {
<<<<<<< HEAD
  let wrapper;
  let mockUser;
  let signOut;

  beforeEach(() => {
    mockUser = {name: 'doug' }
    wrapper = shallow(<Account user={mockUser} signOut={jest.fn()}/>)
  });
=======
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Account />)
  })
>>>>>>> Add styling for Account and login placeholders

  it('should render like the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
