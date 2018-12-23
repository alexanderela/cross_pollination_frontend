import { countryReducer } from '../countryReducer';

describe('countryReducer', () => {
  const defaultState = {};

  it('should return default state when no type is given', () => {
    const newState = countryReducer(undefined, {});
    expect(newState).toEqual(defaultState);
  });

  it('should set current country as new state', () => {
    const mockCountry = {
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
    const mockAction = {
      type: 'SET_CURRENT_COUNTRY',
      country: mockCountry
    }
    const newState = countryReducer([], mockAction);

    expect(newState).toEqual(mockCountry);
  });
});