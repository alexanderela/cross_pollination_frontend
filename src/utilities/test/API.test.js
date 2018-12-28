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

 describe('addUser', () => {
 		let mockUser;
     beforeEach(() => {
     		mockUser = { name: 'bob', email: 'email@email.com', password: 'password' };
     		window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
     			json: () => Promise.resolve(
     				{ data: { name: 'bob', email: 'email@email.com', password: 'password' }}
     			)
     		}))
	 })
	 
     it('should call fetch on path /api/signup', () => {
		const url = 'https://flagz4u.herokuapp.com/signup';
		const body = {"body": "{\"name\":\"https://flagz4u.herokuapp.com/signup\"}", "headers": {"Content-Type": "application/json"}, "method": "POST"}
		const expected = {"body": "{\"name\":\"https://flagz4u.herokuapp.com/signup\",\"email\":{\"body\":\"{\\\"name\\\":\\\"https://flagz4u.herokuapp.com/signup\\\"}\",\"headers\":{\"Content-Type\":\"application/json\"},\"method\":\"POST\"}}", "headers": {"Content-Type": "application/json"}, "method": "POST"}
		API.addUser(url, body);
		expect(window.fetch).toHaveBeenCalledWith(url, expected);	 
	 })

	 it('Should return json\'d response from fetch', async () => {
		const url = 'https://flagz4u.herokuapp.com/signup';
		const expected = { data: mockUser }
		const response = await API.fetchData(url)
		expect(response).toEqual(expected);
	});
	
	it.skip('should pass an options object with stringified user data to fetch', () => {})
 })

 describe('createUser', () => {
     beforeEach(() => {
     })
     it.skip('should call fetch with the correct arguments', () => {})    
 })
})