import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import {Game, mapStateToProps, mapDispatchToProps} from '../index';
// import { wrap } from 'module';

describe('Game', () => {
  let wrapper;
  let mockCorrectCountry;
  let addPoints;
  let mockEvent;

  beforeEach(() => {
    mockCorrectCountry = {
                            "id": 46,
                            "name": "The Netherlands",
                            "flag": "/images/flags/netherlands.png",
                            "country_outline": "/images/outlines/netherlands.png",
                            "created_at": "2018-12-28T12:02:21.458Z",
                            "updated_at": "2018-12-28T12:02:21.458Z",
                            "multipleChoice": [
                              "Seychelles",
                              "Malawi",
                              "Cambodia",
                              "The Netherlands"
                            ],
                            "facts": {
                              "id": 106,
                              "country_fact": "Numerous dikes cover the coast of Ijsselmeer in this country",
                              "country_id": 46,
                              "created_at": "2018-12-28T12:02:21.951Z",
                              "updated_at": "2018-12-28T12:02:21.951Z"
                            }
                          };

    mockEvent = { target: { innerText: 'The Netherlands' } };

    wrapper = shallow(<Game 
                        compilePoints={jest.fn()}  
                        totalPoints={10}
                        getCountry={jest.fn()}
                        currentCountry={mockCorrectCountry}
                      />);
    
  });

  it('should render like the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('checkAnswer', () => {
    it('should set state if the answer is correct', () => {
      wrapper.setState({ status: '' });
      wrapper.instance().addPoints = jest.fn()

      wrapper.instance().checkAnswer(mockEvent);
      expect(wrapper.state().status).toEqual('Correct');
    });

    it('should invoke addPoints if answer is correct', () => {
      wrapper.instance().addPoints = jest.fn()

      wrapper.instance().checkAnswer(mockEvent);
      expect(wrapper.instance().addPoints).toHaveBeenCalled
    })

    it('should set state if the answer is incorrect', () => {
      wrapper.setState({ status: '' });
      mockEvent = { target: { innerText: 'France' } };

      wrapper.instance().checkAnswer(mockEvent);
      expect(wrapper.state().status).toEqual('Wrong');
    });
  });

  describe('giveHint', () => {
    it('should set state to show a hint', () => {
      wrapper.setState({ showHint: false });
      wrapper.instance().giveHint()
      expect(wrapper.state().showHint).toEqual(true)     
    })

    it.skip('should set state if user requests a hint', () => {
      wrapper.setState({ hint: '', hintsUsed: 0 });
      wrapper.instance().giveHint()
      expect(wrapper.state().hint).toEqual('fact')
    });

    it.skip('should set state if user requests a second hint', () => {
      wrapper.setState({ hint: '', hintsUsed: 1 });
      wrapper.instance().giveHint()
      expect(wrapper.state().hint).toEqual('outline')
    });

    it.skip('should exhaust all hints after 2 hints are given', () => {
      wrapper.setState({ hint: '', hintsUsed: 2 });
      wrapper.instance().giveHint()
      expect(wrapper.state().hint).toEqual('out of hints')
    });

    it.skip('should set new state with updated hintsUsed and pointsPossible counts', () => {
      wrapper.setState({ 
                         hint: '', 
                         hintsUsed: 0, 
                         pointsPossible: 3 
                       });

      wrapper.instance().giveHint()
      expect(wrapper.state().hintsUsed).toEqual(1)
      expect(wrapper.state().pointsPossible).toEqual(2)
    })
  });

  describe('showButtons', () => {
    it.skip('should show buttons if there are country choice options', () => {})
  })

  describe('closeResults', () => {
    it.skip('should close results and reset for next country', () => {})
  })  

  describe('addPoints', () => {
    it.skip('should set state upon correct guess', () => {
      wrapper.instance().addPoints();
      expect(wrapper.state()).toEqual({totalPoints: 13})
    })

    it.skip('should set state upon incorrect guess', () => {})
  })

  describe('hideHint', () => {
    it.skip('should hide each hint', () => {})
  })
  
 describe('getCountryFlagPath', () => {
    it.skip('should create complete path for country flag', () => {})
  })

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