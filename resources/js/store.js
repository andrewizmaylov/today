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

	menu: [
		{id: 1, rus: 'стандартная еда', eng: 'ordinary meal', img: 'boxEmpty.png', status: true, msg: 'твоя стандартная еда будет ' },
		{id: 2, rus: 'говядина', eng: 'beef', img: 'boxCow.png', status: false, msg: 'твоя говядина будет ' },
		{id: 3, rus: 'вегетарианская кухня', eng: 'veg', img: 'boxEco.png', status: true, msg: 'твоя вегетаринская кухня будет ' },
		{id: 4, rus: 'курица', eng: 'chicken', img: 'boxChicken.png', status: false, msg: 'твоя курица будет ' },
		{id: 5, rus: 'рыба', eng: 'fish', img: 'boxFish.png', status: true, msg: 'твоя рыба будет ' },
		{id: 6, rus: 'безлактозная диета', eng: 'dairy free', img: 'boxNoMilk.png', status: true, msg: 'твоя безлактозная диета будет ' },
		{id: 7, rus: 'морепродукты', eng: 'seafood', img: 'boxSeaFood.png', status: false, msg: 'твои морепродукты будут ' },
		{id: 8, rus: 'креветки', eng: 'prawns', img: 'boxPrawns.png', status: false, msg: 'твои креветки будут ' },
		{id: 9, rus: 'правильное питание', eng: 'proper nutrition', img: 'boxPP.png', status: true, msg: 'твое правильное питание будет ' },
		{id: 10, rus: 'свинина', eng: 'pork', img: 'boxPork.png', status: false, msg: 'твоя свинина будет ' },
	],
	
}