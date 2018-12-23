import * as Fetch from '../Fetch';
import * as API from '../API';
jest.mock('../API');

describe('Fetch', () => {
		describe('fetchCorrectCountry', () => {
			let url;
			let mockId;

			beforeEach(() => {
				
			})
			it.skip('should call fetchCountries with the correct URL', async () => {})
			it.skip('should return a resolved object', async () => {})
			})

	  describe('fetchAllCountries', () => {
	 		let url;
	     beforeEach(() => {
					url = 'https://flagz4u.herokuapp.com/api/v1/country';
	     })

	     it('should call fetchCountries with the correct URL', async () => {
	     		Fetch.fetchAllCountries()
	     		expect(API.fetchData).toHaveBeenCalledWith(url)
	     })

	     it('should return a resolved array', async () => {
	     		const countries = await Fetch.fetchAllCountries();
	     		expect(countries.results).toEqual([])
	  })
	})
})