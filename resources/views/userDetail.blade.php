@extends('layouts.main')
@section('content')
<div class="flex flex-col justify-between bg-gray w-screen h-screen ">
	<a href="/user">
		<img src="/img/exit.svg" alt="" class="ml-auto mt-4 mr-4">
	</a>

		
		<img src="/img/user/Mikhail_Gorbachev_1987.jpg" alt="" class="w-3/5 mx-auto rounded-full shadow-lg">

		<div class="text-center">
			<span class="text-xl">Михаил Горбачев</span>
			<h6>президент СССР</h6>
		</div>
		
		<ul class=" mx-auto ">
			<div class="flex justify-left mt-6">
				<img src="/img/phone.svg" alt="">
				<span class="text-sm text-gray-700 font-bold ml-2">+7-977-812-88-99</span>
			</div>
			<div class="flex justify-left mt-6">
				<img src="/img/email.svg" alt="">
				<span class="text-sm text-gray-700 font-bold ml-2">m.gorbachev@dom-2.app</span>
			</div>
			<div class="flex justify-left mt-6">
				<img src="/img/insta.svg" alt="">
				<span class="text-sm text-gray-700 font-bold ml-2">@m.gorbachev</span>
			</div>
		</ul>

		<div class=" text-center pt-4 pb-16">
			<span>Написать через:</span>
			<div class="flex justify-center pt-4">
				<a href="wa.me"><img src="/img/whatsapp.svg" alt="" class="px-3"></a>
				<a href="wa.me"><img src="/img/viber.svg" alt="" class="px-3"></a>
				<a href="wa.me"><img src="/img/telegram.svg" alt="" class="px-3"></a>
			</div>
		</div>
	
	

</div>
@endsection