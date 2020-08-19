<template>
	<div class="w-full h-full bg-gray-800 text-center relative">

		<!-- login block -->
		<section class="">
			<div  @click="$router.push({name: 'login'})" v-show="!isLoggedIn" class="py-8 flex items-center justify-center w-2/3 max-w-md mx-auto">
				<div v-if="accent" class="bg-gray-100 border border-2 border-gray-300 px-6 py-2 meal-txt text-2xl rounded-lg mt-2">Сначала войди в систему</div>
				<div v-else class="border border-2 border-gray-300 px-6 py-2 meal-txt text-2xl rounded-lg mt-2">Войди в систему</div>
			</div>
		</section>
		<appeal v-show="isLoggedIn" v-on:expand="showUserMenu=true" v-on:collapse="showUserMenu=false" :class="showUserMenu ? 'absolute z-10 inset-0 bg-gray-800 -mt-8' : ''"></appeal>

		<!-- interactive section inactive if not logged in -->
		<div class="relative">
			<div class="absolute z-10 inset-0" :class="!isLoggedIn ? '':'hidden'" @click="scrollTop"></div>

			<!-- place block -->
			<section class="pt-16 pb-8 mx-auto" v-show="!order.complete">
				<span class="meal-txt text-4xl">Отметь, где ты будешь завтра?</span>
				<div class="container mx-auto max-w-lg flex justify-around pt-8">
					<div class="w-2/5 flex flex-col" @click="markHotel">
						<img src="/img/bungalo.jpg" alt="" :class="hotel ? 'active' : 'bw'" class="rounded-full border border-4 border-gray-300">
						<span class="meal-txt text-5xl mt-2">Отель</span>
					</div>
					<div class="w-2/5 flex flex-col" @click="markIsland">
						<img src="/img/island.jpg" alt="":class="island ? 'active' : 'bw'" class="rounded-full border border-4 border-gray-300" >
						<span class="meal-txt text-5xl mt-2">Остров</span>
					</div>
				</div>
			</section>
			<!-- choose meal block -->
			<section class="mt-6 px-6">
				<span class="block meal-txt text-4xl pt-4 pb-4" v-show="!order.complete">Выбери себе еду:</span>
				<!-- full menu for choose from -->
				<div class="container mx-auto md:max-w-2xl pt-8 flex justify-center flex-wrap " v-if="!selected.status">
					<foodmenu :menu="today.data" :title="today.title" @select="makeOrder"></foodmenu>
				</div>
				<!-- one item has been choosen -->
				<div v-else class="container mx-auto border border-gray-300 bg-gray-300 rounded px-4 py-6 max-w-md " style="background-color: #353F50;">
					<span class="block meal-txt text-3xl text-gray-800 leading-none mt-2 px-4">Завтра, {{this.moment()}}, твоя {{selected.box.rus}} будет ждать тебя {{selected.msg}} </span>
					<foodbox :item="selected.box" alt="" class="w-2/5 max-w-sm h-full mx-auto mt-4"/>
					<!-- buttons for compete or change order -->
					<div class="flex justify-center mt-4 px-2" v-show="!showWarning">
						<div class="bg-gray-200 px-3 py-2 meal-txt text-2xl rounded-lg mx-2 border border-gray-600 border-2 shadow" @click="placeOrder" v-show="!order.complete"><span class="text-gray-700">Сохранить заказ</span></div>
						<div class="bg-gray-200 px-3 py-2 meal-txt text-2xl rounded-lg mx-2 border border-gray-600 border-2 shadow" @click="changeOrder" v-show="!order.complete"><span class="text-gray-700">Изменить заказ</span></div>
						<!-- order completed stamp -->
					</div>

					<!-- worning about no place selected -->
					<div class="flex justify-center mt-4 px-2" v-show="showWarning">
						<div class="bg-gray-200 px-3 py-2 meal-txt text-2xl rounded-lg mx-2 border border-gray-600 border-2 shadow" @click="selected={}" v-show="!order.complete"><span class="text-gray-700">Сначала отметь, где ты будешь завтра</span></div>
					</div>
					<!-- change order btn -->
					<section class="flex flex-col items-center mt-4 meal-txt text-gray-300 text-2xl"  v-show="order.complete">
						<!-- <div class="border border-2 border-gray-300 h-32 w-32 px-3 py-6 meal-txt text-2xl rounded-full mt-6" v-show="order.complete" @click="">Заказ оформлен</div> -->
						<span class="bg-gray-200 px-3 py-2 meal-txt text-gray-700 text-xl rounded-lg mx-2 mb-2 border border-gray-600 border-2 shadow" @click="orderCanChange" v-if="timeBefore">Внести изменения в заказ</span>
						<span class="" v-else>Внести изменения в заказ</span>
						<span class=""> можно до 10 часов утра завтрашнего дня. </br>Спасибо за понимание.</span>
					</section>
				</div>
			</section>

			<!-- rate block -->
			<raitingmeal></raitingmeal>

		</div> <!-- end of masking div -->


		<span class="block pt-16 pb-16 text-xxs text-gray-500" @click="countPlus">QuadrantBubbles 2020</span> 
	</div>
