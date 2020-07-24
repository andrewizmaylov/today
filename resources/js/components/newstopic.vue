<template>
	<div class="">
		<div class="w-full">
			<img :src="topic.image" alt="" class="w-full h-full object-cover">
		</div>
		<div class="px-6">
			<h3 class="text-lg font-bold my-3">{{topic.title}}</h3>
			<p class="mb-4">{{topic.text}}</p>
		</div>
		<img src="/img/x-circle.svg" alt="" class="mx-auto mb-12" @click="$router.go(-1)">
	</div>
</template>
<script>
	export default {
		name: 'newstopic',
		data() {
			return {
				topic: {},
			}
		},
		created() {
			this.topic = this.$route.params;
		}
	}
</script>