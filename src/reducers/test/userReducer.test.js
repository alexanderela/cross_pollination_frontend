import { userReducer } from '../userReducer';

describe('userReducer', () => {
  const defaultState = {
    id: null,
    loggedIn: null
  }

  it('should return default state when no type is given', () => {
    const newState = userReducer(undefined, {});
    expect(newState).toEqual(defaultState);
  });

  it('should add user to state on successful login', () => {});

  it('should remove user from state on sign out', () => {});
})