<?php

use Illuminate\Support\Facades\Route;

Route::view("/", 'welcome');

Route::view("/verstka", 'verstka');

Auth::routes();
// retrieve data to localStorage
Route::get('/app/web/sort/of/how/i/will/mess/you/up/user', function () {
	$user = auth()->user();
	// $user->token = $user->createToken('Password Grant')->accessToken;
	return $user;
});

Route::post('/order', 'OrderController@store');

Route::post('/mealRaitng', 'MealRaitingController@store');
Route::get('/mealRaitng/{date}', 'MealRaitingController@get');

Route::post('/comment', 'CommentController@store');
Route::get('/comment', 'CommentController@index');
Route::get('/comment/{date}', 'CommentController@show');

Route::get('/home', 'HomeController@index')->name('home');
