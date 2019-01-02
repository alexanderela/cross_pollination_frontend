import { userReducer } from '../userReducer';

describe('userReducer', () => {
  const defaultState = {
    id: null,
    loggedIn: false,
    name: ''
  }

  it('should return default state when no type is given', () => {
    const newState = userReducer(undefined, {});
    expect(newState).toEqual(defaultState);
  });

  it('should add user to state on successful login', () => {
    const mockUser = {
        id: 1,
        email: 'email@email.com',
        password: 'password',
        name: 'Bruce'
      }    

    const mockAction = {
      type: 'SUCCESSFUL_LOGIN',
      id: 1,
      user: mockUser
    }

    const expected = {
      id: 1,
      loggedIn: true,
      name: 'Bruce'
    }
    const newState = userReducer(undefined, mockAction);
    expect(newState).toEqual(expected);
  });

  it('should remove user from state on sign out', () => {
    const state = {
      id: 1,
      loggedIn: true
    }
    const mockAction = { type: 'SIGN_OUT' }
    const newState = userReducer(state, mockAction);
    expect(newState).toEqual(defaultState);
  });
});