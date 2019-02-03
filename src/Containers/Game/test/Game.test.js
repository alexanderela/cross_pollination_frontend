import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import { Game, mapStateToProps, mapDispatchToProps } from '../index'

describe('Game', () => {
  let wrapper
  let mockCorrectCountry
  let addPoints
  let mockEvent
  let mockUser

  beforeEach(() => {
    mockCorrectCountry = {
      id: 46,
      name: 'The Netherlands',
      flag: '/images/flags/netherlands.png',
      country_outline: '/images/outlines/netherlands.png',
      created_at: '2018-12-28T12:02:21.458Z',
      updated_at: '2018-12-28T12:02:21.458Z',
      multipleChoice: ['Seychelles', 'Malawi', 'Cambodia', 'The Netherlands'],
      facts: {
        id: 106,
        country_fact:
          'Numerous dikes cover the coast of Ijsselmeer in this country',
        country_id: 46,
        created_at: '2018-12-28T12:02:21.951Z',
        updated_at: '2018-12-28T12:02:21.951Z',
      },
    }

    mockEvent = { target: { innerText: 'The Netherlands' } }

    mockUser = { id: 1, name: 'Ben', loggedIn: true }

    wrapper = shallow(
      <Game
        compilePoints={jest.fn()}
        totalPoints={10}
        getCountry={jest.fn()}
        currentCountry={mockCorrectCountry}
        user={mockUser}
      />
    )
  })

  it('should render like the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('checkAnswer', () => {
    it('should set state if the answer is correct', () => {
      wrapper.setState({ status: '' })
      wrapper.instance().addPoints = jest.fn()

      wrapper.instance().checkAnswer(mockEvent)
      expect(wrapper.state().status).toEqual('Correct')
    })

    it('should invoke addPoints if answer is correct', () => {
      wrapper.instance().addPoints = jest.fn()

      wrapper.instance().checkAnswer(mockEvent)
      expect(wrapper.instance().addPoints).toHaveBeenCalled
    })

    it('should set state if the answer is incorrect', () => {
      wrapper.setState({ status: '' })
      mockEvent = { target: { innerText: 'France' } }

      wrapper.instance().checkAnswer(mockEvent)
      expect(wrapper.state().status).toEqual('Wrong')
    })
  })

  describe('giveHint', () => {
    it('should set state to show a hint', () => {
      wrapper.setState({ showHint: false })
      wrapper.instance().giveHint()
      expect(wrapper.state().showHint).toEqual(true)
    })

    it('should set state if user requests a hint', () => {
      wrapper.setState({ hint: '', hintsUsed: 0 })
      wrapper.instance().giveHint()
      expect(wrapper.state().hint).toEqual('fact')
    })

    it('should set state if user requests a second hint', () => {
      wrapper.setState({ hint: '', hintsUsed: 1 })
      wrapper.instance().giveHint()
      expect(wrapper.state().hint).toEqual('outline')
    })

    it('should exhaust all hints after 2 hints are given', () => {
      wrapper.setState({ hint: '', hintsUsed: 2 })
      wrapper.instance().giveHint()
      expect(wrapper.state().hint).toEqual('out of hints')
      expect(wrapper.state().hintsExhausted).toEqual(true)
    })

    it('should set new state with updated hintsUsed and pointsPossible counts', () => {
      wrapper.setState({
        hint: '',
        hintsUsed: 0,
        pointsPossible: 3,
      })

      wrapper.instance().giveHint()
      expect(wrapper.state().hintsUsed).toEqual(1)
      expect(wrapper.state().pointsPossible).toEqual(2)
    })
  })

  describe('skipToNextFlag', () => {
    it('should invoke getCountry', () => {
      wrapper.instance().skipToNextFlag()
      expect(wrapper.instance().props.getCountry).toHaveBeenCalled()
    })
    
    it('', () => {})
  })

  describe('showButtons', () => {
    it('should show buttons if there are country choice options', () => {
      wrapper.instance().showButtons()

      expect(wrapper.find('.option-button')).toHaveLength(4)
    })
    it('should not show buttons if there are no country choice options', () => {
      mockCorrectCountry = {
        id: 46,
        name: 'The Netherlands',
        flag: '/images/flags/netherlands.png',
        country_outline: '/images/outlines/netherlands.png',
        created_at: '2018-12-28T12:02:21.458Z',
        updated_at: '2018-12-28T12:02:21.458Z',
        facts: {
          id: 106,
          country_fact:
            'Numerous dikes cover the coast of Ijsselmeer in this country',
          country_id: 46,
          created_at: '2018-12-28T12:02:21.951Z',
          updated_at: '2018-12-28T12:02:21.951Z',
        },
      }

      mockUser = { id: 1, name: 'Ben', loggedIn: true }

      wrapper = shallow(
        <Game
          compilePoints={jest.fn()}
          totalPoints={10}
          getCountry={jest.fn()}
          currentCountry={mockCorrectCountry}
          user={mockUser}
        />
      )

      wrapper.instance().showButtons()
      expect(wrapper.find('.option-button')).toHaveLength(0)
    })
  })

  describe('closeResults', () => {
    it('should close results and reset for next country', () => {
      wrapper.setState({
        hintsExhausted: true,
        hintsUsed: 1,
        pointsPossible: 2,
        status: 'Wrong',
      })

      wrapper.instance().closeResults()
      expect(wrapper.state().hintsExhausted).toEqual(false)
      expect(wrapper.state().hintsUsed).toEqual(0)
      expect(wrapper.state().pointsPossible).toEqual(3)
      expect(wrapper.state().status).toEqual('')
    })
  })

  describe('addPoints', () => {
    it('should set state upon correct guess', () => {
      wrapper.setState({
        pointsPossible: 3,
        totalPoints: 0,
        status: 'Correct',
      })
      wrapper.instance().addPoints()
      expect(wrapper.state().totalPoints).toEqual(3)
    })

    it('should set state upon incorrect guess', () => {
      wrapper.setState({
        pointsPossible: 3,
        totalPoints: 0,
        status: 'Wrong',
      })
      wrapper.instance().addPoints()
      expect(wrapper.state().totalPoints).toEqual(0)
    })
  })

  describe('hideHint', () => {
    it('should hide each hint', () => {
      wrapper.setState({ showHint: true })

      wrapper.instance().hideHint()
      expect(wrapper.state().showHint).toEqual(false)
    })
  })

  describe('getCountryFlagPath', () => {
    it('should create complete path for country flag', () => {
      let result = wrapper.instance().getCountryFlagPath()
      expect(result).toEqual(
        'https://world-of-flags-backend.herokuapp.com/images/flags/netherlands.png'
      )
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
  })
})
