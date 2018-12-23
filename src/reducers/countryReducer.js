export const countryReducer = (state = {}, action) => {
  console.log(action.country)
  switch (action.type) {
    case 'SET_CURRENT_COUNTRY':
      return action.country;
    default: 
      return state;
  };
};