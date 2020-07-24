@extends('layouts.main')
@section('content')
  <div class="container w-screen h-screen flex flex-col bg-gray-900">
	<div class="bg-gray-100 rounded w-3/4 mx-auto my-auto">
        <router-link to="/login">
      		<img src='/img/mainLogoBundedBox.svg' class="mx-auto mt-8 w-48" @click="onScreen=true">
      	</router-link>
        <div class="text-center mt-4">
			<div class="font-bold text-xs text-gray-800">Авторизация</div>
			<p class="text-xs text-gray-700 mt-1">введите ниже данные,</br> указанные при регистрации в системе</p>
        </div>
 
		<div class="mt-8 mx-6 mb-8">

			<form class="" method="post" @submit.prevent="loginUser" @keydown="form.errors.clear($event.target.name)">

	            <div class="inline-flex border border-gray-600 w-full rounded">
            		<img src="/img/mdi_person_outline.svg" alt="" class="">
	                <input class="w-full pl-2 outline-none" id="email" placeholder="Электронная почта" type="email" name="email" v-model="form.email">
	              	<span class="text-danger small" v-if="form.errors.has('email')" v-text="form.errors.get('email')"></span>
	            </div>

	            <div class="inline-flex border mt-2 border-gray-600 w-full rounded">
	            	<img src="/img/mdi_person_outline.svg" alt="" class="">
	                <input class="w-full pl-2 outline-none" id="password" placeholder="Пароль" type="password" name="password" v-model="form.password">
              		<span class="text-danger small" v-if="form.errors.has('password')" v-text="form.errors.get('password')"></span>
            	</div>

	            <div class="mt-4">
                	<input class="" id="remember" name="remember" value="true" type="checkbox" v-model="form.remember">
               		<label class="" for="remember">
                  		<span class="">запомнить меня</span>
                	</label>
	              </div>
	            </div>

            	<button class="bg-blue-500  rounded mt-2 mx-auto py-2 text-white" type="submit" :disabled="form.errors.any()">
            		Войти 
            	</button>            	

          	</form>

	        <div class="text-xs">
	          	<router-link class="text-blue-500" to="/password/reset">Забыли пароль?</router-link>
	            <div class="mb-4">Нет аккаунта? <router-link class="text-blue-500" to="/registration">Пройдите регистрацию</router-link>.</div>
	        </div>	        

		</div>

	</div>

  </div>
@endsection