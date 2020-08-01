<template>
	<div class="max-w-md mx-auto flex flex-col justify-between bg-gray-100 w-screen h-screen py-8">
		<div class="w-3/5 mx-auto">
			<img src="/img/mainLogoBundedBox.svg" alt="" class="w-full" @click="navigate('home')">
		</div>
		
		<ul class="text-center text-xl mx-6 my-8">
			<li class="py-2 mt-2 " @click.prevent="navigate('/news')">НОВОСТИ</li>		
			<li class="py-2 mt-2 " @click="navigate('/air')">ЭФИРЫ</li>		
			<li class="py-2 mt-2 " @click="navigate('/places')">ПЛОЩАДКИ</li>		
			<li class="py-2 mt-2 " @click="navigate('/schedule')">РАСПИСАНИЕ</li>		
			<li class="py-2 mt-2 " @click="navigate('/departments')">ОТДЕЛЫ</li>		
			<li class="py-2 mt-2 " @click="navigate('/staff')">СОТРУДНИКИ</li>		
			<li class="py-2 mt-2 " @click="navigate('/docs')">ДОКУМЕНТЫ</li>		
			<li class="py-2 mt-2 " @click="navigate('/meal')">ЗАКАЗ ЕДЫ</li>		
			<li class="py-2 mt-2 " @click="navigate('/auth')">ПОЛЕЗНАЯ ИНФОРМАЦИЯ</li>		
			<li class="py-2 mt-2 " @click="logout">ВЫЙТИ ИЗ СИСТЕМЫ</li>		
		</ul>
		
		<img src="/img/x-circle.svg" alt="" class="mx-auto pb-4" @click="closeScreen">
	</div>
</template>
<script>
	export default {
		name: 'menufullscreen',
		methods: {
			navigate(route) {
				Event.$emit('showTopMenu');
				this.$router.push({path: route});
			},
			closeScreen() {
				Event.$emit('showTopMenu');
				this.$router.go(-1);
			},
			logout() {
				axios.post('/logout')
				  .then(response => {
				  	console.log(response.data);
		            this.$store.commit('logout');
		            this.$router.push('/meal');
				  })
				  .catch(error => {
				  	console.log(error);
				  	this.$store.commit('logout');
				    window.location.replace('/');
				  });		 
			},
		},

	}
</script>