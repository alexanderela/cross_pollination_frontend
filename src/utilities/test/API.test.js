import * as API from '../API';
// jest.mock('../API');

describe('API', () => {
 describe('fetchData', () => {
   beforeEach(() => {
   		window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
   			json: () => Promise.resolve({ data: 'data here' })
   		}));
   })

   it('should call fetch with the given URL', async () => {
   		const url = 'google.com';
   		API.fetchData(url);
   		expect(window.fetch).toHaveBeenCalledWith(url);
   });

   it('Should return json\'d response from fetch', async () => {
   		const url = 'google.com';
   		const expected = { data: 'data here' }
   		const response = await API.fetchData(url)
   		expect(response).toEqual(expected);
   });
 });

 describe('fetchCorrectCountry', () => {
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
     		API.fetchAllCountries()
     		expect(API.fetchData).toHaveBeenCalledWith(url)
     })

     it.skip('should return a resolved array', async () => {
     		const countries = await API.fetchAllCountries();
     		expect(countries).toEqual([])
     })
 })


 describe('loginUser', () => {
 		let mockUser;
     beforeEach(() => {
     		mockUser = { email: 'email@email.com', password: 'password' };
     		window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
     			json: () => Promise.resolve(
     				{ data: { email: 'email@email.com', password: 'password' }}
     			)
     		}))
     })
     it.skip('should call fetch on path /api/users', () => {})
     it.skip('should pass an options object with stringified user data to fetch', () => {})
     it.skip('Should return json\'d response from response', () => {})
 })

 describe('createUser', () => {
     beforeEach(() => {
     })
     it.skip('should call fetch with the correct arguments', () => {})    
 })
})