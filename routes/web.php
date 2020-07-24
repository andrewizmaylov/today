<?php

use Illuminate\Support\Facades\Route;

Route::view("/", 'welcome');
// Route::view("/menuFullScreen", 'menuFullScreen');
// Route::view("/news", 'news');
// Route::view("/user", 'user');
// Route::view("/userDetail", 'userDetail');
Route::view("/verstka", 'verstka');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
