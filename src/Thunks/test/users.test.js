import * as API from '../../utilities/API'
import { contentStatus, successfulLogin } from '../../actions/userActions'
import { fetchUser } from '../user'

describe('Thunks', () => {
  describe('fetchUser', () => {
    let mockUrl
    let mockDispatch
    let mockUser
    let mockName
    let mockEmail
    let mockPassword

    beforeEach(() => {
      mockUrl = 'api/v1/login'
      mockDispatch = jest.fn()
      mockName = 'Alex'
      mockEmail = 'alex@turing.com'
      mockPassword = 'password'
      mockUser = {
        id: 1,
        name: mockName,
        email: mockEmail
      }
    })

    it('should dispatch contentStatus error if the response is not ok', async () => {
       API.getUser = jest.fn().mockImplementation(() => Promise.reject({
        ok: false,
        json: () => Promise.reject({ error: { message: '404' } })
      }))

      const thunk = fetchUser(null, mockEmail, mockPassword)

      await thunk(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledWith(contentStatus(`Email & password don't match`))
    })

    it('calls dispatch with the contentStatus action while status is loading', () => {
      const thunk = fetchUser(mockUrl)

      thunk(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledWith(contentStatus('loading'))
    })

    it('should dispatch fetchUser with the correct params', async () => {
      API.getUser = jest.fn().mockImplementation(() => Promise.resolve(mockUser))

      const thunk = fetchUser(null, mockEmail, mockPassword)
  
      await thunk(mockDispatch)
  
      expect(mockDispatch).toHaveBeenCalledWith(successfulLogin(mockUser))
    })
  })
})







