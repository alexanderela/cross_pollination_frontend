import * as API from './API'
import { buildQuestion, checkCountry } from './helper'

export const fetchCorrectCountry = async (randomId, usedCountries) => {
  const url = `https://flagz4u.herokuapp.com/api/v1/country/${randomId}`

  const countryArray = await API.fetchData(url)
  const correctCountry = countryArray[0]
  const countryAlreadyExists = checkCountry(correctCountry.name, usedCountries)

<<<<<<< HEAD
  if (countryAlreadyExists) {
    let randomNumber = Math.floor(Math.random() * (196 - 1) + 1)
    return fetchCorrectCountry(randomNumber, usedCountries)
=======
  if (checkCountry(correctCountry, usedCountries)) {
    let randomNumber = Math.floor(Math.random() * (196 - 1) + 1)
    fetchCorrectCountry(randomNumber, usedCountries)
>>>>>>> Add styling for Account and login placeholders
  } else {
    const countryFacts = await fetchCountryFacts(randomId)
    return buildQuestion(correctCountry, countryFacts)
  }
}

export const fetchCountryFacts = async countryId => {
  const url = `https://flagz4u.herokuapp.com/api/v1/facts/${countryId}`

  const countryFacts = await API.fetchData(url)
  return countryFacts
}
<<<<<<< HEAD
=======

//would this ever be used?
// export const fetchAllCountries = async () => {
//   const url = 'https://flagz4u.herokuapp.com/api/v1/country';
//   const allCountries = await API.fetchData(url);
//   return allCountries
// }
>>>>>>> Add styling for Account and login placeholders
