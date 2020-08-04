<template>
	<div class="w-full h-full bg-gray-800 text-center">
		<div class="flex justify-center">
			<usercard v-for="user in cooks" :key="user.id" :user="user" class="m-8"></usercard>
		</div>
	</div>
</template>
<script>
	import usercard from '../user/usercard.vue';

	export default{
		name: 'cooks',
		data() {
			return {
				cooks: [],
			}
		},
		components: { usercard },
		created() {
			axios.get('/cooks')
			  .then(response => {
			  	console.log('list of cooks');
			    console.log(response);
			  	this.cooks = response.data;
			  })
			  .catch(error => {
			    console.log(error);
			  });
		}
	}
</script>