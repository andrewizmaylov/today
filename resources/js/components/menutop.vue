<template>
	<header class="container flex bg-gray-300 py-4 px-6">
	    <img src="/img/mainLogoBundedBox.svg" alt="mainLogoBundedBox" class="mr-auto" @click="$router.push('/home')">
	    <img src="/img/user/Mikhail_Gorbachev_1987.jpg" alt="avatar" class="rounded-full h-10 w-10 mr-8" @click="showUser">
        <img src="/img/bx_bx-menu-alt-left.svg" alt="menuFullScreen" @click="showBigMenu"> 
	</header>
</template>
<script>
	export default {
		name: 'menutop',
		data() {
			return {
				showTopMenu: true,
			}
		},
		methods: {
			showUser() {			
				Event.$emit('hideTopMenu');
				this.$router.push('/user');
			},
			showBigMenu() {
				Event.$emit('hideTopMenu');
				this.$router.push('/bigMenu');
			},

		}

	}
</script>