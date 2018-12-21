import React from 'react';
import { shallow, mount } from 'enzyme';
import Hint from '../index';

describe('Hint', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Hint />)
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