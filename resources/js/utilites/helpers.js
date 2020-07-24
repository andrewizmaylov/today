export function getLocalUser() {
	const userStr = localStorage.getItem("user");

	if(!userStr) {
		return null;
	}

	return JSON.parse(userStr);
} 

export function login(credentials) {

	return new Promise((res, rej) => {
		axios.post('api/login', credentials)
			.then((response) => {
				res(response.data);
			})
			.catch((err) => {
				// console.log(err.response.data);
				let errors = Object.assign({}, err.response.data);
				console.log(errors);
				rej(errors);
			})
	})
}

export function putUserToLocalStorage() {
	axios.get('/app/web/sort/of/how/i/will/mess/you/up/user')
		.then(res => {
			console.log('We are inside the second request');
			console.log(res.data);
			Store.commit('loginSuccess', res.data);
		})
}

export function proceedForm(path) {
	this.form.submit('post', path)
		.then(response => {
			console.log(response.data);
			this.$router.push('account/info');
		})
		.catch(error => {
			console.log(error.response.data);
		});	
}

export function setData(path) {
	axios.get(path)
	  .then(response => {
	  	this.form = new Form(response.data);
	  })
}

export function masterInfo(date) {
	let master ={};
	let groupe = [
		{'linearMsk': 'Макаров', 'output1': 'Цветков', 'output2': 'Машкина', 'videoeditorMsk': 'Тагир', },
		{'linearMsk': 'Лосева', 'output1': 'Дробышева', 'output2': 'Варданова', 'videoeditorMsk': 'Лена', },
		{'linearMsk': 'Бабич', 'output1': 'Маркелов', 'output2': 'Щуренко', 'videoeditorMsk': 'Мурад', },
		{'linearMsk': 'Хромова', 'output1': 'Дробышев', 'output2': 'Баханова', 'videoeditorMsk': 'Марат', },
	];
	let start = 5460; // 2019-04-15
	let nullDate = moment('2019-04-15').dayOfYear();
	let delta = 0;
	if(moment(date).year() == 2018) {
		delta = -365;
	} else if(moment(date).year() == 2017) {
		delta = -730;
	} else if(moment(date).year() == 2020) {
		delta = 365;
	}
	let diff = moment(date).dayOfYear() - nullDate + delta;
	master.number = start+diff;

	let groupeId = master.number % 4;

	master.groupe = groupe[groupeId];

	return master;
}


// router.beforeEach((to, from, next) => {
// 	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);  
// 	const currentUser = store.state.currentUser;

// 	if(requiresAuth && !currentUser) {
// 		next('/login');
// 	} else if(to.path == "/login" && currentUser) {
// 		next('/');
// 	} else {
// 		next();
// 	}
// });