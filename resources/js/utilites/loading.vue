<template>
<div class="h-screen absolute inset-0" :class="formProceeded ? '' : 'hide'">
	<img width='250' height=auto src='img/isLoading.gif' alt="">
</div>
</template>

<script>
	export default {
		name: 'loading-status',
		methods: {
			showModal(condition) {
				$('#loader').modal('show');
			}
		},
		computed: {
			isLoading() {
				return this.$store.getters.isLoading;
			},

			formProceeded() {
				if(!this.isLoading) {
					return true;
					// $('#loader').modal('show');
				}
				return false;
				// this.showModal('hide');
			},
		}
	}
</script>