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
			<foodmenu :menu="today" :title="eng"></foodmenu>
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
				today: [],
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
				// post the menu for the date

				 
			}

		},
		created() {
			axios.get('/mealAll')
			  .then(response => {
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