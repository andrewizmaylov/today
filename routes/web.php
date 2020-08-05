<?php

use Illuminate\Support\Facades\Route;

Route::view("/", 'welcome');

Route::view("/verstka", 'verstka');

Auth::routes();

Route::get('/test', function () {
	// if(!(auth()->user())) {
	// 	return "null";
	// };
	// $user = auth()->user();
	// return $user->occupation[0]->id ?? null;
	// return \App\User::with('Occupation')->with('Info')->get();
	// $keys = \App\OccupationUser::where('occupation_id', 7)->get()->pluck('user_id');
	// $users = \App\User::with('Info')->get();
	// return $users->intersect(\App\User::whereIn('id', $keys)->get());

});

// retrieve data to localStorage
Route::get('/app/web/sort/of/how/i/will/mess/you/up/user', function () {
	$user = auth()->user() ?? null;
	// dd($user);
	// $user->token = $user->createToken('Password Grant')->accessToken;
	return $user;
});
// check is still authenticated for every request in VueRouter BeforeEach Hook
Route::get('/check', function () {
	return auth()->user() ?? false;

	// if(auth()->user()) {
	// 	return auth()->user()->id;
	// }
});

Route::post('/order', 'OrderController@store');

Route::post('/mealRaitng', 'MealRaitingController@store');
Route::get('/mealRaitng/{date}', 'MealRaitingController@get');
// возможные блюда на след день
// Route::post('/meal', 'MealController@store');
Route::get('/meal/{date}', 'MealRaitingController@getAviable');
Route::get('/mealAll', 'MealRaitingController@getAll');
// проверка пользователь повар или нет для заказа еды
Route::get('/cookdetector', 'MealRaitingController@cookdetector');
// list of all cooks
Route::get('/cooks', 'MealRaitingController@cooks');




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

