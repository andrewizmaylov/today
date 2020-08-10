<template>
	<div class="w-full h-full bg-gray-800 text-center relative">
		<!-- top appeal for user with user menu from appeal component -->
		<appeal v-on:expand="showUserMenu=true" v-on:collapse="showUserMenu=false" :class="showUserMenu ? 'absolute z-10 inset-0 bg-gray-800' : ''"></appeal>

		<!-- set tomorrow menu -->
		<section class="" v-show="selectMenu">
			<div class="mx-auto  pt-8 flex flex-col" >
				<span class="text-4xl meal-txt my-4">select what you're gonna cook tomorrow {{tomorrow}}</span>
				<div class="container mx-auto flex justify-center flex-wrap pt-8 border border-gray-300">
					<div v-for="item in menu" class="w-1/5" @click="selectDish(item)">
						<foodbox :item="item" :title="title" class="pb-2"></foodbox>
					</div>
					
				</div>
				<!-- <foodmenu :menu="menu" :title="'eng'" :wide="'w-1/5'" @select="selectDish"></foodmenu> -->
			</div>	
			
			<!-- menu for the next day appear then more then one item is in list -->
			<section v-if="aviable.length >0">
				<div class="mx-auto md:max-w-2xl pt-8 flex flex-col">
					<span class="text-4xl meal-txt my-4">menu for {{tomorrow}}</span>
					<foodmenu :menu="aviable" :title="'eng'" :wide="'w-3/5'" @select="selectDish"></foodmenu>
				</div>

				<div class="flex justify-center mt-4 px-2 pb-8">
					<div class="border border-2 border-gray-300 px-8 py-2 meal-txt text-2xl rounded-lg mx-2" @click="setMenu">Set menu for {{tomorrow}}</div>
				</div>
			</section>
		</section>

		<!-- cooking today and order list -->
		<section v-show="!selectMenu" class="h-full">
			<span class="text-4xl meal-txt my-4">today menu</span>
			<foodmenu :menu="today.data" :title="today.title" :wide="'w-2/3'"></foodmenu>
			<div class="flex justify-center mt-4 px-2">
				<div class="border border-2 border-gray-300 px-8 py-2 meal-txt text-2xl rounded-lg mx-2 mb-16" @click="selectMenu=true">Change menu for {{tomorrow}} ?</div>
			</div>

			<span v-show="totalScore" class="meal-txt text-4xl rate">Voices total {{this.overallRating.length}}. Average {{totalScore}} </span>	

			<section v-show="comments.length>=1" class="flex flex-col w-2/3 max-w-md mx-auto pb-6">
				<span  class="meal-txt text-2xl rate mt-6">Most recent comments:</span>
				<div  v-for="item in comments" class="border border-2 border-gray-300 px-6 py-2 meal-txt text-2xl rounded-lg mt-2">
					{{item.msg}}<br>
					<span class="text-xxs font-mono rate">{{item.user.email}}</span>
				</div>
			</section>		
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
				aviable: [],
				today: {
					data: [],
					title: 'eng'
				},
				showUserMenu: false,
				showComments: false,

				overallRating: '',
				totalScore: '',
				comments: []
			}
		},
		methods: {
			selectDish(item) {
				let index = item.id-1;
				this.menu[index].status = !this.menu[index].status;
				this.aviable = this.menu.filter(item => item.status == true);
			},
			moment(date) {
				return moment(date).locale('en');
			},

			setMenu() {
				this.selectMenu = false;
				this.showComments = true;

				let date = this.moment(this.date).add(1, 'days').format('YYYY-MM-DD');
				// post the menu for the date
			    console.log(this.aviable.map(item => item.id));
				axios.post('/menu', {
					date: date,
					keys: this.aviable.map(item => item.id),
				  })
				  .then(response => {
				  	this.setToday(date);
				    console.log('set menu ');
				    console.log(response.data);
				  })
				  .catch(error => {
				    console.log(error);
				  });	 
			},
			setToday(date) {
				axios.get('/menu/'+date)
				  .then(response => {
					  	this.selectMenu = false;
					  	this.showComments = true;
					    let keys = response.data;
					    var index;
					    var td = [];
					    for(index=0; index<keys.length; index++) {
					    	td.push(this.menu.filter(item => item.id === keys[index]).shift());
					    }
					    this.today.data = td;

					    this.getRaiting();
					    this.getComments();
				  })
				  .catch(error => {
				    console.log(error);
				  });
			},

			// to be refactored to component
			getRaiting() {
				let date = moment(this.date).format('YYYY-MM-DD');

				axios.get('/mealRaitng/'+date)
				  .then(response => {
				  	this.overallRating = response.data;
				  	this.total();
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
				return this.totalScore = Math.floor(sum/this.overallRating.length*100)/100;
			},
			getComments() {
				axios.get('/comment')
				  .then(response => {
				  	this.comments = response.data;
				    console.log(response);
				  })
				  .catch(error => {
				    console.log(error);
				  });
			}
		},
		created() {
			axios.get('/meal')
			  .then(response => {
			  		//fix 'false' false issue
				    response.data.filter(item => item.status = false);
				  	this.menu = response.data;

				  	this.setToday(this.moment(this.date).add(1, 'days').format('YYYY-MM-DD'));
			  })
			  .catch(error => {
			    console.log(error);
			  });
	
		},
		computed: {
			tomorrow() {
				return this.moment(this.date).add(1, 'days').format('MMMM, DD');			
			},
		},
	}

</script>