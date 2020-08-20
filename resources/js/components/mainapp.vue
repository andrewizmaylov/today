<template>
	<div class="max-w-full">
		<menutop v-show="menuTop"></menutop>
		<router-view class=""></router-view>
	</div>
</template>
<script>
	import menutop from './menutop.vue';


	export default {
		name: 'mainapp',
		data() {
			return {
				menuTop: false,
			}
		},
		created() {
			Event.$on('showTopMenu', () => this.menuTop = true);
			Event.$on('hideTopMenu', () => this.menuTop = false);
		},   
		components: {
			menutop,
		},
		mounted() {
			Event.$emit('hideTopMenu');
			this.$router.push({name: 'meal'});
		}
	}
</script>