<template>
	<div class="w-full h-full bg-gray-800 text-center relative">
		<!-- top appeal for user with user menu from appeal component -->
		<appeal v-on:expand="showUserMenu=true" v-on:collapse="showUserMenu=false" :class="showUserMenu ? 'absolute z-10 inset-0 bg-gray-800' : ''"></appeal>
<!-- set menu page -->
		<div class="">
			<section> <!-- pillow navigation -->
				<ul class="flex border-b justify-center px-6">
				    <li class="mr-1" :class="{activeLink: today.selected}"  @click="switchSelected">
				        <a class="tab bg-gray-800 "  :class="{activeTab: today.selected}"  href="#">
				        	<span class="text-gray-300">Meal for</br>{{this.moment(this.date).format('DD-MM-YYYY')}}</span>
				    	</a>
				    </li>
				    <li class="mr-1" :class="{activeLink: tomorrow.selected}" @click="switchSelected">
				        <a class="tab bg-gray-800 " :class="{activeTab: tomorrow.selected}" href="#">
					        <span class="text-gray-300">Set meal for</br>{{this.moment(this.date).add(1, 'days').format('DD-MM-YYYY')}}</span>
				    	</a>
				    </li>
				</ul>
				
				<section class="text-gray-400" > <!-- navigation content -->
				    <div class="" v-show='today.selected'>
						<section class="bg-gray-800 relative" >
							<div class="flex flex-col max-w-md mx-auto" >
								<!-- menu or cheker -->
								<span class="mt-6">Today is {{forToday}}.</span></br>
								<span class="text-xxs -mt-5 mb-4">Check what you're gonna cook.</span>
								<div class="mb-10">
									<section v-if="!today.showChecker">
										<div class="flex justify-center flex-wrap px-2" v-show="today.aviable.length>0">
											<div v-for="item in today.aviable" class="p-1" :class="today.aviable.length<=3 ? 'w-1/3':'w-1/5' ">
												<foodbox :item="item" :title="'eng'"></foodbox>
											</div>
										</div>
										<div class="mt-4 border border-2 border-gray-300 px-2 py-2 rounded-lg mx-2 text-gray-300 uppercase text-xs font-bold mx-10 meal-block" @click="today.showChecker = true">Change menu for today</div>
									</section>
									<section class="mx-10 py-4 px-6 bg-gray-300 rounded border text-gray-800" v-else>
										<div class="flex items-center mb-2" v-for="item in menu">
											<input class="" type="checkbox" :id="item.id" :value="item.id" v-model="today.index" >
										    <label class="ml-2 text-sm" :for="item.id">{{item.eng}}</label>
										</div>
									    <div class="mt-4 border border-2 border-gray-800 px-3 py-2 rounded-lg mx-2 text-gray-700 uppercase text-xs font-bold " @click="setTodayAviable">Save menu</div>
									</section>
								</div>


							</div>
						</section>	
				       
				    </div>
				    <div class="" v-show="tomorrow.selected">
				    	<section class="bg-gray-800 " >
				    		<div class="flex flex-col max-w-md mx-auto" >
				    			<span class="mt-6">Today is {{forTomorrow}}.</span></br>
				    			<span class="text-xxs -mt-5 mb-4">Select what you're gonna cook.</span>

				    			<!-- menu or cheker -->
				    			<div class="mb-10">
					    			<section v-if="!tomorrow.showChecker">
						    			<div class="flex justify-center flex-wrap px-2" v-show="tomorrow.aviable.length>0">
						    				<div v-for="item in tomorrow.aviable" class="p-1" :class="tomorrow.aviable.length<=3 ? 'w-1/3':'w-1/5' ">
						    					<foodbox :item="item" :title="'eng'"></foodbox>
						    				</div>
						    			</div>
					    				<div class="mt-4 border border-2 border-gray-300 px-2 py-2 rounded-lg mx-2 text-gray-300 uppercase text-xs font-bold mx-10 meal-block" @click="tomorrow.showChecker = true">Change menu for tomorrow</div>
					    			</section>
					    			<section class="mx-10 py-4 px-6 bg-gray-300 rounded border text-gray-800" v-else>
					    				<div class="flex items-center mb-2" v-for="item in menu">
					    					<input class="" type="checkbox" :id="item.id" :value="item.id" v-model="tomorrow.index" >
					    				    <label class="ml-2 text-sm" :for="item.id">{{item.eng}}</label>
					    				</div>
				    				    <div class="mt-4 border border-2 border-gray-800 px-3 py-2 rounded-lg mx-2 text-gray-700 uppercase text-xs font-bold " @click="setTomorrowAviable">Save menu</div>
					    			</section>
				    			</div>
				    		</div>
				    	</section>	
				    </div> 
				</section> <!-- navigation content -->
			</section> <!-- pillow navigation -->

			<!-- place block -->
			<div class="mx-auto max-w-md">
				<section class="pt-8 pb-8 px-6" >
					<span class="meal-txt text-2xl">Today on island 56 employee</span>
					<div class="container mx-auto max-w-2xl flex justify-around pt-8">
						<div class="w-2/5 flex flex-col" @click="countOrders('hotel')">
							<img src="/img/bungalo.jpg" alt="" :class="hotel ? 'active' : 'bw'" class="rounded-full border border-4 border-gray-300">
							<span class="meal-txt text-2xl mt-2" :class="hotel ? 'rate' : '' ">Today for hotel</span>
						</div>
						<div class="w-2/5 flex flex-col" @click="countOrders('island')">
							<img src="/img/island.jpg" alt="":class="island ? 'active' : 'bw'" class="rounded-full border border-4 border-gray-300" >
							<span class="meal-txt text-2xl mt-2" :class="island ? 'rate' : '' ">Today for Island</span>
						</div>
					</div>
				</section>
				<!-- results -->
				<section class="my-4 px-4" v-if="this.orders.length>0">
					<div class="flex justify-center">
						<div v-for="item in orders" class="flex flex-col w-1/5 p-2">
							<foodbox class="" :item="item.dish"></foodbox>
							<span class="meal-txt text-gray-500 font-bold text-4xl rate">{{item.count}}</span>
						</div>
					</div>
				</section>
			</div>
			<!-- comments and raitng block -->
			<section class="flex flex-col items-center mt-8">
				<svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="m-3 fill-current rate h-24 w-24">
					<path d="M17 8.39a1.11 1.11 0 00-.645-2l-4.5-.17a.115.115 0 01-.1-.075l-1.555-4.2a1.11 1.11 0 00-2.085 0L6.565 6.16a.115.115 0 01-.1.075l-4.5.17a1.11 1.11 0 00-.645 2l3.53 2.775a.115.115 0 01.04.12l-1.215 4.305a1.11 1.11 0 001.69 1.225l3.73-2.5a.11.11 0 01.125 0l3.73 2.5a1.1 1.1 0 001.275 0 1.1 1.1 0 00.415-1.2l-1.225-4.32a.11.11 0 01.04-.12L17 8.39z" />
				</svg>
				<span class="text-2xl text-gray-800 font-bold -mt-24 pt-5 mb-12" >{{totalScore}}</span>

				<span v-show="totalScore" class="block text-xxs rate">Yesterday average score: {{totalScore}}. Total voices: {{this.overallRating.length}}.</span>
			</section>
			<section v-show="comments.length>=1" class="flex flex-col w-2/3 max-w-md mx-auto">
				<span  class="meal-txt text-2xl rate mt-6">Last comments:</span>
				<div  v-for="item in comments" class="border border-2 border-gray-300 px-6 py-2 meal-txt text-2xl rounded-lg mt-2">
					{{item.msg}}<br>
					<span class="text-xxs font-mono rate">{{item.user.email}}</span>
				</div>
			</section>
		</div>
		<span class="block pt-16 pb-16 text-xxs text-gray-500">QuadrantBubbles 2020</span> 
	</div>
	
