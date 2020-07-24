<template>
	<div class="relative border border-gray-900 rounded overflow-hidden" style="width: 800px; height: 600px">
		<img :src="place.img" alt="" class="h-full w-full object-cover" >
		<div class="absolute " style="background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%); bottom: 0px; left: 0px; width: 100%
">
			<span class="cardTitle text-sm">{{place.title}}</span>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'place',
		props: ['place'],
	}
</script>
<style scoped>
	.cardImage {
	};
	.cardTitleBG {
		display: inline-block;
		position: absolute;
				background-color: #263238;
	border: 1px solid black;

		background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
	}
	.cardTitle {
		margin-bottom: 1.2em;
		padding-left: .85em;
		font-family: Roboto;
		font-style: normal;
		font-weight: bold;
		color: #FFFFFF;
		
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
</style>