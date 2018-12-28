export const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
  //changed name from jsonData to data. The data is no longer json at this point .json() will parse it. It is usable, just wrapped in a promise.
};

export const addUser = async (name, email, password) => {
  try {
    const url = 'https://flagz4u.herokuapp.com/signup'
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({name: name, email: email, password: password}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const result = await response.json();
    const user = {id: result.id}
    return user
  } catch(error) {
    throw new Error()
  }
}

export const getUser = async (email, password) => {
  const url = 'https://flagz4u.herokuapp.com/sigin'
  const response = await fetchData(url);
  const matchingUser = response.data.find(user => user.email === email && user.password === password)
  if(matchingUser) {
    const user = {...matchingUser}
    return user
  } else {
    throw new Error()
  }
} 
