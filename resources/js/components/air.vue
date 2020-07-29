<template>
	<div class="container mx-auto">
		<div v-show="!showDatePicker">
			<div class="text-center mt-4">
				<div class="text-lg font-bold">{{moment(date)}}</div>
				<div class="text-xs text-gray-600">6789 день эфира</div>
			</div>

			<div class=" my-6 text-center text-xs font-bold text-gray-700">
				<span class="inline-block mx-auto border border-gray-800 rounded-lg py-2 px-6 shadow-sm" @click="showDatePicker=true">Выбрать другую дату</span>
			</div>
			<div class="max-w-2xl mx-auto">
				<div v-for="i in 4" class="relative aspect-16x9 mb-2">
					<iframe class="absolute w-full h-full px-4 py-2" src="https://www.youtube.com/embed/Rf4rnII9Erw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
			</div>
		
		</div>
		<div v-show="showDatePicker" class="flex flex-col">
			<v-date-picker is-inline v-model="date" locale="ru" class="mx-auto mt-8" @dayclick="showDatePicker=false"/>
			<div @click="showDatePicker=false" class="absolute -z-10 h-screen w-screen"></div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'air',
		methods: {
			moment(date) {
				return moment(date).format('D MMMM YYYY');
			},
			pickNewDate() {
				showDatePicker=false;
			}
		},
		data() {
			return {
				showDatePicker: false,
				date: new Date(),
			}
		}
	}
</script>
<style scoped>
	.aspect-16x9 {
	  padding-bottom: 56.25%; 
	}	
</style>