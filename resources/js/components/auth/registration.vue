<template>
	<div class="relative w-screen h-screen flex flex-col bg-gray-900">
		<div class="bg-gray-100 rounded w-3/4 sm:max-w-xs sm:h-3/4 mx-auto my-auto px-6">
	        <router-link to="/login">
	      		<img src='/img/mainLogoBundedBox.svg' class="mx-auto mt-12 w-48" @click="onScreen=true" style="opacity: .82">
	      	</router-link>
	        <div class="text-center mt-8">
				<div class="font-bold text-sm text-gray-800 uppercase">Регистрация</div>
				<p class="text-xs text-gray-700 mt-1 ">Все поля обязательны для заполнения</p>
	        </div>
	 
			<div class="mt-8 mx-6 mb-8">

				<form class="" method="post" @submit.prevent="createNewUser" @keydown="form.errors.clear($event.target.name)">

		            <div :class="form.errors.has('email') ? 'border-red-700' : ''"class="inline-flex border border-gray-600 w-full rounded overflow-hidden" >
	            		<img src="/img/user.svg" alt="" class="ml-2 my-1 h-4 w-4">
		                <input class="w-full pl-2 outline-none appearance-none bg-gray-100" id="email" placeholder="Электронная почта" type="email" name="email" v-model="form.email">
		            </div>

		            <div class="inline-flex border mt-4 border-gray-600 w-full rounded">
		            	<img src="/img/locker.svg" alt="" class="ml-2 my-1 h-4 w-4">
		                <input class="w-full pl-2 outline-none appearance-none bg-gray-100" id="password" placeholder="Пароль" type="password" name="password" v-model="form.password">
	              		<span class="text-danger small" v-if="form.errors.has('password')" v-text="form.errors.get('password')"></span>
	            	</div>

		            <div class="inline-flex border mt-4 border-gray-600 w-full rounded">
		            	<img src="/img/locker.svg" alt="" class="ml-2 my-1 h-4 w-4">
		                <input class="w-full pl-2 outline-none appearance-none bg-gray-100" id="password_confirmation" placeholder="Повторите пароль" type="password" name="password_confirmation" v-model="form.password_confirmation">
	              		<span class="text-danger small" v-if="form.errors.has('password_confirmation')" v-text="form.errors.get('password_confirmation')"></span>
	            	</div>

					<button class="block bg-blue-500 rounded mt-6 w-full h-8 outline-none text-xs font-bold text-white uppercase" type="submit" :disabled="form.errors.any()">Зарегистрироваться</button>
	          	</form>     

	        </div>   
	           
		</div>

		<span class="absolute bottom-0 inline-block w-screen my-8 text-xxs text-gray-500 text-center px-auto">QuadrantBubbles 2020</span> 
	</div>

</template>
<script>
	import {putUserToLocalStorage} from '../../utilites/helpers';

	export default {
		name: 'registration',
		data() {
			return {
				form: new Form({
					email: '',
					password: '',
					password_confirmation: '',
				}),
			}
		},
		methods: {
			createNewUser() {
		        this.$store.dispatch('login');
				axios.post('/register', this.$data.form)
				  .then(response => {
			            if(response.status === 201) 
			            {
			            	putUserToLocalStorage();
            				this.$router.push('/meal');
			            }
				  })
				  .catch(error => {
						console.log(error);
						this.$store.commit('loginFailed', error.response);
						this.$router.back();
				  });
				 
			}
		}

	}
</script>
<style scoped>

</style>