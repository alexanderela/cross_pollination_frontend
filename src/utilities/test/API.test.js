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