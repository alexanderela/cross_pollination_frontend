import * as Fetch from '../Fetch';
import * as API from '../API';
jest.mock('../API');

describe('Fetch', () => {
	describe('fetchCorrectCountry', () => {
		let mockId;
		let mockUsedCountries;
		let url;

		beforeEach(() => {
			mockId = 5;
			mockUsedCountries = ['Sweden', 'Denmark', 'Nigeria', 'Australia']
			url = `https://flagz4u.herokuapp.com/api/v1/country/${mockId}`
		})

		it('should call fetchCorrectCountry with the correct URL', async () => {
			Fetch.fetchCorrectCountry(mockId, mockUsedCountries);
			expect(API.fetchData).toHaveBeenCalledWith(url);
		})

		it('should return a resolved array', async () => {
			const mockCorrectCountry = await Fetch.fetchCorrectCountry(mockId, mockUsedCountries);
			console.log(mockCorrectCountry)
			expect(mockCorrectCountry).toEqual([])
		})
	})

  describe('fetchAllCountries', () => {
 		let url;
     beforeEach(() => {
				url = 'https://flagz4u.herokuapp.com/api/v1/country';
     })

     it('should call fetchCountries with the correct URL', async () => {
     		Fetch.fetchAllCountries();
     		expect(API.fetchData).toHaveBeenCalledWith(url)
     })

     it('should return a resolved array', async () => {
     		const countries = await Fetch.fetchAllCountries();
     		expect(countries.results).toEqual([])
	  })
	})
})