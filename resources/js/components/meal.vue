<style>
	.meal-txt {
		color: rgba(113, 128, 150, 1);
		font-family: 'Amatic SC';
	}
	.bw {
		padding: 14px;
		opacity: 70%;
		filter: grayscale(90%);

	}
	.active {
		box-shadow: 0 25px 50px -12px rgba(0,0,0, .25);
	}
	.rate {
		color: #E2C644;
	}
	.opacity-80 {
		opacity: 70%;
	}
</style>
<template>
	<div class="w-full h-full bg-gray-800 text-center">

		<!-- login block -->
		<section class="py-8" v-show="!order.status">
			<div  @click="$router.push('/login')" v-if="!isLoggedIn" class="flex items-center justify-center w-2/3 max-w-md mx-auto">
				<div v-if="accent" class="bg-gray-100 border border-2 border-gray-300 px-6 py-2 meal-txt text-2xl rounded-lg mt-2">Сначала войди в систему</div>
				<div v-else class="border border-2 border-gray-300 px-6 py-2 meal-txt text-2xl rounded-lg mt-2">Войди в систему</div>
			</div>
			<div v-else class="meal-txt text-4xl" @click="showUserMenu=true">Привет, {{appeal()}}</div>
		</section>

		<section class="py-8"  v-show="order.status">
			<img src="/img/face.svg" alt="avatar" class="h-24 w-24 mx-auto p-4 hover:border border-gray-300 opacity-80" @click="showUserMenu=true">
		</section>

		<!-- interactive section inactive if not logged in -->
		<div class="relative">
			<div class="absolute z-10 inset-0" :class="!isLoggedIn ? '':'hidden'" @click="scrollTop"></div>
			<div class="absolute z-10 inset-0 bg-gray-800" :class="showUserMenu ? '':'hidden'">
				<div class="flex flex-col mt-16">
					<span class="py-2 mt-4 meal-txt text-4xl " @click="$router.push('/account/info')">ПРОФИЛЬ</span>
					<span class="py-2 mt-4 meal-txt text-4xl " @click="$router.push('/cooks')">Наши повора</span>
					<span class="py-2 mt-4 meal-txt text-4xl " @click="$router.push('/cook')">Кухня</span>
					<span class="py-2 mt-4 meal-txt text-4xl " @click="logout">ВЫЙТИ ИЗ СИСТЕМЫ</span>
					<svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto mt-16" @click="showUserMenu=false">
						<path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20zM30 18L18 30M18 18l12 12" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
			</div>
			<!-- place block -->
			<section class="pt-16 pb-4" v-show="!order.status">
				<span class="meal-txt text-4xl">Отметь, где ты будешь сегодня?</span>
				<div class="container mx-auto max-w-2xl flex justify-around pt-8">
					<div class="w-2/5 ">
						<img src="/img/bungalo.jpg" alt="" :class="hotel ? 'active' : 'bw'" class="rounded-full border border-4 border-gray-300" @click="markHotel">
					</div>
					<div class="w-2/5 ">
						<img src="/img/island.jpg" alt="":class="island ? 'active' : 'bw'" class="rounded-full border border-4 border-gray-300" @click="markIsland">
					</div>
				</div>
			</section>
			<!-- choose meal block -->
			<section class="mt-6">
				<span class="block meal-txt text-4xl pt-4 pb-4" v-show="!order.status">Выбери себе еду:</span>
				<!-- full menu for choose from -->
				<div class="container mx-auto md:max-w-2xl pt-8 flex justify-center flex-wrap " v-if="!selected.status">
					<foodmenu :menu="menu" @select="selectDish"></foodmenu>
				</div>
				<!-- one item has been choosen -->
				<div v-else class="container mx-auto">
					<foodbox :img="selected.img" alt="" class="w-2/5 h-full mx-auto"/>
					<span class="block meal-txt text-3xl leading-none mt-2 px-2">{{appeal()}}, </br>сегодня, {{this.moment()}}, твоя {{selected.rus}} будет ждать тебя </br>{{msg}} </span>
					<!-- buttons for compete or change order -->
					<div class="flex justify-center mt-4 px-2" v-show="!showWarning">
						<div class="border border-2 border-gray-300 px-3 py-2 meal-txt text-2xl rounded-lg mx-2" @click="placeOrder" v-show="!orderCompleted">Сохранить заказ</div>
						<div class="border border-2 border-gray-300 px-3 py-2 meal-txt text-2xl rounded-lg mx-2" @click="selected={}" v-show="!orderCompleted">Изменить заказ</div>
						<!-- order completed stamp -->
						<div class="border border-2 border-gray-300 h-32 w-32 px-3 py-6 meal-txt text-2xl rounded-full mt-6" v-show="orderCompleted">Заказ оформлен</div>
					</div>
					<!-- worning about no place selected -->
					<div class="flex justify-center mt-4 px-2" v-show="showWarning">
						<div class="border border-2 border-gray-300 px-6 py-2 meal-txt text-2xl rounded-lg mx-2" @click="selected={}" v-show="!orderCompleted">Сначала отметь, где ты будешь сегодня</div>
					</div>
				</div>
			</section>

			<!-- rate block -->
			<section class="mt-8">
				<span class="block meal-txt text-4xl pt-8 pb-4">Оцени, как поел вчера:</span>
				<span class="flex justify-center align-middle">
					<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" v-for="i in 5" :key=i :class="i>raiting ? 'text-gray-500' : 'rate'" class="m-3 fill-current" @click="rate(i)">
						<path d="M17 8.39a1.11 1.11 0 00-.645-2l-4.5-.17a.115.115 0 01-.1-.075l-1.555-4.2a1.11 1.11 0 00-2.085 0L6.565 6.16a.115.115 0 01-.1.075l-4.5.17a1.11 1.11 0 00-.645 2l3.53 2.775a.115.115 0 01.04.12l-1.215 4.305a1.11 1.11 0 001.69 1.225l3.73-2.5a.11.11 0 01.125 0l3.73 2.5a1.1 1.1 0 001.275 0 1.1 1.1 0 00.415-1.2l-1.225-4.32a.11.11 0 01.04-.12L17 8.39z" />
					</svg>
				</span>
				<span v-show="totalScore" class="text-xxs rate">Всего голосов{{this.overallRating.length}}. Средний балл {{totalScore}} </span>

				<section v-show="comments.length>=1" class="flex flex-col w-2/3 max-w-md mx-auto">
					<span  class="meal-txt text-2xl rate mt-6">Последние комментарии:</span>
					<div  v-for="item in comments" class="border border-2 border-gray-300 px-6 py-2 meal-txt text-2xl rounded-lg mt-2">
						{{item.msg}}<br>
						<span class="text-xxs font-mono rate">{{item.user.email}}</span>
					</div>
				</section>
				<span class="block meal-txt text-2xl pt-8 pb-4" @click="showComment=true">Хочешь оставить комментарий?</span>
				<section v-show="showComment" class="flex flex-col w-2/3 max-w-md mx-auto">
					<textarea name="" id="" cols="30" rows="9" v-model='comment' class="outline-none rounded p-1" />
					<div class="border border-2 border-gray-300 px-6 py-2 meal-txt text-2xl rounded-lg mt-2" @click="addComment">Оставить комментарий</div>
				</section>
			</section>

		</div> <!-- end of masking div -->


		<span class="block pt-16 pb-16 text-xxs text-gray-500" @click="countPlus">QuadrantBubbles 2020</span> 
	</div>
