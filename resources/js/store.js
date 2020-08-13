function getLocalUser() {
	let userStr = localStorage.getItem('user');
	if(! userStr) {
		return null;
	}
	return JSON.parse(userStr)
}

const user = getLocalUser();

export default {
	state: {
		isLoggedIn: !!user,
		currentUser: user,
		isLoading: false,
		authError: null,
		model: {},
		path: '/account/info',
	},
	getters: {
		isLoggedIn(state) {
			return state.isLoggedIn;
		},
		currentUser(state) {
			return state.currentUser;
		},
		isLoading(state) {
			return state.isLoading;
		},
		authError(state) {
			return state.authError;
		},
		model(state) {
			return state.model;
		},
		path(state) {
			return state.path;
		},

	},
	mutations: {
		proceedForm(state) {
			state.isLoading = true;
		},
		formProceeded(state) {
			state.isLoading = false;
		},
		login(state) {
			state.isLoading = true;
			state.authError	= null;
		},
		loginSuccess(state, payload) {
			state.isLoading = false;
			state.isLoggedIn = true;
			state.authError = null;
			state.currentUser = Object.assign({}, payload);

			localStorage.setItem('user', JSON.stringify(state.currentUser));
		},
		loginFailed(state, payload) {
			state.isLoading = false;
			state.isLoggedIn = false;
			state.currentUser = null;
			localStorage.removeItem('user');
			state.authError = Object.assign({}, {status: payload.status}, {text: payload.statusText}, {message: payload.data});
		},
		logout(state) {
			state.isLoggedIn = false;
			state.isLoading = false;
			state.currentUser = null;
			state.authError = null;
			localStorage.removeItem('user');
			localStorage.removeItem('model');
			state.model = {};
			// Router.push('/login');
		},
		clearModel(state) {
			localStorage.removeItem('model');
			state.model = {};
			// state.model = Object.assign({}, payload);
			// localStorage.setItem('model', state.model);
		},		
		updateModel(state, payload) {
			// localStorage.removeItem('model');
			// state.model = {};
			state.model = Object.assign({}, payload);
			localStorage.setItem('model', state.model);
		},
		setPath(state, payload) {
			state.path = payload;
 		},
	},
	actions: {
		proceedForm(context) {
			context.commit('proceedForm');
		},
		formProceeded(context) {
			context.commit('formProceeded');
		},
		login(context) {
			context.commit('login');
		},
		logout(context) {
			context.commit('logout');
		},
		clearModel(context) {
			context.commit('clearModel');
		},
	},

	menu: {
		
	}
}