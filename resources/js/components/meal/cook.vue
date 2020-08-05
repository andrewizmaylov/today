<template>
	<div class="w-full h-full bg-gray-800 text-center">

		<appeal></appeal>


		<section class="" v-show="changeMenu">
			<div class="mx-auto  pt-8 flex flex-col" >
				<span class="text-4xl meal-txt my-4">select what you will prepare tomorrow {{tomorrow}}</span>
				<div class="w-full flex flex-no-wrap overflow-auto">
					<foodbox  @click.native="setAviable(item)" v-for="item in menu" :key="item.id" :item="item" :language="false" class="flex-none sm:w-1/6 w-1/5"></foodbox>
				</div>
			</div>	

			<div class="mx-auto md:max-w-2xl pt-8 flex flex-col">
				<span class="text-4xl meal-txt my-4">menu for {{tomorrow}}</span>
				<div class="flex flex-wrap justify-center px-8">
					<foodbox @click.native="setUnAviable(item)" v-for="item in aviable" :key="item.id" :item="item" :language="false" class="w-1/3"></foodbox>
				</div>
			</div>
			<div class="flex justify-center mt-4 px-2">
				<div class="border border-2 border-gray-300 px-8 py-2 meal-txt text-2xl rounded-lg mx-2" @click="changeMenu=true" v-show="">Set menu for {{tomorrow}}</div>
			</div>
		</section>

		<div class="flex justify-center mt-4 px-2">
			<div class="border border-2 border-gray-300 px-8 py-2 meal-txt text-2xl rounded-lg mx-2" @click="changeMenu=true" v-show="">Choose menu for {{tomorrow}}</div>
		</div>

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
				changeMenu: true, //show change menu section
				aviable: [],
			}
		},
		methods: {
			setAviable(item) {
				console.log('set Av/ before '+item.status);
				let index = item.id-1;
				this.menu[index].status = 'true';
				this.aviable = this.menu.filter(item => item.status == 'true');
				console.log('after '+item.status);
			},
			setUnAviable(item) {
				console.log('set Un/ before '+item.status);
				let index = item.id-1;
				this.menu[index].status = 'false';
				this.aviable = this.menu.filter(item => item.status == 'true');
				console.log('after '+item.status);
			},
			moment(date) {
				return moment(date).locale('en');
			},

		},
		created() {
			axios.get('/mealAll')
			  .then(response => {
			  	this.menu = response.data;
			  	this.aviable = this.menu.filter(item => item.status == 'true');
			    // console.log(response);
			  })
			  .catch(error => {
			    console.log(error);
			  });
		},
		computed: {
			tomorrow() {
				return this.moment(this.date).add(1, 'days').format('DD MMMM');			
			},
		},
	}

</script>