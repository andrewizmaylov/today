<template>
	<div class="container mx-auto md:max-w-2xl pt-8 flex justify-center flex-wrap ">
		<!-- large screen and more -->
		<div v-for="item in menu" class="hidden lg:block w-1/5" @click="selectDish(item)">
			<foodbox :item="item" :title="title"></foodbox>
		</div>
		<!-- md screen to large -->
		<div v-for="item in menu" class="hidden md:block lg:hidden w-1/3" @click="selectDish(item)">
			<foodbox :item="item" :title="title"></foodbox>
		</div>
		<!-- small screen -->
		<div v-for="item in menu" class="md:hidden w-2/5" @click="selectDish(item)">
			<foodbox :item="item" :title="title"></foodbox>
		</div>
	</div>
</template>

<script>
	import foodbox from './foodbox.vue';
	export default {
		name: 'foodmenu',
		components: {foodbox},
		data() {
			return {
				menu: [
					{id: 1, rus: 'стандартная еда', eng: 'ordinary meal', img: 'boxEmpty.png', status: false, msg: 'твоя стандартная еда будет ' },
					{id: 2, rus: 'говядина', eng: 'beef', img: 'boxCow.png', status: false, msg: 'твоя говядина будет ' },
					{id: 3, rus: 'вегетарианская кухня', eng: 'veg', img: 'boxEco.png', status: true, msg: 'твоя вегетаринская кухня будет ' },
					{id: 4, rus: 'курица', eng: 'chicken', img: 'boxChicken.png', status: false, msg: 'твоя курица будет ' },
					{id: 5, rus: 'рыба', eng: 'fish', img: 'boxFish.png', status: true, msg: 'твоя рыба будет ' },
					{id: 6, rus: 'безлактозная диета', eng: 'dairy free', img: 'boxNoMilk.png', status: true, msg: 'твоя безлактозная диета будет ' },
					{id: 7, rus: 'морепродукты', eng: 'seafood', img: 'boxSeaFood.png', status: false, msg: 'твои морепродукты будут ' },
					{id: 8, rus: 'креветки', eng: 'prawns', img: 'boxPrawns.png', status: false, msg: 'твои креветки будут ' },
					{id: 9, rus: 'правильное питание', eng: 'proper nutrition', img: 'boxPP.png', status: true, msg: 'твое правильное питание будет ' },
					{id: 10, rus: 'свинина', eng: 'pork', img: 'boxPork.png', status: false, msg: 'твоя свинина будет ' },
				],
				endTime: '',
			}
		},
		props: ['title', 'wide'], // wide is here fore future class refactoring
		methods: {
			selectDish(item) {
				this.$emit('select', item);
			},
			
			setCalculationDate() {
				let after18 = moment(this.date).format('YYYY-MM-DD 18:00');
				if(moment(this.date).isAfter(after18)) {
					this.endTime = moment(this.date).add(1, 'days').format('YYYY-MM-DD');
					this.orderFor = 'завтра'
				} else {
					this.endTime = moment(this.date).format('YYYY-MM-DD');
					this.orderFor = 'сегодня'
				}
			},

			setToday() {
				axios.get('/menu/'+this.endTime)
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
		},
		
	}
</script>