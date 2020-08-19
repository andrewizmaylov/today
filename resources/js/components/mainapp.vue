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
			let newDate = moment(this.date).format("YYYY-MM-DD 18:00");
			if(moment(this.date).isAfter(newDate)) {
				this.$router.push({name: 'meal19'});
				// alert('You can change the order');
			} else {
				this.$router.push({name: 'meal'});
			}
		}
	}
</script>