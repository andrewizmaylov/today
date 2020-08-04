<template>
	<section class="">
		<img :src="'/img/meal/'+item.img" alt="">
		<span class="meal-txt text-2xl leading-none " v-show="language">{{item.rus}}</span>
		<span class="meal-txt text-2xl leading-none " v-show="!language">{{item.eng}}</span>
	</section>
</template>
<script>
	export default {
		name: 'foodbox',
		props: ['item', 'language'],
		
	}
</script>