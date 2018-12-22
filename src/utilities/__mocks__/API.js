export const fetchData = jest.fn().mockImplementation(() => {
  return { results: [] }
})

export const loginUser = jest.fn().mockImplementationOnce(() => ({
	id: 31,
	loggedIn: true
})).mockImplementationOnce(() => ({
	id: 31,
	loggedIn: false
}))

export const createUser = jest.fn(() => ({
	id: 31,
	status: 400
})).mockImplementationOnce(() => ({
	id: 31,
	status: 200
})).mockImplementationOnce(() => ({
	id: 31,
	status: 400
}))