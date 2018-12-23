import { setCurrentCountry } from '../countryActions';

describe('countryActions', () => {
  describe('setCurrentCountry', () => {
    it('should have a type of SET_CURRENT_COUNTRY', () => {
      const country = {
                            "id": 121,
                            "name": "San Marino",
                            "flag": "/images/flags/san-marino.png",
                            "country_outline": "/images/outlines/san-marino.png",
                            "created_at": "2018-12-23T16:48:16.067Z",
                            "updated_at": "2018-12-23T16:48:16.067Z",
                            "multipleChoice": [
                              "Djibouti",
                              "San Marino",
                              "Antigua & Barbuda",
                              "Netherlands Antilles"
                            ]
                          };
      const expected = {
        type: 'SET_CURRENT_COUNTRY',
        country
      };
      const result = setCurrentCountry(country);
      expect(result).toEqual(expected);
    });
  });
});
