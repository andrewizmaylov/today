<?php

use Illuminate\Support\Facades\Route;

Route::view("/", 'welcome');

Route::view("/verstka", 'verstka');

Auth::routes();

// retrieve data to localStorage
Route::get('/app/web/sort/of/how/i/will/mess/you/up/user', function () {
	$user = auth()->user();
	// dd($user);
	// $user->token = $user->createToken('Password Grant')->accessToken;
	return $user;
});
// check is still authenticated for every request in VueRouter BeforeEach Hook
Route::get('/check', function () {
	if(auth()->user()) {
		return auth()->user()->id;
	}
});

Route::post('/order', 'OrderController@store');

Route::post('/mealRaitng', 'MealRaitingController@store');
Route::get('/mealRaitng/{date}', 'MealRaitingController@get');

Route::post('/comment', 'CommentController@store');
Route::get('/comment', 'CommentController@index');
Route::get('/comment/{date}', 'CommentController@show');

Route::get('/home', 'HomeController@index')->name('home');


// api routes
Route::get('/api/occupation', function () {
	return \App\Occupation::orderBy('russian')->get();
});

// change user occupation
Route::post('/user/occupation', 'UserController@changeOccupation');
Route::get('/user/occupation', 'UserController@getOccupation');

//get user avatar
Route::get('/user/avatar', function () {
	$record = \App\Account\Info::where('user_id', auth()->id())->first();
	if(!$record) {
		return 'avatar.png';
	}
	return $record->avatar;
});

//change user avatar
Route::post('/user/avatar', 'UserController@changeAvatar');

// control user informtion
Route::get('/app/web/sort/of/how/i/will/mess/you/up/account/{model}', 'UserController@show');
Route::post('/account/{model}', 'UserController@store');
Route::patch('/account/{model}/{user_id}', 'UserController@updateRecord');

