@extends('layouts.main')
@section('content')
<div class="flex flex-col justify-between bg-gray w-screen h-screen ">
	<img src="/img/mainLogoBundedBox.svg" alt="" class="h-16 mx-auto mt-16">
	
	<ul class="text-center text-xl mx-6">
		<a href="/news">
			<li class="py-2 mt-2 ">НОВОСТИ</li>		
		</a>
		<li class="py-2 mt-2 ">ЭФИРЫ</li>		
		<li class="py-2 mt-2 ">ПЛОЩАДКИ</li>		
		<li class="py-2 mt-2 ">РАСПИСАНИЕ</li>		
		<li class="py-2 mt-2 ">ОТДЕЛЫ</li>		
		<li class="py-2 mt-2 ">СОТРУДНИКИ</li>		
		<li class="py-2 mt-2 ">ДОКУМЕНТЫ</li>		
		<li class="py-2 mt-2 ">ВИДЕОТЕКА</li>		
		<li class="py-2 mt-2 ">ПОЛЕЗНАЯ ИНФОРМАЦИЯ</li>		

	</ul>
	<a href="/">
		<img src="/img/x-circle.svg" alt="" class="mx-auto mb-16">
	</a>
	

</div>
@endsection