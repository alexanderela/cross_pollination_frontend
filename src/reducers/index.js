import { combineReducers } from 'redux';
import { countryReducer } from './countryReducer';
import { userReducer } from './userReducer';
import { usedCountriesReducer } from './usedCountriesReducer';
import { loadingReducer } from './loadingReducer'

export const rootReducer = combineReducers({
  currentCountry: countryReducer,
  usedCountries: usedCountriesReducer,
  user: userReducer,
  loading: loadingReducer
});