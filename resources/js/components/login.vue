<template>

  <div class="black">
	<div class="card border border-dark rounded">
        <router-link to="/login">
      		<img style='margin: 35px; margin-bottom: 22px;' width='250' height=auto src='images/logoBlack.png' @click="onScreen=true">
      	</router-link>
        <div class="text-center">
			<div class="font-weight-bold">Авторизация</div>
			<p class="text-extra-small text-dark offset-top-4">введите ниже данные,</br> указанные при регистрации в системе</p>
        </div>
 
		<div class="mx-4">

			<form class="" method="post" @submit.prevent="loginUser" @keydown="form.errors.clear($event.target.name)">

	            <div class="form-group mb-4">
	            	<div class="input-group input-group">
	            		<span class="input-group-prepend">
	            			<span class="input-group-text input-group-icon input-group-addon-inverse">
	            				<span class="fas fa-user"></span>
	            			</span>
	            		</span>
		                <input class="form-control" id="email" placeholder="Электронная почта" type="email" name="email" v-model="form.email">
	              	</div>
	              	<span class="text-danger small" v-if="form.errors.has('email')" v-text="form.errors.get('email')"></span>
	            </div>

	            <div class="form-group mb-4">
              		<div class="input-group input-group">
              			<span class="input-group-prepend">
              				<span class="input-group-text input-group-icon input-group-addon-inverse">
              					<span class="fas fa-lock"></span>
              				</span>
              			</span>
		                <input class="form-control" id="password" placeholder="Пароль" type="password" name="password" v-model="form.password">
              		</div>
              		<span class="text-danger small" v-if="form.errors.has('password')" v-text="form.errors.get('password')"></span>
            	</div>

	            <div class="form-group">
	              	<div class="custom-control custom-checkbox">
	                	<input class="custom-control-input" id="remember" name="remember" value="true" type="checkbox" v-model="form.remember">
	               		<label class="custom-control-label" for="remember">
	                  		<span class="">запомнить меня</span>
	                	</label>
	              </div>
	            </div>

            	<button class="btn btn-block btn-primary mb-3" type="submit" :disabled="form.errors.any()">
            		Войти 
            	</button>            	

          	</form>

	        <div class="">
	          	<router-link class="" to="/password/reset">Забыли пароль?</router-link>
	            <div class="mb-4">Нет аккаунта? <router-link class="" to="/registration">Пройдите регистрацию</router-link>.</div>
	        </div>	        

        	<button class="btn btn-block btn-secondary btn-sm mb-4" @click.prevent="loginAsGuest">
        		Статистика отправки материала
        	</button>        	
        	<button class="btn btn-block btn-secondary btn-sm mb-4" @click.prevent="showMasterInfo">
        		Иноформация о мастере
        	</button>

		</div>

	</div>

  </div>
</template>

<script>
 	import {login} from '../utilites/helpers';
 	import {putUserToLocalStorage} from '../utilites/helpers';

	export default {
		name: 'login',
		data() {
			return {
				form: new Form({
					email: '',
					password: '',
			        remember: '',
				}),
        
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
			            if(response.status === 200) 
			            {
			            	putUserToLocalStorage();
            				this.$router.push('/data/statistic');
			            }
		          })
		          .catch(errors => {
		            console.log(errors.response);
		            this.$store.commit('loginFailed', errors.response);
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