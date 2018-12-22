import { combineReducers } from 'redux';
import { countryReducer } from './countryReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  countryNames: countryReducer,
  user: userReducer
});