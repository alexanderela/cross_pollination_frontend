import React from 'react';
import { shallow, mount } from 'enzyme';
import Account from '../index';

describe('Account', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Account />)
  });

  it('should render like the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});