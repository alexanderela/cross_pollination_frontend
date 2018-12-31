const defaultState = {
	id: null,
	loggedIn: false,
	user: ''
}

export const userReducer = (state = defaultState, action) => {
	console.log(action.user)
	switch (action.type) {
		case 'SUCCESSFUL_LOGIN':
			return {id: action.id, user: action.user, loggedIn: true}
		case 'SIGN_OUT':
			return defaultState;
		default:
			return state;
	}
}