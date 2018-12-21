import { userReducer } from '../userReducer';

describe('userReducer', () => {
  const defaultState = {
    id: null,
    loggedIn: null
  }

  it.skip('should return default state when no type is given', () => {
    const newState = userReducer(undefined, {});
    expect(newState).toEqual(defaultState);
  });

  it.skip('should add user to state on successful login', () => {});

  it.skip('should remove user from state on sign out', () => {});
})