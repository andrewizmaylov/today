<template>
	<div class="max-w-full">
		<menutop v-show="menuTop"></menutop>
		<router-view class=""></router-view>
	</div>
</template>
<script>
	import home from './home.vue';
	import menutop from './menutop.vue';
	import menufullscreen from './menufullscreen.vue';
	import meal from './meal.vue';

	export default {
		name: 'mainapp',
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
			home, menutop, menufullscreen, meal
		},
		mounted() {
			Event.$emit('hideTopMenu');
			this.$router.push('/meal');
		}
	}
</script>