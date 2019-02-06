import React from 'react'
import ReactDOM from 'react-dom'
import { App, mapStateToProps, mapDispatchToProps } from '../index'
import { shallow, mount } from 'enzyme'
import * as Fetch from '../../../utilities/Fetch'
import { getCurrentCountry } from '../../../Thunks/countries.js';

describe('App', () => {
  let wrapper
  let mockUsedCountries
  let mockCountry
  let mockGetCurrentCountry

  beforeEach(() => {
    mockUsedCountries = ['Mexico', 'Hungary', 'Ireland', 'Sweden']

    mockCountry = {
      "id": 79,
      "name": "Turkmenistan",
      "flag": "/images/flags/turkmenistan.png",
      "country_outline": "/images/outlines/turkmenistan.png",
      "created_at": "2018-12-23T16:48:16.005Z",
      "updated_at": "2018-12-23T16:48:16.005Z",
      "multipleChoice": [
        "France",
        "Nigeria",
        "Turkmenistan",
        "Japan"
      ]
    };

    mockGetCurrentCountry = jest.fn()

    wrapper = shallow(<App 
                        currentCountry={mockCountry}
                        user={{id: 1, loggedIn: true}}
                        usedCountries={mockUsedCountries}
                        getCurrentCountry={mockGetCurrentCountry}
                      />)
  });

  Math.random = jest.fn().mockImplementation(() => { return .4})

  it('should render like the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('getCountry', () => {
    it('should call getCurrentCountry with', async () => {
      await wrapper.instance().getCountry()
      expect(mockGetCurrentCountry).toHaveBeenCalled()
    })
  })

  describe('mapStateToProps', () => {
    let mockState = {
      user: {id: 2, user: 'Bob', email: "bob@bob.com", loggedIn: true},
      currentCountry: {
        id: 79,
        name: 'Turkmenistan',
        flag: '/images/flags/turkmenistan.png',
        country_outline: '/images/outlines/turkmenistan.png',
        multipleChoice: ['France', 'Nigeria', 'Turkmenistan', 'Japan'],
      },
      usedCountries: ['Mexico', 'Hungary', 'Ireland', 'Sweden'],
    }

    it('should return a user in the props object', () => {
      const expected = {id: 2, user: 'Bob', email: "bob@bob.com", loggedIn: true}
        
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps.user).toEqual(expected)
    })

    it('should return a currentCountry in the props object', () => {
      const expected = {
        id: 79,
        name: 'Turkmenistan',
        flag: '/images/flags/turkmenistan.png',
        country_outline: '/images/outlines/turkmenistan.png',
        multipleChoice: ['France', 'Nigeria', 'Turkmenistan', 'Japan'],
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps.currentCountry).toEqual(expected)
    })
    it('should return a usedCountries array in the props object', () => {
      const expected = ['Mexico', 'Hungary', 'Ireland', 'Sweden']

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps.usedCountries).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn()

    it('should map a key of getCurrentCountry', () => {
      const dispatchedProps = mapDispatchToProps(mockDispatch);
      expect(dispatchedProps.getCurrentCountry).toBeDefined();
    })

    it('should call dispatch with getCurrentCountry action when getCurrentCountry is called', () => {
      const dispatchProps = mapDispatchToProps(mockDispatch)
      dispatchProps.getCurrentCountry(79, mockUsedCountries)
      expect(mockDispatch).toHaveBeenCalled()
    })
  });
});