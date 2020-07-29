@extends('layouts.main')
@section('content')
<div class="container w-screen h-screen flex flex-col bg-gray-900">
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

	            <div :class="2>1 ? 'border-red-500' : ''" class="inline-flex border border-gray-600 w-full rounded overflow-hidden" :>
            		<img src="/img/user.svg" alt="" class="ml-2 my-2">
	                <input class="w-full pl-2 outline-none" id="email" placeholder="Электронная почта" type="email" name="email" v-model="form.email">
	              	<span class="text-danger small" v-if="form.errors.has('email')" v-text="form.errors.get('email')"></span>
	            </div>

	            <div class="inline-flex border mt-2 border-gray-600 w-full rounded">
	            	<img src="/img/locker.svg" alt="" class="ml-1 py-1">
	                <input class="w-full pl-2 outline-none" id="password" placeholder="Пароль" type="password" name="password" v-model="form.password">
              		<span class="text-danger small" v-if="form.errors.has('password')" v-text="form.errors.get('password')"></span>
            	</div>

				<div class="block bg-blue-500 rounded mt-6" :disabled="form.errors.any()">
					<span class="flex items-center justify-center h-8 text-white uppercase">Войти</span>
				</div>
          	</form>

	        <div class="text-xs mt-8">
	          	<router-link class="text-blue-500" to="/password/reset">Забыли пароль?</router-link>
	            <div class="mb-4">Нет аккаунта? <router-link class="text-blue-500" to="/registration">Пройдите регистрацию</router-link>.</div>
	        </div>	        

        </div>   
        <span class="block my-8 text-xxs text-gray-500 text-center px-auto">QuadrantBubbles 2020</span>    
	</div>
</div>

@endsection