import React from 'react';
import { shallow, mount } from 'enzyme';
import Game from '../index';
import { wrap } from 'module';

describe('Game', () => {
  let wrapper;
  let mockCountries;
  let mockCorrectCountry;
  let addPoints;

  beforeEach(() => {
    mockCountries = [
      {
        name: 'Mexico',
        flag: './images/flags/Mexico.png',
        outline: './images/outlines/Mexico.png',
        questions:
          ['Tabasco Hoy',
            'El Financiero & The Oaxaca Times',
            'Oaxaca,Durango,Nayarit']
      },
      {
        name: 'Hungary',
        flag: './images/flags/Hungary.png',
        outline: './images/outlines/Hungary.png',
        questions:
          ['Magyar Nemzet',
            'Its first king is known in English as St. Stephen & locally as Szent Istvan',
            'Nograd,Pest,Somogy']
      },
      {
        name: 'Ireland',
        flag: './images/flags/Ireland.png',
        outline: './images/outlines/Ireland.png',
        questions:
          ['The Connaught Telegraph & The Galway Advertiser',
            'In this country\'s parliament, the Dail has 166 seats, the Seanad, 60']
      },
      {
        name: 'Sweden',
        flag: './images/flags/Sweden.png',
        outline: './images/outlines/Sweden.png',
        questions:
          ['Svenska Dagbladet & Sundsvalls Tidning',
            'Ostergotland,Vasterbotten,Uppsala']
      }
    ];

    mockCorrectCountry = {
      name: 'Sweden',
      flag: './images/flags/Sweden.png',
      outline: './images/outlines/Sweden.png',
      questions:
        ['Svenska Dagbladet & Sundsvalls Tidning',
          'Ostergotland,Vasterbotten,Uppsala']
    };

    wrapper = shallow(<Game 
                        compilePoints={jest.fn()} 
                        correctChoice={mockCorrectCountry} 
                        choices={mockCountries} 
                        totalPoints={10}
                        addPoints={jest.fn()}
                        getCountry={jest.fn()}
                      />);
  });

  it('should render like the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('checkAnswer', () => {
    it.skip('should set state if the answer is correct', () => {
      wrapper.instance().checkAnswer('Sweden');
      expect(wrapper.state().correct).toEqual(true);
    });

    it.skip('should set state if the answer is incorrect', () => {
      wrapper.instance().checkAnswer('Hungary');
      expect(wrapper.state().incorrect).toEqual(true);
    });
  });

  describe('giveHint', () => {
    it.skip('should set state if user requests a hint', () => {
      wrapper.instance().giveHint();
      expect(wrapper.state().hint).toEqual(mockCorrectCountry.questions[0]);
    });

    it.skip('should set state if user requests a second hint', () => {
      wrapper.instance().giveHint();
      wrapper.instance().giveHint();
      expect(wrapper.state().hint).toEqual(mockCorrectCountry.outline);
    });

    it.skip('should exhaust all hints after 2 hints are given', () => {
      wrapper.instance().giveHint();
      wrapper.instance().giveHint();
      wrapper.instance().giveHint();
      expect(wrapper.state().hintsExhausted).toEqual(true);
    });
  });

  describe('addPoints', () => {
    it.skip('should add 3 points if the answer was correct on the first try', () => {
      wrapper.instance().addPoints();
      expect(wrapper.state()).toEqual({totalPoints: 13})
    })
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