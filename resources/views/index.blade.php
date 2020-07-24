@extends('layouts.main')
@section('content')
    <header class="container flex bg-gray-300 py-4 px-6">
    	<a href="#" class="mr-auto">
	        <img src="/img/mainLogoBundedBox.svg" alt="">
    	</a>
		<a href="/user" class="mr-8">
			<img src="/img/user/Mikhail_Gorbachev_1987.jpg" alt="avatar" class="rounded-full h-10 w-10 ">
		</a>
		<a href="/menuFullScreen">
	        <img src="/img/bx_bx-menu-alt-left.svg" alt="">
		</a>
    </header>

	<section class="mt-4 px-4 flex">
		
	    	<button class="w-5/12 h-6 rounded border border-gray-600 mx-2 text-xs font-medium tracking-normal uppercase">first item</button>
	    	<button class="w-5/12 h-6 rounded border border-gray-600 mx-2 text-xs font-medium tracking-normal uppercase">second item</button>
	    	<button class="w-2/12 h-6 rounded border border-gray-600 mx-2 text-sm font-medium tracking-normal ">...</button>
	</section>

	<div class="container px-4 mt-2 flex flex-no-wrap overflow-auto">
		<div class="w-2/3 flex-none p-2">
			<img src="/img/ssl_kartinka.jpg" alt="" class="bg-gray-300 border border-2 rounded">
		</div>
		<div class="w-2/3 flex-none p-2">
			<img src="/img/ssl_kartinka.jpg" alt="" class="bg-gray-300 border border-2 rounded">
		</div>
		<div class="w-2/3 flex-none p-2">
			<img src="/img/ssl_kartinka.jpg" alt="" class="bg-gray-300 border border-2 rounded">
		</div>
		<div class="w-2/3 flex-none p-2">
			<img src="/img/ssl_kartinka.jpg" alt="" class="bg-gray-300 border border-2 rounded">
		</div>
	</div>

	<div class="container px-6 mt-4">
		<ul class="flex border-b justify-center">
			<li class="-mb-px mr-1 ">
				<a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="#">Расписание на день</a>
			</li>
			<li class="mr-1">
				<a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Накануне</a>
			</li>
		</ul>
		<div class="w-full pt-4">
			<p class="px-6 text-xs text-gray-600">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolorem, provident? Dolores odio debitis inventore nisi. Natus molestias dolore nam quas minus praesentium delectus blanditiis, nisi veniam, adipisci accusantium hic!
			</p>			
			<p class="px-6 text-xs text-gray-600 py-2">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolorem, provident? Dolores odio debitis inventore nisi. Natus molestias dolore nam quas minus praesentium delectus blanditiis, nisi veniam, adipisci accusantium hic!
			</p>
		</div>
	</div>	

	<hr class="mt-2">
	<h2 class="text-orange-600 text-sm pl-6 my-4">Новости:</h2>
	<div class="flex w-full h-24 bg-gray-300 mt-1">
		<img src="/img/news/chikens.jpeg" alt="#" class="h-full w-24 object-cover hover:opacity-75 transition easy-in-out duration-150">
		<div class="pl-36 p-4">
			<h3 class="">News title</h3>
			<p class="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		</div>
	</div>
	<div class="flex w-full h-24 bg-gray-300 mt-1">
		<img src="/img/news/people.jpeg" alt="#" class="h-full w-24 object-cover">
		<div class="pl-36 p-4">
			<h3 class="">News title</h3>
			<p class="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		</div>
	</div>
	<div class="flex w-full h-24 bg-gray-300 mt-1">
		<img src="/img/news/people2.jpeg" alt="#" class="h-full w-24 object-cover">
		<div class="pl-36 p-4">
			<h3 class="">News title</h3>
			<p class="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		</div>
	</div>
	<div class="flex w-full h-24 bg-gray-300 mt-1">
		<img src="/img/news/people3.jpeg" alt="#" class="h-full w-24 object-cover">
		<div class="pl-36 p-4">
			<h3 class="">News title</h3>
			<p class="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		</div>
	</div>



	<div class="relative mt-8">
		<input type="text" class="bg-gray-300 border border-2 border-gray-900 rounded-md w-64 px-4 focus:outline-none focus:shadow-outline" placeholder="Search">
	</div>

@endsection