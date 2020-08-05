<template>
	<section class="">
		<img :src="'/img/meal/'+item.img" alt="">
		<span class="meal-txt text-2xl leading-none ">{{label()}}</span>
	</section>
</template>
<script>
	export default {
		name: 'foodbox',
		props: ['item', 'title'],
		methods: {
			label() {
				if(this.title) {
					return this.item[this.title];
				}
				return null;
			}
		}
		
	}
</script>