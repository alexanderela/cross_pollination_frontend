import { loadingReducer } from '../loadingReducer';
import * as actions from '../../actions/userActions'

describe('loadingReducer', () => {
  it('should return the initialState', () => {
    const expected = '';
    const result = loadingReducer(undefined, '');
    expect(result).toEqual(expected);
  })

  it('should update with a new status when loadingReducer is dispatched', () => {
    const initialState = '';
    const status = 'loading';
    const expected = 'loading';
    const result = loadingReducer(initialState, actions.contentStatus(status));
    expect(result).toEqual(expected);
  });
})