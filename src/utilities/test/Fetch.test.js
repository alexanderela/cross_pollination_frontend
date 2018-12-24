import * as Fetch from '../Fetch';
import * as API from '../API';
import * as helper from '../helper';
jest.mock('../API');

describe('Fetch', () => {
	describe('fetchCorrectCountry', () => {
		let mockId;
		let mockUsedCountries;
    let mockResults;
    let mockCountry;

		let url;

		beforeEach(() => {
			mockId = 79;
			mockUsedCountries = ['Sweden', 'Denmark', 'Nigeria', 'Australia']
			url = `https://flagz4u.herokuapp.com/api/v1/country/${mockId}`
      helper.checkCountry = jest.fn().mockImplementation(() => { return false})
      helper.buildQuestion = jest.fn().mockImplementation(() => {
        return mockCountry
      })

      mockResults = [{
        "id": 79,
        "name": "Turkmenistan",
        "flag": "/images/flags/turkmenistan.png",
        "country_outline": "/images/outlines/turkmenistan.png",
        "created_at": "2018-12-23T16:48:16.005Z",
        "updated_at": "2018-12-23T16:48:16.005Z",
      }]

      mockCountry = {
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

      API.fetchData = jest.fn()
            .mockImplementation(() => {
              return mockResults
            }
          );

		})


      const mockFetchCall = jest.fn().mockImplementation(() => {
    return Promise.resolve(mockResponse);
  });

		it('should call fetchData with the correct URL', async () => {
			Fetch.fetchCorrectCountry(mockId, mockUsedCountries);
			expect(API.fetchData).toHaveBeenCalledWith(url);
		})

    it('fetchData should return an array', () => {
      Fetch.fetchCorrectCountry(mockId, mockUsedCountries);
      expect(API.fetchData).toHaveReturnedWith(mockResults);
    })

    it('should call checkCountry', () => {
      const spy = jest.spyOn(helper, 'checkCountry');
      const isCalled = helper.checkCountry();
      Fetch.fetchCorrectCountry(mockId, mockUsedCountries);

      expect(helper.checkCountry).toHaveBeenCalled()
      expect(isCalled).toBe(false);

      spy.mockRestore();
    })

    it('should call buildQuestion', () => {
      const spy = jest.spyOn(helper, 'buildQuestion');
      const isCalled = helper.buildQuestion();
      Fetch.fetchCorrectCountry(mockId, mockUsedCountries);

      expect(helper.buildQuestion).toHaveBeenCalled()
      expect(isCalled).toBe(mockCountry);


      spy.mockRestore();
    })
	})

 //  describe('fetchAllCountries', () => {
 // 		let url;
 //     beforeEach(() => {
	// 			url = 'https://flagz4u.herokuapp.com/api/v1/country';
 //     })

 //     it('should call fetchCountries with the correct URL', async () => {
 //     		Fetch.fetchAllCountries();
 //     		expect(API.fetchData).toHaveBeenCalledWith(url)
 //     })

 //     it('should return a resolved array', async () => {
 //     		const countries = await Fetch.fetchAllCountries();
 //     		expect(countries.results).toEqual([])
	//   })
	// })
})