export const usedCountriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_USED_COUNTRIES':
      return [...state, action.country];
    default: 
      return state;
  };
};