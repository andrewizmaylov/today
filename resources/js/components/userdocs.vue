<template>
	<div class="flex flex-col items-center mt-4"> 
		<div class="flex flex-wrap px-4 my-4">
			<div v-for="item in list" class="flex flex-col text-center mb-6 w-1/2" @click="navigate(item.route)" >
				<img src="/img/docsempty.svg" :alt="item.name">
				<!-- <span class="-mt-8 px-2 uppercase text-xs text-gray-800 leading-tight font-extrabold">{{item.name}}</span> -->
				<span class="cardtitle">{{item.name}}</span>
			</div>
		</div>
		<div class="my-6 mx-auto w-full">
			<img src="/img/x-circle.svg" alt="" class="mx-auto" @click="closeScreen">
		</div>
	</div>
</template>
<script>
	export default {
		name: 'userdocs',
		data() {
			return {
				list: [
					{route: '/user/passport', name: 'паспорт'},
					{route: '/user/forreign', name: 'заграничный паспорт'},
					{route: '/user/drive', name: 'водительское удостоверение'},
					{route: '/user/gop', name: 'GOP'},
					{route: '/user/medical', name: 'медицинские сведения'},
					{route: '/user/address', name: 'адреса'},
				],
			}
		},
		methods: {
			navigate(route) {
				Event.$emit('showTopMenu');
				this.$router.push({path: route});
			},
			closeScreen() {
				Event.$emit('showTopMenu');
				this.$router.push('/home');
			}
		},

	}
</script>
<style>
	.cardtitle{
		width: 140px; 
		height: 44px; 
		margin-left: auto; 
		margin-right: auto; 
		margin-top: -43px; 

		text-transform: uppercase; 
		font-size: .72em; 
		font-weight: bold; 
		font-family: 'Roboto';
		line-height: 1.3;

		display: flex;
		flex-direction: column;
		justify-content: center;
		letter-spacing: 0.04em;
	}

</style>