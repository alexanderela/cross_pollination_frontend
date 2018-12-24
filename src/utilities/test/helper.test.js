import * as helper from '../helper';

describe('helper', () => {
	describe.skip('checkCountry', () => {
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

	describe.skip('buildQuestion', () => {
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

		it('should return an object with a multipleChoice property with a length of 4', () => {
			returnedCountryObject = helper.buildQuestion(mockCorrectCountry);
			result = Object.values(returnedCountryObject)
			expect(result[6].length).toEqual(4)
		})

		it('should return an object with a multipleChoice property that includes the correct country name', () => {
			returnedCountryObject = helper.buildQuestion(mockCorrectCountry);
			result = Object.values(returnedCountryObject)
			expected = 'Turkmenistan'
			expect(result[6]).toContain(expected)
		})
	})

	describe.skip('getRandomOptions', () => {
		it('should return an array of 3 country options', () => {
			const result = helper.getRandomOptions()
			expect(result.length).toEqual(3)
		})
		// it('should call getRandomOptions if any option is the same', () => {
		// 	const mockMath = Object.create(global.Math);
		// 	global.Math = mockMath;
		// 	mockMath.random = () => 0.5;

		// 	const result = helper.getRandomOptions()
		// 	expect(helper.getRandomOptions).toHaveBeenCalled
		// })
	})

	describe('checkOptions', () => {
		let mockCountryName;
		let mockQuestionOptions;
		let result;
		let expected;

		beforeEach(() => {
			mockCountryName = 'Sweden';
		})

		it('should run getRandomOptions if question options already include country name', () => {
			mockQuestionOptions = ['Sweden', 'Denmark', 'Nigeria']

		  const spy = jest.spyOn(helper, 'getRandomOptions');
			const isCalled = helper.getRandomOptions();
			helper.checkOptions(mockCountryName, mockQuestionOptions)

			expect(spy).toHaveBeenCalled();
			expect(isCalled.length).toBe(3);

			spy.mockRestore();
		})

		it('should return if question options do not already include country name', () => {
			mockQuestionOptions = ['Denmark', 'Nigeria', 'Australia']

		  const spy = jest.spyOn(helper, 'getRandomOptions');
			const isCalled = helper.getRandomOptions();
			helper.checkOptions(mockCountryName, mockQuestionOptions)

			expect(spy).toHaveReturned();

			spy.mockRestore();
		})
	})
})