<template>

  <div class="black">
	<div class="card border border-dark rounded">
        <router-link to="/login">
      		<img style='margin: 35px; margin-bottom: 22px;' width='250' height=auto src='images/logoBlack.png' @click="onScreen=true">
      	</router-link>
        <div class="text-center">
			<div class="font-weight-bold">Регистрация</div>
			<p class="text-extra-small text-dark mb-4">Все поля обязательны для заполнения</p>
        </div>
 

		<div class="mx-4">

			<form class="text-left" method="post" @submit.prevent="createNewUser">

				<div class="form-group mb-4">
					<div class="input-group">
						<span class="input-group-prepend">
							<span class="input-group-text input-group-addon-inverse">
								<span class="fas fa-user"></span>
							</span>
						</span>
						<input class="form-control" id="email" placeholder="E-Mail" type="email" name="email" v-model="form.email">
					</div>
				</div>

				<div class="form-group mb-4">
					<div class="input-group">
						<span class="input-group-prepend">
							<span class="input-group-text input-group-addon-inverse">
								<span class="fas fa-lock"></span>
							</span>
						</span>
						<input class="form-control" id="password" placeholder="Password" type="password" name="password" v-model="form.password">
					</div>
				</div>

				<div class="form-group mb-4">
					<div class="input-group">
						<span class="input-group-prepend">
							<span class="input-group-text input-group-addon-inverse">
								<span class="fas fa-lock"></span>
							</span>
						</span>
						<input class="form-control" id="password_confirmation" placeholder="Repeat a password" type="password" name="password_confirmation" v-model="form.password_confirmation">
					</div>
				</div>

				<button class="btn btn-xs btn-icon btn-block btn-primary mb-5" type="submit">Зарегистрироваться 
					<span class="novi-icon icon mdi mdi-arrow-right-bold-circle-outline"></span>
				</button>
			</form>

		</div>


	</div>




  </div>
</template>
<script>
	import {putUserToLocalStorage} from '../utilites/helpers';

	export default {
		name: 'register',
		data() {
			return {
				form: {
					email: '',
					password: '',
					password_confirmation: '',
				}
			}
		},
		methods: {
			createNewUser() {
		        this.$store.dispatch('login');
				axios.post('/register', this.$data.form)
				  .then(response => {
			            if(response.status === 200) 
			            {
			            	putUserToLocalStorage();
            				this.$router.push('/account');
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
  .small {
    font-size: 0.8em;
    padding-left: 12px;
  }
  .black {
  	background-color: #1d1d1d;
  }
</style>