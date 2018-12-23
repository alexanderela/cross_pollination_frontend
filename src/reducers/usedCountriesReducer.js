export const usedCountriesReducer = (state = [], action) => {
  console.log(action.country)
  switch (action.type) {
    case 'UPDATE_USED_COUNTRIES':
      return [...state, action.country];
    default: 
      return state;
  };
};