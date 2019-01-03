import React from 'react'
import { shallow, mount } from 'enzyme'
import Results from '../index'

describe('Results', () => {
  let wrapper;
  let mockCorrectCountry;
  let mockStatus;

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
    };
    mockStatus = '';
  
    wrapper = shallow(<Results             
                        status={mockStatus}
                        closeResults={jest.fn()}
                        correctCountry={mockCorrectCountry.name}
                        points={3}
                        totalPoints={8}
                        getCountry={jest.fn()}
    />)
  });

  
  describe('handleClick', () => {
    it('should render like the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should should invoke getCountry', () => {
      const props = wrapper.instance().props
      const spy = jest.spyOn(props, 'getCountry')
      wrapper.instance().handleClick()
      expect(spy).toHaveBeenCalled()
    })

    it('should should invoke closeResults', () => {
      const props = wrapper.instance().props
      const spy = jest.spyOn(props, 'closeResults')
      wrapper.instance().handleClick()
      expect(spy).toHaveBeenCalled()
    })
  })
})
