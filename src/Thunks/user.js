import { getUser, addUser } from '../utilities/API'
import { contentStatus, successfulLogin } from '../actions/userActions'

export const fetchUser = (name, email, password) => {
  return async dispatch => {
    dispatch(contentStatus('loading'));
    try {
      let response;
      if (!name) {
        response = await getUser(email, password);
      } else {
        response = await addUser(name, email, password);
      }
      dispatch(successfulLogin(response));
      console.log(response)
      dispatch(contentStatus('resolved'));
    } catch (error) {
      dispatch(contentStatus(`Email & password don't match`));
    }
  };
};







