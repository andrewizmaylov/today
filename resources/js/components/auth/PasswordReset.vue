<template>
  <div class="black">
	<div class="card border border-dark rounded">
        <router-link to="/login">
      		<img style='margin: 35px; margin-bottom: 12px;' width='250' height=auto src='images/logoBlack.png'>
      	</router-link>
        <div class="text-center mb-5">
			<div class="font-weight-bold">Забыли пароль?</div>
        </div>
 
		<div class="mx-4">

			<form class="" method="post" @submit.prevent="resetPassword" @keydown="form.errors.clear($event.target.name)">

	            <div class="form-group mb-4">
	            	<div class="input-group input-group">
	            		<span class="input-group-prepend">
	            			<span class="input-group-text input-group-icon input-group-addon-inverse">
	            				<span class="fa fa-user"></span>
	            			</span>
	            		</span>
		                <input class="form-control" id="email" placeholder="Электронная почта" type="email" name="email" v-model="form.email">
	              	</div>
	              	<span class="text-danger small" v-if="form.errors.has('email')" v-text="form.errors.get('email')"></span>
	            </div>

	            

            	<button class="btn btn-block btn-primary mb-3" type="submit" :disabled="form.errors.any()">
            		Выслать ссылку на изменение пароля
            	</button>

          	</form>

	        <div class="">
	            <div class="mb-4">Нет аккаунта? <router-link class="" to="/registration">Пройдите регистрацию</router-link>.</div>
	        </div>

		</div>

	</div>

  </div>
</template>

<script>
	export default {
		name: 'paswword-reset',
		data() {
			return {
				form: new Form({
					email: ''
				}),
			}
		},
		methods: {
			resetPassword() {
				alert('rreset');
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