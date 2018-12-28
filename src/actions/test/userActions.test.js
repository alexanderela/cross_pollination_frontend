import * as userActions from '../userActions';

describe('userActions', () => {
  describe('successfulLogin', () => {
    it('should have a type of SUCCESSFUL_LOGIN and userData', () => {
      const mockUser = {
        id: 1,
        email: 'email@email.com',
        password: 'password',
        name: 'Bruce'
      }

      const expected = {
        type: 'SUCCESSFUL_LOGIN',
        id: 1
      }

      const result = userActions.successfulLogin(mockUser);

      expect(result).toEqual(expected);
    });

    it('should have a type of CONTENT_STATUS', () => {
      const status = '';
      const expected = {
        type: 'CONTENT_STATUS',
        status
      }
      const result = userActions.contentStatus(status);
      expect(result).toEqual(expected);
    });

  });
  describe('signOut', () => {
    it('should have a type of SIGN_OUT and userData', () => {
      const expected = { type: 'SIGN_OUT' }

      const result = userActions.signOut();

      expect(result).toEqual(expected);
    });
  });
})