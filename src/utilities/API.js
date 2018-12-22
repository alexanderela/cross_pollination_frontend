export const fetchData = async (url) => {
  const response = await fetch(url);
  const jsonData = await response.json();
  return jsonData;
};

export const fetchCorrectCountry = async (randomId) => {
  const url = `https://flagz4u.herokuapp.com/api/v1/country/${randomId}`;

  const correctCountry = await fetchData(url);
  return correctCountry;
}

export const fetchAllCountries = async () => {
	const url = 'https://flagz4u.herokuapp.com/api/v1/country';
	const allCountries = await fetchData(url);
	return allCountries
}