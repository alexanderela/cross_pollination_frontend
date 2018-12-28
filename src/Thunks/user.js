import { getUser, addUser } from '../utilities/API';

export const fetchUser = (name, email, password) => {
    return async dispatch => {
      dispatch(contentStatus('loading'))
      try {
        let response;
        if (!name) {
          response = await getUser(email, password)
        } else {
          response = await addUser(name, email, password)
        }
        dispatch(loginUser(response))
        dispatch(contentStatus('resolved'))
      } catch (error) {
        dispatch(contentStatus(`Email & password don't match`))
      }
    }
  }