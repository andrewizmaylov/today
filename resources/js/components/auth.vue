<template>
	<router-view></router-view>
</template>

<script>
	import login from './auth/login.vue';
	import registration from './auth/registration.vue';

	export default {
		name: 'auth',
		components: {
			login, registration,
		},
		mounted() {
			Event.$emit('hideTopMenu');
			this.$router.push('/login');
		}
	}
</script>