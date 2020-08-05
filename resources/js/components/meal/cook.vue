<template>
	<div class="w-full h-full bg-gray-800 text-center relative">
		<!-- top appeal for user with user menu from appeal component -->
		<appeal v-on:expand="showUserMenu=true" v-on:collapse="showUserMenu=false" :class="showUserMenu ? 'absolute z-10 inset-0 bg-gray-800' : ''"></appeal>

		<!-- set tomorrow menu -->
		<section class="" v-show="selectMenu">
			<div class="mx-auto  pt-8 flex flex-col" >
				<span class="text-4xl meal-txt my-4">select what you're gonna cook tomorrow {{tomorrow}}</span>
				<foodmenu :menu="menu" :title="'eng'" @select="selectDish"></foodmenu>
			</div>	
			
			<!-- menu for the next day appear then more then one item is in list -->
			<section v-if="aviable.length >0">
				<div class="mx-auto md:max-w-2xl pt-8 flex flex-col">
					<span class="text-4xl meal-txt my-4">menu for {{tomorrow}}</span>
					<foodmenu :menu="aviable" :title="'eng'" @select="selectDish"></foodmenu>
				</div>

				<div class="flex justify-center mt-4 px-2">
					<div class="border border-2 border-gray-300 px-8 py-2 meal-txt text-2xl rounded-lg mx-2" @click="setMenu">Set menu for {{tomorrow}}</div>
				</div>
			</section>
		</section>

		<!-- cooking today and order list -->
		<section v-show="!selectMenu">
			<span class="text-4xl meal-txt my-4">today menu</span>
			<foodmenu :menu="today.data" :title="today.title"></foodmenu>
			<div class="flex justify-center mt-4 px-2">
				<div class="border border-2 border-gray-300 px-8 py-2 meal-txt text-2xl rounded-lg mx-2" @click="selectMenu=true">Change menu for {{tomorrow}} ?</div>
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
				aviable: [],
				today: {
					data: [],
					title: 'eng'
				},
				showUserMenu: false,
				showComments: false
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
					    let keys = response.data;
					    var index;
					    var td = [];
					    for(index=0; index<keys.length; index++) {
					    	console.log(this.menu.filter(item => item.id === keys[index]).shift());
					    	td.push(this.menu.filter(item => item.id === keys[index]).shift());
					    }
					    console.log(td);
					    this.today.data = td;
				  })
				  .catch(error => {
				    console.log(error);
				  });
			},

		},
		created() {
			axios.get('/meal')
			  .then(response => {
			  		//fix 'false' false issue
				    response.data.filter(item => item.status = false);
				  	this.menu = response.data;
			  })
			  .catch(error => {
			    console.log(error);
			  });
			// axios.get('/meal/'+this.date)
			//   .then(response => {
			//   	today = response.data;
			//     console.log(response);
			//   })
			//   .catch(error => {
			//     console.log(error);
			//   });
		},
		computed: {
			tomorrow() {
				return this.moment(this.date).add(1, 'days').format('MMMM, DD');			
			},
		},
	}

</script>