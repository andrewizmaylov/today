<template>
	<div class="w-full h-screen bg-gray-800 text-center">
		<div class="flex flex-col" :class="!chooseOccupation ? '':'hidden'">


					<div class="flex justify-center mt-16">
						<form enctype="multipart/form-data" >
							<div class="">
							    <label for="file">
							        <img :src="avatar" class="h-32 w-32 rounded-full border border-gray-100" :title="this.imageText" />
							    </label>

							    <input class="hidden" id="file" type="file" ref="myFiles" @change="changeAvatar()" :disabled="this.user_id ? false : true"/>
							</div>				
						</form>
					</div>


			<div class="container mx-auto mt-8 w-2/3 max-w-sm border border-gray-300 rounded text-gray-300">
				<form @submit.prevent="submitForm" @input="form.errors.clear($event.target.name)" class="text-left">
					<div class="flex flex-col">
						<div class="flex flex-col px-4 mt-2">
							<label for="last_name" class="-mx-2 text-xs">Фамилия</label>
							<input type="text" class="text-base text-gray-800 px-2 outline-none border border-gray-300 rounded" :class="{ isInvalid: check('last_name') }" id="last_name" name="last_name" placeholder="" v-model="form.last_name" >
							<!-- <span class="text-danger small" v-if="errorMessage('last_name')" v-text="form.errors.get('last_name')"></span> -->
						</div>
						<div class="flex flex-col px-4 mt-2">
							<label for="first_name" class="-mx-2 text-xs">Имя</label>
							<input type="text" class="text-base text-gray-800 px-2 outline-none border border-gray-300 rounded" :class="{ isInvalid: check('first_name') }" id="first_name" name="first_name" placeholder="" v-model="form.first_name" >
							<!-- <span class="text-danger small" v-if="errorMessage('second_name')" v-text="form.errors.get('second_name')"></span> -->
						</div>
						<div class="flex flex-col px-4 mt-2">
							<label for="second_name" class="-mx-2 text-xs">Отчество</label>
							<input type="text"  class="text-base text-gray-800 px-2 outline-none border border-gray-300 rounded" :class="{ isInvalid: check('second_name') }" id="second_name" name="second_name" placeholder="" v-model="form.second_name" >
							<!-- <span class="text-danger small" v-if="errorMessage('second_name')" v-text="form.errors.get('second_name')"></span>				 -->
						</div>
					</div>
					<div class="flex flex-col px-4 mt-2">
						<div class="">
							<label for="birthday" class="-mx-2 text-xs">Дата рождения</label>
							<input class="w-full text-base text-gray-800 px-2 outline-none border border-gray-300 rounded" :class="{ isInvalid: check('birthday') }" type="date" id="birthday" name="birthday" v-model="form.birthday">
						</div>
						<div class="flex flex-col mt-1">
							<label for="gender" class="-mx-2 text-xs">Пол</label>
						    <select class="w-full text-base text-gray-800 px-2 py-1 outline-none border border-gray-300 rounded" :class="{ isInvalid: check('gender') }" id="gender" name="gender" v-model="form.gender">
						      <option selected>Вы...</option>
						      <option value="male">Я мужчина</option>
						      <option value="female">Я женщина</option>
						    </select>
						</div>

					</div>
					<div class="px-4 mt-6 mb-2">
							<button type="submit" class="w-full border border-gray-300 px-3 py-2 rounded my-6" :disabled="form.errors.any()">{{formBtn}} данные</button>
					</div>
				</form>
			</div>
			<div class="container mx-auto mt-2 py-1 w-2/3 max-w-sm">
				<button type="button" class="w-full border border-white text-gray-300 px-3 py-2 rounded my-6" @click="chooseOccupation=true">
	  				{{occupationBtn}}
				</button>
			</div>
			<img src="/img/x-circle-white.svg" alt="close window" @click="$router.push('/meal')" class="mx-auto mt-16 w-16 h-16">
		</div>



		<div :class="chooseOccupation ? '':'hidden'" class="flex justify-center py-12">
			<div class="w-4/5 max-w-md bg-gray-100 rounded flex flex-col ">

				<div class="flex my-6 items-center px-4">
					<span class="mr-auto text-left text-sm text-gray-800">Выберите из списка вашу специальность</span>
					<img src="/img/x-circle.svg" alt="close window" @click="chooseOccupation=false" class="w-8 h-8">
		        </div>
				<div class="flex flex-col text-left pl-8">
					<form>
						<div class="" v-for="item in departments">
						  <input class="" type="checkbox" :id="item.id" :value="item.id" v-model="occupations" >
						  <label class="custom-control-label" :for="item.id">{{item.russian}}</label>
						</div>
					</form>
				</div>
				<div class="text-center my-6" @click="sendMesage">
					<span class="text-center text-xs text-gray-800 leading-3">
						Eсли ваша специальность отсутствует в списке, сообщите об этом администрации ресурса
					</span>
				</div>
				<div class="flex justify-center my-8">
					<button type="button" class="bg-gray-300 rounded px-4 py-2 mx-2 outline-none" @click="chooseOccupation=false">Отмена</button>
					<button type="button" class="bg-blue-400 rounded px-3 py-2 mx-2 outline-none" @click="changeOccupation">Изменить</button>
		        </div>

	        </div>
	    </div> <!-- end of occupation block -->

	</div>
</template>
<script>
	import basicLogic from './basicLogic.vue';

	export default {
		name: 'account-info',				
		extends: basicLogic,
		data() {
			return {
				departments: [], //all departments as it exists in db
				occupations: [], //user linked occupations on project
				avatar: '', //default or uploaded 
				chooseOccupation: false
			}
		},
		created() {
			//set the list from occupation table
			axios.get('/api/occupation')
				.then(response => {
					this.departments = response.data;
				})
			// get avatar file name from DB or set generic
			this.getAvatar();
			this.getOccupation();
		},
		computed: {
			occupationBtn() {
				if(this.occupations.length<1) {
					return '  Выберите специальность  ';
				}
				let row = '';
				this.occupations.forEach(id => {
					this.departments.filter(item => {
						if(item.id === id) {
							// row.push(item.russian);
							row = row +item.russian + ', ';
						}
					})
				})
				return 'Вы ' +row+'верно?';
			},
			imageText() {
				if(this.user_id) {
					return 'Выбрать фото профиля';
				}
				return 'Загрузить аватар можно после заполнения всех полей формы';
			}
		},
		methods: {
			getOccupation() {
				axios.get('/user/occupation')
					.then(response => this.occupations = response.data)
			},
			changeOccupation() {
				axios.post('/user/occupation', this.occupations)
				  .then(response => {
					this.chooseOccupation = false;  
				  })
				  .catch(error => {
				    console.log(error);
				  });		 
			},
			changeAvatar() {
				let formData = new FormData();

				formData.append('file', this.$refs.myFiles.files[0]);

				axios.post('/user/avatar', formData, {
			        headers: {
			          'Content-Type': 'multipart/form-data'
			        }
				})
					.then(response => {
						window.location.reload();
						// console.log('response');
						// window.location.replace('/#/account/info');
					})
			},
			getAvatar() {
				axios.get('/user/avatar')
					.then(response => {
					// console.log(response.data);
					if(!response.data) {
						this.avatar = "/img/face.svg";
					} else {
						this.avatar = "/uploads/avatars/" .concat(response.data);
					}
					})
					.catch(error => {
						console.log(error);
					});
				},
			sendMesage() {
				alert('text me +79778128596');
			},
		},
	}
</script>
<style scoped>
	.isInvalid {
		border: red 1px solid;
	}
</style>