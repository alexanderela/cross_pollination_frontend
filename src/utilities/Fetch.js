import * as API from './API'

export const fetchCorrectCountry = async (randomId) => {
  const url = `https://flagz4u.herokuapp.com/api/v1/country/${randomId}`;

  const correctCountry = await API.fetchData(url);
  return correctCountry;
}

export const fetchAllCountries = async () => {
	const url = 'https://flagz4u.herokuapp.com/api/v1/country';
	const allCountries = await API.fetchData(url);
	return allCountries
}