<template>
<div>
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
					$('#loader').modal('show');
				}
				this.showModal('hide');
			},
		}
	}
</script>