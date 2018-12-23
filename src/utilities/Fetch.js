import * as API from './API'
import { buildQuestion, checkCountry } from './helper'

export const fetchCorrectCountry = async (randomId, usedCountries) => {
  const url = `https://flagz4u.herokuapp.com/api/v1/country/${randomId}`;

  const countryArray = await API.fetchData(url);
  //returns as a single object in array, gets rid of array here and pass object
  const correctCountry = countryArray[0]
  //check if country has been used, if it has make fetch again
  //not sure if this is working --> needs testing!!
  if (checkCountry(correctCountry, usedCountries)) {
    //update range as countries are added
    let randomNumber = Math.floor(Math.random() * (149 - 1) + 1);
    fetchCorrectCountry(randomNumber)
  } else {
    return buildQuestion(correctCountry) 
  }
}


//would this ever be used?
export const fetchAllCountries = async () => {
  const url = 'https://flagz4u.herokuapp.com/api/v1/country';
  const allCountries = await API.fetchData(url);
  return allCountries
}