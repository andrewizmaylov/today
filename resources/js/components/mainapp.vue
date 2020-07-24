<template>
	<div class="antialiased text-gray-900"">
		<menutop v-show="menuTop"></menutop>
		<router-view></router-view>
	</div>
</template>
<script>
	import home from './home.vue';
	import menutop from './menutop.vue';
	import menufullscreen from './menufullscreen.vue';

	export default {
		name: 'main',
		data() {
			return {
				menuTop: true
			}
		},
		created() {
			Event.$on('showTopMenu', () => this.menuTop = true);
			Event.$on('hideTopMenu', () => this.menuTop = false);

		},   
		components: {
			home, menutop, menufullscreen
		}
	}
</script>