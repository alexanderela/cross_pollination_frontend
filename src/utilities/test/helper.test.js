import * as helper from '../helper';

describe('helper', () => {
	describe('checkCountry', () => {
		let mockCountry;
		let mockUsedCountries;
		let url;
		let result;
		let expected;

		beforeEach(() => {
			mockCountry = 'Sweden'
		})

		it('should return true if country has already been used', () => {
			mockUsedCountries = ['Sweden', 'Denmark', 'Nigeria', 'Australia']
			result = helper.checkCountry(mockCountry, mockUsedCountries)			
			expect(result).toEqual(true)
		})

		it('should return false if country has not already been used', () => {
			mockUsedCountries = ['Denmark', 'Nigeria', 'Australia']
			result = helper.checkCountry(mockCountry, mockUsedCountries)			
			expect(result).toEqual(false)
		})
	})

	describe('buildQuestion', () => {
		let mockCorrectCountry;
		let returnedCountryObject;
		let result;
		let expected;

		beforeEach(() => {
 			mockCorrectCountry = {
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
		})

		it('should return an object with a multipleChoice property', () => {
			returnedCountryObject = helper.buildQuestion(mockCorrectCountry);
			result = Object.keys(returnedCountryObject)
			expected = 'multipleChoice'
			expect(result).toContain(expected)
		})

		it.skip('should return an object with a multipleChoice property with a length of 4', () => {})

		it.skip('should return an object with a multipleChoice property that includes the correct country name', () => {})
	})

	describe('getRandomOptions', () => {
		it('should return an array of 3 country options', () => {
			const result = helper.getRandomOptions()
			expect(result.length).toEqual(3)
		})
	})

	describe('checkOptions', () => {
		let mockCountryName;
		let mockQuestionOptions;
		let result;
		let expected;

		beforeEach(() => {
			mockCountryName = 'Sweden';
			helper.getRandomOptions = jest.fn()
		})

		it.skip('should run getRandomOptions if question options already include country name', () => {
			mockQuestionOptions = ['Sweden', 'Denmark', 'Nigeria']
			result = helper.checkOptions(mockCountryName, mockQuestionOptions)
			expect(helper.getRandomOptions).toHaveBeenCalled()			
		})

		it.skip('should return if question options do not already include country name', () => {
			mockQuestionOptions = ['Denmark', 'Nigeria', 'Australia']
			result = helper.checkOptions(mockCountryName, mockQuestionOptions)			
			expect(result).toHaveReturned()
		})
	})
})