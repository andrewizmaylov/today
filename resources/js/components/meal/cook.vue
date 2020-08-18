<template>
	<div class="w-full h-screen bg-gray-800 text-center relative">
		<!-- top appeal for user with user menu from appeal component -->
		<appeal v-on:expand="showUserMenu=true" v-on:collapse="showUserMenu=false" :class="showUserMenu ? 'absolute z-10 inset-0 bg-gray-800' : ''"></appeal>
<!-- set menu page -->
		<section>
			<div>
				<!-- pillow navigation -->
				<ul class="flex border-b justify-center px-6">
				    <li class="mr-1" :class="{activeLink: today.selected}"  @click="switchSelected">
				        <a class="tab bg-gray-700 "  :class="{activeTab: today.selected}"  href="#">
				        	<span class="text-gray-300">Meal for</br>{{this.moment(this.date).format('DD-MM-YYYY')}}</span>
				    	</a>
				    </li>
				    <li class="mr-1" :class="{activeLink: tomorrow.selected}" @click="switchSelected">
				        <a class="tab bg-gray-700 " :class="{activeTab: tomorrow.selected}" href="#">
					        <span class="text-gray-300">Set meal for</br>{{this.moment(this.date).add(1, 'days').format('DD-MM-YYYY')}}</span>
				    	</a>
				    </li>
				</ul>
				<!-- navigation content -->
				<section class="text-gray-400" >
				    <div class="" v-show='today.selected'>
						<section class="bg-gray-700 borderBottom relative" >
							<div class="flex flex-col max-w-md mx-auto" >
								<span class="my-4">Today is {{forToday}}.</br>Check what you're gonna cook.</span>
								<!-- menu or cheker -->
								<div class="mb-10">
									<section v-if="!today.showChecker">
										<foodmenu :menu="today.aviable" :title="'eng'"></foodmenu>
										<div class="mt-4 border border-2 border-gray-300 px-2 py-2 rounded-lg mx-2 text-gray-300 uppercase text-xs font-bold mx-10" @click="today.showChecker = true">Change menu for today</div>
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
				    	<section class="bg-gray-700 borderBottom" >
				    		<div class="flex flex-col max-w-md mx-auto" >
				    			<span class="my-4">Tomorrow is {{forTomorrow}}.</br>Select what you're gonna cook.</span>
				    			<!-- menu or cheker -->
				    			<div class="mb-10">
					    			<section v-if="!tomorrow.showChecker">
						    			<foodmenu :menu="tomorrow.aviable" :title="'eng'"></foodmenu>
					    				<div class="mt-4 border border-2 border-gray-300 px-2 py-2 rounded-lg mx-2 text-gray-300 uppercase text-xs font-bold mx-10" @click="tomorrow.showChecker = true">Change menu for tomorrow</div>
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

				</section>
			</div>
		</section>
<!-- order for today -->
		<section class="mt-4">
			<span @click="countOrders">today on island 56 employe</span>
			<div class="flex justify-center">
				<div v-for="item in orders" class="flex flex-col w-1/5 p-2">
					<foodbox class="" :item="item.dish"></foodbox>
					<span>{{item.count}}</span>
				</div>
			</div>
		</section>
	</div>
	
</template>
<script>
	import foodbox from './foodbox.vue';
	import foodmenu from './foodmenu.vue';
	import appeal from '../user/appeal.vue';

	export default {
		name: 'cook',
		components: {foodbox, foodmenu, appeal},
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
					showChecker: true,
				},
				tomorrow: {
					aviable: [],
					index: [],
					title: 'eng',
					selected: false,
					showChecker: true,
				},
				orders: [],

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
					// this.tomorrow.aviable = this.getAviable(moment(this.date).add(1, 'days').format('YYYY-MM-DD')) ?? [];
					// this.today.aviable = this.getAviable(moment(this.date).format('YYYY-MM-DD')) ?? [];					
					this.getTomorrowAviable();
					this.getTodayAviable();
			  })
			  .catch(error => {
			    console.log(error);
			  });


		},
		methods: {
			// get aviable for given date
			getAviable(date) {
			    var aviable = [];
			    let keys = [];
				axios.get('/menu/'+date)
					.then(response => {
					    keys = response.data;
					    var index;
					    for(index=0; index<keys.length; index++) {
					    	aviable.push(this.menu.filter(item => item.id === keys[index]).shift());
					    }
					})
					.catch(error => {
						console.log(error);
					});
				return aviable;
			},
			// check again later and rewrite to one method above
			getTodayAviable() {
				var date = moment(this.date).format('YYYY-MM-DD');
				console.log(date);
				axios.get('/menu/'+date)
					.then(response => {
					    this.today.index = response.data;
					    var index;
					    var aviable = [];
					    for(index=0; index<this.today.index.length; index++) {
					    	aviable.push(this.menu.filter(item => item.id === response.data[index]).shift());
					    }
					    this.today.aviable = aviable;
					    this.today.showChecker = false;
					})
					.catch(error => {
						console.log(error);
					});
			},
			getTomorrowAviable() {
				var date = moment(this.date).add(1, 'days').format('YYYY-MM-DD');
				axios.get('/menu/'+date)
					.then(response => {
					    this.tomorrow.index = response.data;
					    var index;
					    var aviable = [];
					    for(index=0; index<this.tomorrow.index.length; index++) {
					    	aviable.push(this.menu.filter(item => item.id === response.data[index]).shift());
					    }
					    this.tomorrow.aviable = aviable;
					    this.tomorrow.showChecker = false;
					})
					.catch(error => {
						console.log(error);
					});
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
				        console.log(response);
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
				    });
			},			
			setTomorrowAviable() {
				let date = moment(this.date).add(1, 'days').format('YYYY-MM-DD');
				axios.post('/menu', {
				        date: date,
				        keys: this.tomorrow.index,
				    })
				    .then(response => {
				        console.log(response);
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
				    });
			},
			moment(date) {
				return moment(date).locale('en');
			},
			//counter for orders for the given date 
			countOrders() {
				var index;
			    var menu = [];

			    axios.get('/orderDate/'+moment(this.date).format('YYYY-MM-DD'))
			        .then(response => {
			        	console.log(response.data);
			        	let onIsland = response.data.filter(item => item.place === 'hotel');
			        	for(index=0; index<this.today.aviable.length; index++) {
			        		let order = {};
			        		order.dish = this.today.aviable[index];
			        		order.count = onIsland.filter(item => item.meal_id === this.today.aviable[index].id).length;
			        		menu.push(order);
			        	}	
			        	this.orders = menu;
			        })
			        .catch(error => {
			            console.log(error);
			        });
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
    margin-bottom: -1px;
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