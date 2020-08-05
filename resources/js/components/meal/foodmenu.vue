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
		props: ['menu', 'title', 'wide'], // wide is here fore future class refactoring
		methods: {
			selectDish(item) {
				this.$emit('select', item);
			},
		},

		
	}
</script>