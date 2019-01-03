export const countryReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_COUNTRY':
<<<<<<< HEAD
      return action.country;
    default: 
      return state;
  }
};
=======
      return action.country
    default:
      return state
  }
}
>>>>>>> Add styling for Account and login placeholders
