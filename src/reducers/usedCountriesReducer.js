export const usedCountriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_USED_COUNTRIES':
<<<<<<< HEAD
      return [...state, action.country];
    default: 
      return state;
  }
};
=======
      return [...state, action.country]
    default:
      return state
  }
}
>>>>>>> Add styling for Account and login placeholders
