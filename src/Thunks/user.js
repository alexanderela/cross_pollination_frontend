import { getUser, addUser } from '../utilities/API'
import { contentStatus, successfulLogin } from '../actions/userActions'

export const fetchUser = (name, email, password) => {
<<<<<<< HEAD
=======
  console.log(name, email, password)
>>>>>>> Add styling for Account and login placeholders
  return async dispatch => {
    dispatch(contentStatus('loading'))
    try {
      let response
      if (!name) {
        response = await getUser(email, password)
      } else {
        response = await addUser(name, email, password)
      }
      dispatch(successfulLogin(response))
      dispatch(contentStatus('resolved'))
    } catch (error) {
      dispatch(contentStatus(`Email & password don't match`))
    }
  }
}
