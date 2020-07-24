<template>
	<div class="container">
		<div v-show="!showDatePicker">
			<div class="text-center mt-4">
				<div class="text-lg font-bold">{{moment()}}</div>
				<div class="text-xs text-gray-600">6789 день эфира</div>
			</div>

			<div class=" my-6 text-center text-xs font-bold text-gray-700">
				<span class="inline-block mx-auto border border-gray-800 rounded-lg py-2 px-6 shadow-sm" @click="showDatePicker=true">Выбрать другую дату</span>
			</div>
			<iframe class="mx-auto mt-4" src="https://www.youtube.com/embed/sCYzXDYN_vk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe class="mx-auto mt-4" src="https://www.youtube.com/embed/CrX4rfHwBoE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe class="mx-auto mt-4" src="https://www.youtube.com/embed/Rf4rnII9Erw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe class="mx-auto mt-4" src="https://www.youtube.com/embed/PTSLaw4OJkI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>	
		</div>
		<div v-show="showDatePicker">
			<p @click="showDatePicker=false">datepicker</p>
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
		},
		data() {
			return {
				showDatePicker: false,
			}
		}
	}
</script>