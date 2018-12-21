import { setCountryNames } from '../countryActions';

describe('countryActions', () => {
  describe('setCountryNames', () => {
    it('should have a type of SET_COUNTRY_NAMES', () => {
      const countryNames = ["Zimbabwe", "Ukraine"];
      const expected = {
        type: 'SET_COUNTRY_NAMES',
        countryNames
      };
      const result = setCountryNames(countryNames);
      expect(result).toEqual(expected);
    });
  });
});
