<template>
	<div>
		<ul class="text-center mt-8 mb-12">
				<li v-for="dep in list" class="py-2 mt-2 font-semibold text-lg text-gray-700 uppercase tracking-wider" @click="$router.push('department/'+dep.id)">{{dep.name}}</li>		

			</ul>
			
			<img src="/img/x-circle.svg" alt="" class="mx-auto mb-12" @click="$router.push('home')">
	</div>
</template>
<script>
	export default {
		name: 'departments',
		data() {
			return {
				list: [
					{id: 1, name: 'АДМИНИСТРАЦИЯ'},
					{id: 2, name: 'БУХГАЛТЕРИЯ'},
					{id: 3, name: 'ВЕДУЩИЕ'},
					{id: 4, name: 'ВОДИТЕЛИ'},
					{id: 5, name: 'РЕДАКТОРЫ'},
					{id: 6, name: 'гримеры'},
					{id: 7, name: 'звукорежиссеры'},
					{id: 8, name: 'инженеры'},
					{id: 9, name: 'логеры'},
					{id: 10, name: 'операторы'},
					{id: 11, name: 'овсетители'},
					{id: 12, name: 'повара'},
					{id: 13, name: 'режиссеры'},
					{id: 14, name: 'режиссеры монтажа'},
					{id: 15, name: 'участники'},
				]
			}
		}
	}
</script>