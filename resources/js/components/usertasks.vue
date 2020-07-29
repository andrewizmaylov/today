<template>
	<div>
		<div v-if="selector" >
			<section class="mt-4 px-4 flex items-center justify-center md:hidden">
			    <router-link :to="item.route" v-for="item in list.slice(0,2)" :key="item.key" class="w-5/12 hotMenuItem collapsed" >{{item.name}}</router-link>
			    <router-link to="/user/tasks" class="w-2/12 hotMenuItem">...</router-link>
			</section>
			<section class="hidden mt-4 px-4 items-center justify-center md:flex lg:hidden">
			    <router-link :to="item.route" v-for="item in list.slice(0,4)" :key="item.key" class="w-5/12 hotMenuItem collapsed" >{{item.name}}</router-link>
			    <router-link to="/user/tasks" class="w-2/12 hotMenuItem ">...</router-link>
			</section>
			<section class="hidden mt-4 px-4 items-center justify-center lg:flex">
			    <router-link :to="item.route" v-for="item in list.slice(0,6)" :key="item.key" class="w-5/12 hotMenuItem collapsed" >{{item.name}}</router-link>
			    <router-link to="/user/tasks" class="w-2/12 hotMenuItem ">...</router-link>
			</section>
		</div>

		<div v-else  class="max-w-sm mx-auto flex flex-col items-center mt-4">
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
	</div>




</template>
<script>
	export default {
		name: 'usertasks',
		props: ['collapsed'],
		data() {
			return {
				list: [
					{route: '/fillstat', name: 'статистика'},
					{route: '/outcast', name: 'выезд'},
					{route: '/departmentschedule', name: 'расписание по  отделу'},
					{route: '/search', name: 'поиск сотрудника'},
					{route: '/createreport', name: 'отправить отчет'},
					{route: '/getdocs', name: 'заказ документов'},
				],
				selector: false,
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
		mounted() {
			this.selector = this.collapsed;
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
	.collapsed {
		display: flex;
		flex-direction: column;
		text-align: center;

	}
</style>