<template>
	<div class="flex flex-col text-center py-4 px-2 rounded border- border-gray-300">
		<div class="w-48 h-48 rounded-full mb-8 mx-2">
			<img :src="'uploads/avatars/'+user.info.avatar" alt="" class="h-full w-full object-cover rounded-full">
		</div>
		<span class="text-lg text-gray-300">{{user.info.first_name}} {{user.info.last_name}} </span>
		<span class="text-lg text-gray-300">{{user.email}}</span>
		<span class="text-lg text-gray-300">{{user.birthday}}</span>
	</div>
</template>
<script>
	export default {
		name: 'usercard',
		props: ['user']
	}
</script>