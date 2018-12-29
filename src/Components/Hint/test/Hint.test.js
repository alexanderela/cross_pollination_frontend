import React from 'react';
import { shallow, mount } from 'enzyme';
import Hint from '../index';

describe('Hint', () => {
  let wrapper;
  let mockCurrentCountry;
  let mockHint;

  beforeEach(() => {
    mockCurrentCountry = {
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

    wrapper = shallow(<Hint 
                        hideHint={jest.fn()} 
                        hint={mockHint}
                        outline={mockCurrentCountry.country_outline}
                        fact={mockCurrentCountry.facts.country_fact}                
                      />)
  });
  
  it('should render like the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleClick', () => {
    it.skip('should invoke hideHint', () => {})
  })

  describe('getCountryOutlinePath', () => {
    it.skip('should create complete path for country outline', () => {})
  })

  describe('showHint', () => {
    it.skip('should show a country fact as a first hint', () => {

    })
   
    it.skip('should invoke getCountryOutlinePath as a second hint', () => {
      mockHint = 'outline';
    })
   
    it.skip('should notify user that they are out of hints after 2nd hint', () => {
      mockHint = 'out of hints';
    })
  })
});