</template>
<script>
	import {logout} from '../utilites/helpers';
	import foodmenu from './meal/foodmenu.vue';
	import foodbox from './meal/foodbox.vue';

	export default {
		name: 'meal',
		components: {foodmenu, foodbox},
		data() {
			return {
				date: new Date(),
				user: {},
				island: false,
				hotel: false,
				msg: '',
				selected: {
					status: false,
					dish: '',
					img: '',
				},
				order: {
					status: false,
				},
				showWarning: false,
				orderCompleted: false,
				raiting: 0,
				overallRating: [],
				totalScore: 0,
				comment: '',
				comments: [],
				accent: false,
				showUserMenu: false,

				countIsland: 0,
				countHotel: 0,
				menu: [],
				chicken: 0,
				fish: 0,
				standart: 0,
				vegan: 0,
				noLactoze: 0,
				count: 0,
				showComment: false,
			}
		},
		created() {
			axios.get('/mealAviable')
			  .then(response => {
			    console.log(response);
			    this.menu = response.data;
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
		},
		methods: {
			moment() {
				return moment(this.date).format("DD MMMM");
			},
			logout() {
				axios.post('/logout')
				  .then(response => {
				  	console.log(response.data);
		            this.$store.commit('logout');
		            this.$router.push('/login');
				  })
				  .catch(error => {
				  	console.log(error);
				  	this.$store.commit('logout');
				    window.location.replace('/');
				  });		 
			},
			countPlus() {
				this.count++;
				if(this.count == 3) {
					Event.$emit('showTopMenu');
					this.$router.push('/home');
				}
			},
			scrollTop() {
				$('html, body').animate({ scrollTop: 0 }, 'fast');
				this.accent = true;
			},
			markIsland() {
				this.showWarning = false;
				this.island = true;
				this.hotel = false;
				this.msg = 'на острове Любви.';
			},
			markHotel() {
				this.showWarning = false;
				this.hotel = true;
				this.island = false;
				this.msg = 'в отеле.';
			},
			selectDish(item) {
				console.log(item);
				this.selected = item;
				this.selected.status=true;
			},
			placeOrder() {
				if(!this.msg) {
					this.showWarning=true;
					return;
				}
				this.order.status = true;
				axios.post('/order', 
					{
						user_id: this.currentUser.id,
						meal_id: this.selected.id,
						date: moment(this.date).format('YYYY-MM-DD'),
					})
					.then(response => {
						this.orderCompleted=true;
						console.log(response);
					})
					.catch(error => {
						console.log(error);
					});
								 				
			},
			rate(i) {
				this.raiting = i;
				let date = moment(this.date).subtract(1, 'days').format('YYYY-MM-DD');
				axios.post('/mealRaitng', {
						user_id: this.currentUser.id,
						date: date,
						rate: i,
				  })
				  .then(response => {
				  	axios.get('/mealRaitng/'+date)
				  	  .then(response => {
				  	  	this.overallRating = response.data;
				  	  	this.total();
				  	    console.log(response);
				  	  })
				  	  .catch(error => {
				  	    console.log(error);
				  	  });
				    console.log(response);
				  })
				  .catch(error => {
				    console.log(error);
				  });
				 
			},
			total() {
				let sum = this.overallRating.reduce(function(a, b){
				        return a + b;
				    }, 0);
				return this.totalScore = (sum/this.overallRating.length).float_num.toFixed(2);
			},
			addComment() {
				let date = moment(this.date).subtract(1, 'days').format('YYYY-MM-DD');
				axios.post('/comment', {
				    msg: this.comment,
				    date: date,
				  })
				  .then(response => {
				  	this.comment = '';
				  	axios.get('/comment/'+date)
				  	  .then(response => {
				  	  	this.comments = response.data;
				  	    console.log(response);
				  	  })
				  	  .catch(error => {
				  	    console.log(error);
				  	  });
				    console.log(response);
				  })
				  .catch(error => {
				    console.log(error);
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
		},

	}
</script>