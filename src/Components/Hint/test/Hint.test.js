import React from 'react'
import { shallow, mount } from 'enzyme'
import Hint from '../index'

describe('Hint', () => {
  let wrapper
  let mockCurrentCountry
  let mockHint

  beforeEach(() => {
    mockCurrentCountry = {
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
    mockHint = 'fact'
    wrapper = shallow(
      <Hint
        hideHint={jest.fn()}
        hint={mockHint}
        outline={mockCurrentCountry.country_outline}
        fact={mockCurrentCountry.facts.country_fact}
      />
    )
  })

  it('should render like the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('handleClick', () => {
    it('should invoke hideHint', () => {
      const props = wrapper.instance().props
      wrapper.instance().handleClick()
      const spy = jest.spyOn(props, 'hideHint')
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('getCountryOutlinePath', () => {
    it('should create complete path for country outline', () => {
      const expected =
        'https://flagz4u.herokuapp.com/images/outlines/netherlands.png'
      const result = wrapper.instance().getCountryOutlinePath()
      expect(result).toEqual(expected)
    })
  })

  describe('showHint', () => {
    it('should show a country fact as a first hint', () => {
      expect(wrapper.exists('.hint-fact')).toEqual(true)
    })

    it('should invoke getCountryOutlinePath as a second hint', () => {
      mockHint = 'outline'
      wrapper = shallow(
        <Hint
          hideHint={jest.fn()}
          hint={mockHint}
          outline={mockCurrentCountry.country_outline}
          fact={mockCurrentCountry.facts.country_fact}
        />
      )
      expect(wrapper.exists('.hint-outline')).toEqual(true)
    })

    it('should notify user that they are out of hints after 2nd hint', () => {
      mockHint = 'out of hints'
      wrapper = shallow(
        <Hint
          hideHint={jest.fn()}
          hint={mockHint}
          outline={mockCurrentCountry.country_outline}
          fact={mockCurrentCountry.facts.country_fact}
        />
      )
      expect(wrapper.exists('.out-of-hints')).toEqual(true)
    })
  })
})
