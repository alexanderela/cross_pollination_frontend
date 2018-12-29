import React from 'react';
import { shallow, mount } from 'enzyme';
import Results from '../index';

describe('Results', () => {
  let wrapper;
  let mockCorrectCountry;

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

    wrapper = shallow(<Results             
                        status={status}
                        closeResults={jest.fn()}
                        correctCountry={mockCorrectCountry.name}
                        points={3}
                        totalPoints={8}
                        getCountry={jest.fn()}
                      />)
  });
  
  describe('handleClick', () => {
    it.skip('should render like the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
    
    it.skip('should should invoke getCountry', () => {
    });

    it.skip('should should invoke closeResults', () => {
    });
  })
});