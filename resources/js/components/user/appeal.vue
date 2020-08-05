<template>
	<div class="py-8">
		<div class="meal-txt text-4xl" @click="showMenu">Привет, {{appeal()}}</div>
		<div class="flex flex-col mt-16" v-show="showUserMenu">
			<span class="py-2 mt-4 meal-txt text-4xl " @click="$router.push('/account/info')">ПРОФИЛЬ</span>
			<span class="py-2 mt-4 meal-txt text-4xl hidden" @click="$router.push('/cooks')">Наши повора</span>
			<span class="py-2 mt-4 meal-txt text-4xl hidden" @click="$router.push('/cook')">Кухня</span>
			<span class="py-2 mt-4 meal-txt text-4xl " @click="logout">ВЫЙТИ ИЗ СИСТЕМЫ</span>
			<svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto mt-16" @click="hideMenu">
				<path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20zM30 18L18 30M18 18l12 12" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'appeal',
		data() {
			return {
				user: {},
				showUserMenu: false,
			}
		},
		methods: {
			showMenu() {
				this.showUserMenu = true;
				this.$emit('expand');
			},
			hideMenu() {
				this.showUserMenu = false;
				this.$emit('collapse');
			},
			appeal() {
				if(this.user.first_name) {
					return this.user.first_name;
				}

				return this.currentUser.email;
			},
			logout() {
				axios.post('/logout')
				  .then(response => {
		            this.$store.commit('logout');
		            this.$router.push('/login');
				  })
				  .catch(error => {
				  	console.log(error);
				  	this.$store.commit('logout');
				    window.location.replace('/');
				  });		 
			},
		},
		computed: {
			currentUser() {
				return Store.getters.currentUser;
			},
		},
		created() {
			//get all user details  
			axios.get('/app/web/sort/of/how/i/will/mess/you/up/account/info')
			  .then(response => {
			    if(response.data === "") {
				    // console.log(response.data.first_name);
				    this.user = {};
			    } 
		    	this.user = response.data;
			  })
			  .catch(error => {
			    console.log(error);
			  });
		}
	}
</script>