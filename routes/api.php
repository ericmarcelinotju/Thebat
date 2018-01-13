<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['middleware' => ['session']], function () {
	Route::prefix('auth')->group(function () {
		Route::get('/get-user', 'Auth\LoginController@getUser');
	    Route::post('/login', 'Auth\LoginController@login');
	    Route::post('/logout', 'Auth\LoginController@logout');
	    Route::post('/register', 'Auth\RegisterController@register');
	});


	Route::prefix('forum')->group(function () {
		Route::get('/', 'Forum\ForumController@get');
		Route::get('/{id}', 'Forum\ForumController@find');
		Route::get('/search/{search}', 'Forum\ForumController@search');
		Route::post('/create', 'Forum\ForumController@create');
	});


	Route::prefix('rule')->group(function () {
		Route::get('/', 'Rule\RuleController@get');
	});

	Route::prefix('comment')->group(function () {
		Route::post('/create', 'Comment\CommentController@create');
	});
});


