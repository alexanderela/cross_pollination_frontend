const defaultState = {
<<<<<<< HEAD
<<<<<<< HEAD
	id: null,
	loggedIn: false,
	name: '',
	email: ''
}

export const userReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'SUCCESSFUL_LOGIN':
			return {id: action.id, name: action.user.name, loggedIn: true, email: action.user.email}
		case 'SIGN_OUT':
			return defaultState;
		default:
			return state;
	}
}
=======
  id: null,
  loggedIn: false,
  name: '',
}

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SUCCESSFUL_LOGIN':
      return { id: action.id, name: action.user.name, loggedIn: true }
    case 'SIGN_OUT':
      return defaultState
    default:
      return state
  }
}
>>>>>>> Add styling for Account and login placeholders
=======
	id: null,
	loggedIn: false,
	name: ''
}

export const userReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'SUCCESSFUL_LOGIN':
			return {id: action.id, name: action.user.name, loggedIn: true}
		case 'SIGN_OUT':
			return defaultState;
		default:
			return state;
	}
}
>>>>>>> Add styling and logic to Axxount component
