import React from 'react';
import { shallow, mount } from 'enzyme';
import Results from '../index';

describe('Results', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Results />)
  });
  
    it('should render like the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

  it('should post if the guess was correct', () => {
  });

  it('should post if the guess was incorrect', () => {
  });

  it('should show the amount of points gained from last session', () => {
  });

  it('should show the cumulative amount of points', () => {
  })

});