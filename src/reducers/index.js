import { combineReducers } from 'redux'
import { countryReducer } from './countryReducer'
import { userReducer } from './userReducer'
import { usedCountriesReducer } from './usedCountriesReducer'
<<<<<<< HEAD
import { loadingReducer } from './loadingReducer'
=======
>>>>>>> Add styling for Account and login placeholders

export const rootReducer = combineReducers({
  currentCountry: countryReducer,
  usedCountries: usedCountriesReducer,
  user: userReducer,
<<<<<<< HEAD
  loading: loadingReducer,
=======
>>>>>>> Add styling for Account and login placeholders
})
