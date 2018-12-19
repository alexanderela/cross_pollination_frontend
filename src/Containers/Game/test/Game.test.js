import React from 'react';
import { shallow, mount } from 'enzyme';
import Game from '../index';

describe('Game', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Game />)
  });

  it('should render like the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it('should display a randomly selected country', () => {
    
  // })

  describe('checkAnswer', () => {
    it('should set state if the answer is correct', () => {
    });

    it('should set state if the answer is incorrect', () => {
    });
  });

  describe('giveHint', () => {
    it('should ', () => {});

  });

  describe('mapStateToProps', () => {
    it('should create the correct props object', () => {
    });
  });

  describe('mapDispatchToProps', () => {
    it('should map a key of successfulLogin', () => {
    });

    it('should map a key of signOut', () => {
    });

    it('successfulLogin should call dispatch', () => {
    });

    it('signOut should call dispatch', () => {
    });
  });
});