</template>
<script>
	import foodbox from './foodbox.vue';
	import foodmenu from './foodmenu.vue';
	import appeal from '../user/appeal.vue';
	import raitingmeal from './raitingmeal.vue';

	export default {
		name: 'cook',
		components: {foodbox, foodmenu, appeal, raitingmeal},
		data() {
			return {
				date: new Date(),
				menu: [],
				selectMenu: true, //show change menu section
				today: {
					aviable: [],
					index: [],
					title: 'eng',
					selected: true,
					showChecker: false,
				},
				tomorrow: {
					aviable: [],
					index: [],
					title: 'eng',
					selected: false,
					showChecker: false,
				},
				orders: [],
				hotel: false,
				island: false,
				showUserMenu: false,
				showComments: true,

				overallRating: '',
				totalScore: '',
				comments: []
			}
		},
		created() {
			axios.get('/meal')
			  .then(response => {
			  		//fix 'false' false issue
				    response.data.filter(item => item.status = false);
				  	this.menu = response.data;
				  	
					[this.tomorrow.aviable, this.tomorrow.index] = this.getAviable(moment(this.date).add(1, 'days').format('YYYY-MM-DD')) ?? [];
					[this.today.aviable, this.today.index] = this.getAviable(moment(this.date).format('YYYY-MM-DD')) ?? [];

					this.feedback();
			  })
			  .catch(error => {
			    console.log(error);
			  });
		},

		methods: {
			// get aviable for given date
			getAviable(date) {
			    var aviable = [];
			    var indexes = [];
			    let keys = [];
				axios.get('/menu/'+date)
					.then(response => {
					    keys = response.data;
					    var index;
					    for(index=0; index<keys.length; index++) {
					    	aviable.push(this.menu.filter(item => item.id === keys[index]).shift());
					    	indexes.push(keys[index]);
					    }
					})
					.catch(error => {
						console.log(error);
					});
				return [aviable, indexes];
			},

			// switch tabs
			switchSelected() {
				this.today.selected = !this.today.selected;
				this.tomorrow.selected = !this.tomorrow.selected;
			},

			// set and store data in mealmenus
			setTodayAviable() {
				let date = moment(this.date).format('YYYY-MM-DD');
				axios.post('/menu', {
				        date: date,
				        keys: this.today.index,
				    })
				    .then(response => {
				        var index;
				        var avb = [];
				    	for(index=0; index<this.today.index.length; index++) {
				    		avb.push(this.menu.filter(item => item.id === this.today.index[index]).shift())
				    	}	
				    	this.today.aviable = avb;
				    	this.today.showChecker = false;
				    })
				    .catch(error => {
				        console.log(error);
				        this.$router.push({name: 'login'});
				    });
			},			
			setTomorrowAviable() {
				let date = moment(this.date).add(1, 'days').format('YYYY-MM-DD');
				axios.post('/menu', {
				        date: date,
				        keys: this.tomorrow.index,
				    })
				    .then(response => {
				        var index;
				        var menu = [];
				    	for(index=0; index<this.tomorrow.index.length; index++) {
				    		menu.push(this.menu.filter(item => item.id === this.tomorrow.index[index]).shift())
				    	}	
				    	this.tomorrow.aviable = menu;
				    	this.tomorrow.showChecker = false;
				    })
				    .catch(error => {
				        console.log(error);
						this.$router.push({name: 'login'});			        
				    });
			},
			moment(date) {
				return moment(date).locale('en');
			},
			//counter for orders for the given date 
			countOrders(place) {
				var index;
			    var menu = [];
			    if(place === "hotel") {
			    	this.hotel = true;
			    	this.island = false;
			    } 
			    if(place === "island") {
			    	this.hotel = false;
			    	this.island = true;			    	
			    }
			    //check new raitings and comments
			    this.feedback();
			    axios.get('/orderDate/'+moment(this.date).format('YYYY-MM-DD'))
			        .then(response => {
			        	let ordersSelected = response.data.filter(item => item.place === place);
			        	for(index=0; index<this.today.aviable.length; index++) {
			        		let order = {};
			        		order.dish = this.today.aviable[index];
			        		order.count = ordersSelected.filter(item => item.meal_id === this.today.aviable[index].id).length;
			        		menu.push(order);
			        	}	
			        	this.orders = menu;
			        })
			        .catch(error => {
			            console.log(error);
				        this.$router.push({name: 'login'});
			        });
			},

			feedback() {
				axios.get('/mealRaitng/'+moment(this.date).subtract(1, 'days').format('YYYY-MM-DD'))
					.then(response => {
						this.overallRating = response.data;
						this.total();
					})
					.catch(error => {
						console.log(error);
					});
				axios.get('/comment')
				    .then(response => {
				    	this.comments = response.data;
				    })
				    .catch(error => {
				        console.log(error);
				    });
			},

			total() {
				if(this.overallRating.length == 0) {
					return 0;
				}
				let sum = this.overallRating.reduce(function(a, b){
				        return a + b;
				    }, 0);
				return this.totalScore = Math.floor(sum/this.overallRating.length*10)/10;
			},

// not used for this impementation

			selectDish(item) {
				let index = item.id-1;
				this.menu[index].status = !this.menu[index].status;
				this.aviable = this.menu.filter(item => item.status == true);
			},


		},

		computed: {		
			forTomorrow() {
				return this.moment(this.date).add(1, 'days').format('MMMM, DD, dddd');			
			},			
			forToday() {
				return this.moment(this.date).format('MMMM, DD, dddd');			
			},
		},
	}

</script>
<style scoped>
.tab {
    display: inline-block;
    padding-top: .5rem;
    padding-bottom: .5rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    color: rgb(#4B5568);
    font-size: 0.75rem;
    font-weight: 600;
    font-style: 'Roboto';
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
}
.activeLink {
    margin-bottom: -23px;
}
.activeTab {
    border-left-width: 1px;
    border-top-width: 1px;
    border-right-width: 1px;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    color: rgba(45, 55, 72, 1);
}	
.borderBottom {
	border-left-width: 0px;
	border-top-width: 0px;
	border-right-width: 0px;	
	border-bottom-width: 1px;	
}
</style>