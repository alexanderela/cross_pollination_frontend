import * as API from './API'
import { buildQuestion, checkCountry } from './helper'

export const fetchCorrectCountry = async (randomId, usedCountries) => {
  const url = `https://world-of-flags-backend.herokuapp.com/api/v1/country/${randomId}`
  const countryArray = await API.fetchData(url)
  const correctCountry = countryArray[0]
  const countryAlreadyExists = checkCountry(correctCountry.name, usedCountries)

  if (countryAlreadyExists) {
    let randomNumber = Math.floor(Math.random() * (196 - 1) + 1)
    return fetchCorrectCountry(randomNumber, usedCountries)
  } else {
    const countryFacts = await fetchCountryFacts(randomId)
    return buildQuestion(correctCountry, countryFacts)
  }
}

export const fetchCountryFacts = async countryId => {
  const url = `https://world-of-flags-backend.herokuapp.com/api/v1/facts/${countryId}`

  const countryFacts = await API.fetchData(url)
  return countryFacts
}
