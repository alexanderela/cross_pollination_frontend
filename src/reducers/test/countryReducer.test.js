import { countryReducer } from '../countryReducer';

describe('countryReducer', () => {
  const defaultState = [];

  it('should return default state when no type is given', () => {
    const newState = countryReducer(undefined, []);
    expect(newState).toEqual(defaultState);
  });

  it('should set country names as new state', () => {
    const mockCountryNames = ["Azerbaijan", "Mexico"];
    const mockAction = {
      type: 'SET_COUNTRY_NAMES',
      countryNames: mockCountryNames
    }
    const newState = countryReducer([], mockAction);

    expect(newState).toEqual(mockCountryNames);
  });
});