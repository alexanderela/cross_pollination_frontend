const defaultState = {
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