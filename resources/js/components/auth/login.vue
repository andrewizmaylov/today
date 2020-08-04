<template>
	<div class="relative w-screen h-screen flex flex-col bg-gray-900">
		<div class="bg-gray-100 rounded w-3/4 sm:max-w-xs sm:h-3/4 mx-auto my-auto px-6">
	        <router-link to="/login">
	      		<img src='/img/mainLogoBundedBox.svg' class="mx-auto mt-12 w-48" @click="onScreen=true" style="opacity: .82">
	      	</router-link>
	        <div class="text-center mt-8">
				<div class="font-bold text-sm text-gray-800 uppercase">Авторизация</div>
				<p class="text-xs text-gray-700 mt-1 ">введите ниже данные,</br>указанные при регистрации в системе</p>
	        </div>
	 
			<div class="mt-8 mx-6 mb-8">

				<form class="" method="post" @submit.prevent="loginUser" @keydown="form.errors.clear($event.target.name)">

		            <div :class="form.errors.has('email') ? 'border-red-700' : ''"class="inline-flex border border-gray-600 w-full rounded overflow-hidden" >
	            		<img src="/img/user.svg" alt="" class="ml-2 my-1 h-4 w-4">
		                <input class="w-full pl-2 outline-none appearance-none bg-gray-100" id="email" placeholder="Электронная почта" type="email" name="email" v-model="form.email">
		            </div>

		            <div class="inline-flex border mt-2 border-gray-600 w-full rounded">
		            	<img src="/img/locker.svg" alt="" class="ml-2 my-1 h-4 w-4">
		                <input class="w-full pl-2 outline-none appearance-none bg-gray-100" id="password" placeholder="Пароль" type="password" name="password" v-model="form.password">
	              		<span class="text-danger small" v-if="form.errors.has('password')" v-text="form.errors.get('password')"></span>
	            	</div>
					
					<button class="block bg-blue-500 rounded mt-6 w-full h-8 outline-none text-xs font-bold text-white uppercase" type="submit" :disabled="form.errors.any()">Войти</button>
		
	          	</form>

		        <div class="text-xs mt-8">
		          	<router-link class="text-blue-500" to="/password/reset">Забыли пароль?</router-link>
		            <div class="mb-4">Нет аккаунта? <router-link class="text-blue-500" to="/registration">Пройдите регистрацию</router-link>.</div>
		        </div>	        

	        </div>   
	           
		</div>

		<span class="absolute bottom-0 inline-block w-screen my-8 text-xxs text-gray-500 text-center px-auto" @click="countPlus">QuadrantBubbles 2020</span> 
	</div>
</template>

<script>
 	// import {login} from '../../utilites/helpers';
 	import {putUserToLocalStorage} from '../../utilites/helpers';

	export default {
		name: 'login',
		data() {
			return {
				form: new Form({
					email: '',
					password: '',
			        remember: '',
				}),
				count: 0,
        
			}
		},
		methods: {
			loginUser() {
		        this.$store.dispatch('login');
		        this.login(this.$data.form);
			},

			loginAsGuest() {
		        this.$store.dispatch('login');
		        this.login({email: "guest@dom-2.app", password: '12345678'});
			},

			showMasterInfo() {
				this.$router.push('/data/master');
			},

			login(user) {
		        axios.post('/login', user)
		          .then(response => {
		          	console.log('login user proceded here response');
		          	console.log(response);

			            if(response.status === 200) 
			            {
			            	putUserToLocalStorage();
			            	let path = '';
			            	axios.get('/cookdetector')
			            	  .then(response => {
			            	  	console.log('cookdetector');
			            	  	console.log(response.data);
			            	  	if(response.data === 1) {
			            	  		path = '/cook';
			            	  	} else {
			            	  		path = '/meal';
			            	  	}
			            	  	this.$router.push(path);
			            	  })
			            	  .catch(error => {
			            	    console.log(error);
			            	  });
            				
			            }
		          })
		          .catch(errors => {
		            console.log(errors.response);
		            this.$store.commit('loginFailed', errors.response);
		          });	
			},
			countPlus() {
				this.count++;
				if(this.count == 10) {
					Event.$emit('showTopMenu');
					this.$router.push('/meal');
				}
			}
		}

	}
</script>