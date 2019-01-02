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
      body: JSON.stringify({username: name, email: email, password: password}),
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

export const getUser = async (email, password, id, username) => {
  try {
    const url = 'https://flagz4u.herokuapp.com/signin'
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({id: id, username: username, email: email, password: password}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const result = await response.json();
    console.log(result)
    const user = {id: result[0].id, name: result[0].username}
    return user
  } catch(error) {
    throw new Error()
  }
}

