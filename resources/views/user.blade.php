@extends('layouts.main')
@section('content')
<div class="flex flex-col justify-between bg-gray w-screen h-screen ">
	<a href="/">
		<img src="/img/exit.svg" alt="" class="ml-auto mt-4 mr-4">
	</a>

		
		<img src="/img/user/Mikhail_Gorbachev_1987.jpg" alt="" class="w-3/5 mx-auto rounded-full shadow-lg">

		<div class="text-center">
			<span class="text-xl">Михаил Горбачев</span>
			<h6>президент СССР</h6>
		</div>

		<div class=" text-center pt-4">
			<div class="flex justify-center pt-4">
				<a href="/userDetail"><img src="/img/phone.svg" alt="" class="px-3"></a>
				<a href="/userDetail"><img src="/img/email.svg" alt="" class="px-3 pt-1"></a>
				<a href="/userDetail"><img src="/img/insta.svg" alt="" class="px-3"></a>
				<a href="/userDetail"><img src="/img/geo.svg" alt="" class="px-3"></a>
			</div>
		</div>
		<div class="flex justify-center pb-16 pt-8">
			<img src="/img/docs.svg" alt="" class="px-2">
			<img src="/img/tasks.svg" alt="" class="px-2">
		</div>
	
	

</div>
@endsection