</template>
<script>
	import {logout} from '../utilites/helpers';
	import foodmenu from './meal/foodmenu.vue';
	import foodbox from './meal/foodbox.vue';
	import raitingmeal from './meal/raitingmeal.vue';
	import appeal from './user/appeal.vue';

	export default {
		name: 'meal',
		components: {foodmenu, foodbox, raitingmeal, appeal},
		data() {
			return {
				date: new Date(),
				accent: false,
				user: {},
				island: false,
				hotel: false,
				selected: {
					box: {},
					msg: '',
					place: '',
					status: false,
				},
				order: {
					selected: {
					},
					complete: false,
				},
				showWarning: false,
				orderCanBeChanged: false,
				endTime: moment(this.date).add(1, 'days').format("YYYY-MM-DD 10:00"),

				// full set of meal and for today choose
				menu: [],
				today: {
					data: [],
					title: 'rus'
				},
				//iaster eggs count
				count: 0,

				//react on event from appeal component
				showUserMenu: false,
			}
		},
		created() {
			//full list of meal aviable for cooking ever
			axios.get('/meal')
			  .then(response => {
// console.log(response);
			    this.menu = response.data;
			    this.setToday(this.menuDate());
			  })
			  .catch(error => {
			    console.log(error);
			  });

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

			//check if order exists for user for today
			axios.get('/orderUserDate/'+moment(this.date).add(1, 'days').format('YYYY-MM-DD'))
			  .then(response => {
// console.log('/orderUserDate/{date}');
			    if(response.data.meal_id) {
				    var index = response.data.meal_id - 1;
// console.log(response.data);
				    this.selected.box = this.menu[index];
				    this.selected.msg = response.data.msg;
				    this.selected.status = true;
				    this.order.complete = true;
			    } else {
					this.selected.status = false;
				    this.order.complete = false;
			    }
			  })
			  .catch(error => {
			    console.log(error);
			  });
		},
		methods: {
			moment() {
				return moment(this.date).add(1, 'days').format("DD MMMM");
			},
			menuDate() {
				return moment(this.date).add(1, 'days').format("YYYY-MM-DD");
			},

			// 
			setToday(date) {
				axios.get('/menu/'+date)
				  .then(response => {
				  		if(response.data === []) {
				  			this.today.data = this.menu.filter(item => item.status==true);
				  			return;
				  		}
					    let keys = response.data;
					    var index;
					    var td = [];
					    for(index=0; index<keys.length; index++) {
					    	td.push(this.menu.filter(item => item.id === keys[index]).shift());
					    }
					    this.today.data = td;
				  })
				  .catch(error => {
				    console.log(error);
				  });
				},
			//easter eag
			countPlus() {
				this.count++;
				if(this.count == 3) {
					Event.$emit('showTopMenu');
					this.$router.push('/home');
				}
			},
			//if user is not logged in and try to interact with sistem
			scrollTop() {
				$('html, body').animate({ scrollTop: 0 }, 'fast');
				this.accent = true;
			},

			markIsland() {
				this.showWarning = false;
				this.island = true;
				this.hotel = false;
				this.selected.msg = 'на острове Любви.';
				this.selected.place = 'island';
			},
			markHotel() {
				this.showWarning = false;
				this.hotel = true;
				this.island = false;
				this.selected.msg = 'в отеле.';
				this.selected.place = 'hotel';
			},

			//all crud about order
			makeOrder(item) {
				this.selected.box = item;
				this.selected.status=true;
			},
			changeOrder() {
				this.selected.box = {};
				this.selected.status=false;				
			},
			orderCanChange() {
				if(moment(this.date).isBefore(this.endTime)) {
					this.changeOrder();
				} else {
					alert('You can not change the order. Too late');
				}
			},
			placeOrder() {
				if(!this.selected.msg) {
					this.showWarning=true;
					return;
				}
				axios.post('/order', 
					{
						user_id: this.currentUser.id,
						meal_id: this.selected.box.id,
						date: moment(this.date).add(1, 'days').format('YYYY-MM-DD'),
						msg: this.selected.msg,
						place: this.selected.place,
					})
					.then(response => {
						this.order.complete=true;
					})
					.catch(error => {
						console.log(error);
						this.$router.push({name: 'login'});
					});
								 				
			},

			appeal() {
				if(this.user.first_name) {
					return this.user.first_name;
				}

				return this.currentUser.email;
			},

		},
		mounted() {
			Event.$emit('hideTopMenu');
		},
		computed: {
			isLoggedIn() {
				return Store.getters.isLoggedIn;
			},
			currentUser() {
				return Store.getters.currentUser;
			},
			timeBefore() {
				if(moment(this.date).isBefore(this.endTime)) {
					return true;
				} else {
					return false;
				}
			}
		},

	}
</script>