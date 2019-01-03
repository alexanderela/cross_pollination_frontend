import React from 'react'
import ReactDOM from 'react-dom'
import { App, mapStateToProps, mapDispatchToProps } from '../index'
import { shallow, mount } from 'enzyme'
import * as Fetch from '../../../utilities/Fetch'
import { setCurrentCountry } from '../../../actions/countryActions'
import { updateUsedCountries } from '../../../actions/usedCountryActions'

describe('App', () => {
  let wrapper
  let mockNewPoints
  let mockUsedCountries
  let mockCountry

  beforeEach(() => {
    mockNewPoints = 3

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

    wrapper = shallow(<App 
                        currentCountry={mockCountry}
                        user={{id: 1, loggedIn: true}}
                        usedCountries={mockUsedCountries}
                        setCurrentCountry = {jest.fn().mockImplementation(() => {})}
                        updateUsedCountries = {jest.fn().mockImplementation(() => {})}
                        getCurrentCountry = {jest.fn().mockImplementation(() => {})}
                      />)

    Math.random = jest.fn().mockImplementation(() => { return .4})
  });

  it('should render like the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('getCountry', () => {
    beforeEach(() => {
      Fetch.fetchCorrectCountry = jest.fn().mockImplementation(() => {
        return mockCountry
      })
    })

    it('should call fetchCorrectCountry and return a country object', () => {
      wrapper.instance().getCountry()

      expect(Fetch.fetchCorrectCountry).toHaveBeenCalled()
      expect(Fetch.fetchCorrectCountry).toHaveBeenCalledWith(
        79,
        mockUsedCountries
      )
      expect(Fetch.fetchCorrectCountry).toHaveReturnedWith(mockCountry)
    })

    // it('should call a setCurrentCountry', () => {
    //   wrapper.instance().getCountry()

    //   expect(wrapper.props().setCurrentCountry).toHaveBeenCalledWith(mockCountry)
    // })

    // it('should call a updateUsedCountries', () => {

    //   const spy = jest.spyOn(wrapper.props(), 'updateUsedCountries');
    //   const isCalled = wrapper.props().updateUsedCountries;
    //   wrapper.instance().getCountry()

    //   expect(wrapper.props().updateUsedCountries).toHaveBeenCalled()

    //   spy.mockRestore();
    // })
  });

  describe('compilePoints', () => {
    it('should set points to state', () => {
      expect(wrapper.state().totalPoints).toEqual(0)
      wrapper.instance().compilePoints(mockNewPoints)
      expect(wrapper.state().totalPoints).toEqual(3)
    })
  })

  describe('mapStateToProps', () => {
    let mockState = {
      user: { user: 'Bob', email: 'bob@bob.com' },
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
      const expected = { user: 'Bob', email: 'bob@bob.com' }

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

    it('should call dispatch with setCurrentCountry action when setCurrentCountry is called', () => {
      const actionToDispatch = setCurrentCountry(mockCountry)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setCurrentCountry(mockCountry)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should call dispatch with updateUsedCountries action when updateUsedCountries is called', () => {
      const actionToDispatch = updateUsedCountries(mockCountry.name)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.updateUsedCountries(mockCountry.name)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})
