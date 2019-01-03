import React from 'react';
import { shallow, mount } from 'enzyme';
import Account from '../index';

describe('Account', () => {
  let wrapper;
  let mockUser;
  let signOut;

  beforeEach(() => {
    mockUser = {name: 'doug' }
    wrapper = shallow(<Account user={mockUser} signOut={jest.fn()}/>)
  });

  it('should render like the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});