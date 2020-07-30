<style>
	.meal-txt {
		color: rgba(113, 128, 150, 1);
		font-family: 'Amatic SC';
	}
	.bw {
		padding: 10px;
		opacity: 80%;
		filter: grayscale(80%);

	}
	.active {
		box-shadow: 0 25px 50px -12px rgba(0,0,0, .25);
	}

	
</style>
<template>
	<div class="w-full h-full bg-gray-800 text-center">

		<!-- login block -->
		<section class="py-8">
			<div  @click="$router.push('/login')" v-if="1">
				<span class="meal-txt text-4xl">Войди в систему &nbsp&nbsp-</span>
				<span class="meal-txt text-4xl -ml-2">></span>
			</div>
			<div v-else class="meal-txt text-4xl">Привет, дружок</div>
		</section>
		<!-- place block -->
		<section class="pt-16 pb-4">
			<span class="meal-txt text-4xl">Отметь, где ты будешь сегодня?</span>
			<div class="container mx-auto max-w-2xl flex justify-around pt-8">
				<div class="inline-block w-2/5 ">
					<img src="/img/bungalo.jpg" alt="" :class="hotel ? 'active' : 'bw'" class="rounded-full border border-4 border-gray-300" @click="markHotel">
				</div>
				<div class="inline-block w-2/5 ">
					<img src="/img/island.jpg" alt="":class="island ? 'active' : 'bw'" class="rounded-full border border-4 border-gray-300" @click="markIsland">
				</div>
			</div>
		</section>
		<!-- choose meal block -->
		<section class="mt-6">
			<span class="block meal-txt text-4xl pt-4 pb-4">Выбери себе еду:</span>
			<div class="container mx-auto md:max-w-2xl pt-8 flex justify-center flex-wrap lg:flex-no-wrap" v-if="!selected.status">
				<!-- large screenand more -->
				<div v-for="item in menu" class="hidden lg:block " @click="selectDish(item)">
		<!-- 		<div class="bg-gray-300 h-16 border border-2 border-gray-600 rounded-lg text-center mx-2">
						<span class="meal-txt text-4xl">13</span>
					</div> -->
					<img :src="item.img" alt="">
					<span class="meal-txt text-2xl leading-none ">{{item.dish}}</span>
				</div>
				<!-- md screen to large -->
				<div v-for="item in menu" class="hidden md:block lg:hidden w-1/3" @click="selectDish(item)">
		<!-- 		<div class="bg-gray-300 h-16 border border-2 border-gray-600 rounded-lg text-center mx-2">
						<span class="meal-txt text-4xl">13</span>
					</div> -->
					<img :src="item.img" alt="">
					<span class="meal-txt text-2xl leading-none ">{{item.dish}}</span>
				</div>
				<!-- small screen -->
				<div v-for="item in menu" class="md:hidden w-2/5 " @click="selectDish(item)">
		<!-- 		<div class="bg-gray-300 h-16 border border-2 border-gray-600 rounded-lg text-center mx-2">
						<span class="meal-txt text-4xl">13</span>
					</div> -->
					<img :src="item.img" alt="">
					<span class="meal-txt text-2xl leading-none ">{{item.dish}}</span>
				</div>
			</div>
			<div v-else class="container mx-auto">
				<img :src="selected.img" alt="" class="w-2/5 h-full mx-auto">
				<span class="block meal-txt text-3xl leading-none mt-2 px-2">user.name, </br>сегодня, {{this.moment()}}, твоя {{selected.dish}} будет ждать тебя </br>{{msg}} </span>
				<div class="flex justify-center mt-4 px-2">
					<div class="border border-2 border-gray-300 px-3 py-2 meal-txt text-2xl rounded-lg mx-2">Сохранить заказ</div>
					<div class="border border-2 border-gray-300 px-3 py-2 meal-txt text-2xl rounded-lg mx-2" @click="selected={}">Изменить заказ</div>

				</div>
			</div>
		</section>
		<!-- rate block -->
		<section class="mt-8">
			<span class="block meal-txt text-4xl pt-8 pb-4">Оцени, как поел вчера:</span>
			<span class="flex justify-center ">
				<img v-for="i in 5" :key=i src="/img/meal/starGray.svg" alt="" class="mx-2">
			</span>
			<span class="block meal-txt text-2xl pt-8 pb-4" @click="showComment=true">Хочешь оставить комментарий?</span>
			<input type="textarea" v-show="showComment">
		</section>
		<span class="block pt-16 pb-16 text-xxs text-gray-500" @click="countPlus">QuadrantBubbles 2020</span> 
	</div>
</template>
<script>
	export default {
		name: 'meal',
		data() {
			return {
				date: new Date(),
				island: false,
				hotel: false,
				msg: '',
				selected: {
					status: false,
					dish: '',
					img: '',
				},

				countIsland: 0,
				countHotel: 0,
				menu: [
					{dish: 'стандартная еда', img: '/img/meal/boxEmpty.png'},
					{dish: 'говядина', img: '/img/meal/boxCow.png'},
					{dish: 'курица', img: '/img/meal/boxChicken.png'},
					{dish: 'рыба', img: '/img/meal/boxFish.png'},
					{dish: 'вегетарианская кухня', img: '/img/meal/boxEco.png'},
					{dish: 'безлактозная диета', img: '/img/meal/boxNoMilk.png'},

				],
				chicken: 0,
				fish: 0,
				standart: 0,
				vegan: 0,
				noLactoze: 0,
				count: 0,
				showComment: false,
			}
		},
		methods: {
			moment() {
				return moment(this.date).format("DD MMMM");
			},
			countPlus() {
				this.count++;
				if(this.count == 3) {
					Event.$emit('showTopMenu');
					this.$router.push('/home');
				}
			},
			markIsland() {
				this.island = true;
				this.hotel = false;
				this.msg = 'на острове Любви.';
			},
			markHotel() {
				this.hotel = true;
				this.island = false;
				this.msg = 'в отеле.';
			},
			selectDish(item) {
				this.selected = item;
				this.selected.status=true;
			}
		},
		mounted() {
			Event.$emit('hideTopMenu');
		}

	}
</script>