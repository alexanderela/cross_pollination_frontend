import { updateUsedCountries } from '../usedCountryActions'

describe('usedCountryActions', () => {
  describe('updateUsedCountries', () => {
    it('should have a type of UPDATE_USED_COUNTRIES', () => {
      const country = 'Hungary'

      const expected = {
        type: 'UPDATE_USED_COUNTRIES',
        country,
      }
      const result = updateUsedCountries(country)
      expect(result).toEqual(expected)
    })
  })
})
