export const countryReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_COUNTRY_NAMES':
      return action.countryNames;
    default: 
      return state;
  };
};