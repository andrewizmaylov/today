<template>
	<div class="inline-block max-w-sm mx-auto flex flex-col justify-between bg-gray-100">
			
			
			<div class="w-36 mx-auto my-16">
				<img src="/img/user/Mikhail_Gorbachev_1987.jpg" alt="" class="w-full h-full object-cover rounded-full shadow-lg">
			</div>

			<div class="text-center mb-6">
				<span class="text-xl">Михаил Горбачев</span>
				<h6>президент СССР</h6>
			</div>

			<div class=" mb-6">
				<div class="flex justify-center" @click="contacts=true" v-show="!contacts">
					<img src="/img/phone.svg" alt="" class="px-3">
					<img src="/img/email.svg" alt="" class="px-3 pt-1">
					<img src="/img/insta.svg" alt="" class="px-3">
					<img src="/img/geo.svg" alt="" class="px-3">
				</div>
			</div>

			<div class="flex flex-wrap px-4  mb-6" v-show="!contacts">
				<div v-for="item in list" class="flex flex-col text-center mb-6 w-1/2" @click="navigate(item.route)" >
					<img src="/img/docsempty.svg" :alt="item.name">
					<span class="cardtitle">{{item.name}}</span>
				</div>
			</div>

			<div class="flex flex-col mb-6 text-center mx-auto" v-show="contacts">
				<div class="flex justify-left mb-4">
					<img src="/img/phone.svg" alt="" class="mr-4">
					<span>+7-977-812-83-21</span>
				</div>
				<div class="flex justify-left mb-4">
					<img src="/img/email.svg" alt="" class="mr-4">
					<span>m.gorbachev@dom-2.app</span>
				</div>
				<div class="flex justify-left mb-4">
					<img src="/img/insta.svg" alt="" class="mr-4">
					<span>@m.gorbachev</span>
				</div>

				<div class="flex flex-col items-center mt-4">
					<span class="text-xs uppercase">Написать через:</span>
					<div class="flex justify-between mt-4">
						<img src="/img/whatsapp.svg" alt="" class="px-4">
						<img src="/img/viber.svg" alt="" class="px-4">
						<img src="/img/telegram.svg" alt="" class="px-4">
					</div>
				</div>

			</div>

			<div class="mt-6">
				<img src="/img/x-circle.svg" alt="" class="mx-auto" @click="closeScreen">
			</div>
	</div>
</template>
<script>
		export default {
			name: 'user',
			data() {
				return {
					list: [
						{route: '/user/docs', name: 'документики'},
						{route: '/user/tasks', name: 'задачки'},
					],
					contacts: false,
				}
			},
			methods: {
				closeScreen() {
					Event.$emit('showTopMenu');
					this.$router.go('-1');
				},
				goBack() {
					this.$router.go(-1);
				},
				showDocs() {
					Event.$emit('showTopMenu');
					this.$router.push('/user/docs');
				},
				showTasks() {
					Event.$emit('showTopMenu');
					this.$router.push('/user/tasks');
				},
				navigate(route) {
					Event.$emit('showTopMenu');
					this.$router.push({path: route});
				},
			}
		}
	</script>
</template>