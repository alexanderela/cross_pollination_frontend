import { getUser, addUser } from '../../utilities/API'
import { contentStatus, successfulLogin } from '../../actions/userActions'
import { fetchUser } from '../user'

jest.mock('../../utilities/API', () => ({
  getUser: jest.fn().mockImplementation(() => Promise.resolve([])),
}))

jest.mock('../../utilities/API', () => ({
  addUser: jest.fn().mockImplementation(() => Promise.resolve([])),
}))

jest.mock('../../utilities/API', () => ({
  loading: jest.fn().mockImplementation(() => Promise.resolve([])),
}))

describe('Thunks', () => {
  describe('fetchUser', () => {
    let mockUrl
    let mockDispatch

    beforeEach(() => {
      mockUrl = 'api/v1/login'
      mockDispatch = jest.fn()
    })

    it('should dispatch contentStatus error if the response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.reject({
          loading: jest.fn().mockImplementation(() => Promise.reject([])),
        })
      )

      const thunk = fetchUser(mockUrl)

      await thunk(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledWith(contentStatus(`Email & password don't match`))
    })

    it('calls dispatch with the contentStatus action', () => {
      const thunk = fetchUser(mockUrl)

      thunk(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledWith(contentStatus('loading'))
    })

    it.skip('should dispatch fetchUser with the correct params', async () => {
      const mockUser = []
      let mockDispatch = jest.fn()
  
      const thunk = fetchUser(mockUser)
  
      await thunk(mockDispatch)
  
      expect(mockDispatch).toHaveBeenCalledWith(successfulLogin(mockUser))
    })
  })
})
