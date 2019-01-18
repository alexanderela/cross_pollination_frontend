import * as API from '../API'

describe('API', () => {
  describe('fetchData', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve({ data: 'data here' }),
        })
      )
    })

    it('should call fetch with the given URL', async () => {
      const url = 'google.com'
      API.fetchData(url)
      expect(window.fetch).toHaveBeenCalledWith(url)
    })

    it("Should return json'd response from fetch", async () => {
      const url = 'google.com'
      const expected = { data: 'data here' }
      const response = await API.fetchData(url)
      expect(response).toEqual(expected)
    })
  })

  describe('addUser', () => {
    let mockUser
    beforeEach(() => {
      mockUser = {
        username: 'bob',
        email: 'email@email.com',
        password: 'password',
      }
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve({
              data: {
                username: 'bob',
                email: 'email@email.com',
                password: 'password',
              },
            }),
        })
      )
    })

    it('should call fetch on path /api/signup', () => {
      const url = 'https://world-of-flags-backend.herokuapp.com/signup'
      const body = {
        body: '{"username":"https://world-of-flags-backend.herokuapp.com/signup"}',
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      }
      const expected = {
        body:
          '{"username":"https://world-of-flags-backend.herokuapp.com/signup","email":{"body":"{\\"username\\":\\"https://world-of-flags-backend.herokuapp.com/signup\\"}","headers":{"Content-Type":"application/json"},"method":"POST"}}',
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      }
      API.addUser(url, body)
      expect(window.fetch).toHaveBeenCalledWith(url, expected)
    })

    it("Should return json'd response from fetch", async () => {
      const url = 'https://world-of-flags-backend.herokuapp.com/signup'
      const expected = { data: mockUser }
      const response = await API.fetchData(url)
      expect(response).toEqual(expected)
    })

    it.skip('should pass an options object with stringified user data to fetch', () => {})
  })

  describe('getUser', () => {
    let mockUser
    beforeEach(() => {
      mockUser = {
        email: 'email@email.com',
        password: 'password',
        id: 31,
        username: 'dave',
      }
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve({
              data: {
                email: 'email@email.com',
                password: 'password',
                id: 31,
                username: 'dave',
              },
            }),
        })
      )
    })

    it('should call fetch on path /api/signin with correct params', () => {
      const expected = {"body": "{\"email\":\"https://world-of-flags-backend.herokuapp.com/signin\"}", "headers": {"Content-Type": "application/json"}, "method": "POST"}
      const url = 'https://world-of-flags-backend.herokuapp.com/signin'
      API.getUser(url)
      expect(window.fetch).toHaveBeenCalledWith(url, expected)
    })

    it("Should return json'd response from fetch", async () => {
      const url = 'https://world-of-flags-backend.herokuapp.com/signin'
      const expected = { data: mockUser }
      const response = await API.fetchData(url)
      expect(response).toEqual(expected)
    })
  })
})
