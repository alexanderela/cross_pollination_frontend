export const countryReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_COUNTRY':
      return action.country;
    default: 
      return state;
  }
};
