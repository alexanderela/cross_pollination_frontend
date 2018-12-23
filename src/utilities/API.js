export const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
  //changed name from jsonData to data. The data is no longer json at this point .json() will parse it. It is usable, just wrapped in a promise.
};
