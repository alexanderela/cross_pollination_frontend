const defaultState = {
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