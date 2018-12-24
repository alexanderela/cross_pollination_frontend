import * as API from './API'
import { buildQuestion, checkCountry } from './helper'

export const fetchCorrectCountry = async (randomId, usedCountries) => {
  const url = `https://flagz4u.herokuapp.com/api/v1/country/${randomId}`;

  const countryArray = await API.fetchData(url);
  const correctCountry = countryArray[0]

  if (checkCountry(correctCountry, usedCountries)) {
    let randomNumber = Math.floor(Math.random() * (149 - 1) + 1);
    fetchCorrectCountry(randomNumber)
  } else {
    return buildQuestion(correctCountry) 
  }
}


//would this ever be used?
// export const fetchAllCountries = async () => {
//   const url = 'https://flagz4u.herokuapp.com/api/v1/country';
//   const allCountries = await API.fetchData(url);
//   return allCountries
// }