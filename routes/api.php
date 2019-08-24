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

Route::group(['prefix' => 'v1'], function(){
    /*
    |-------------------------------------------------------------------------------
    | Get User
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/user/{id}
    | Controller:     API\UsersController@getUser
    | Method:         GET
    | Description:    Gets all of the user in the application
    */
    Route::get('/user/{id}', 'API\UsersController@getUser');
    /*
    |-------------------------------------------------------------------------------
    | Get All Blogs
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/blogs
    | Controller:     API\BlogsController@getBlogs
    | Method:         GET
    | Description:    Gets all of the blogs in the application
    */
    Route::get('/blogs', 'API\BlogsController@getBlogs');

    /*
     |-------------------------------------------------------------------------------
     | Get An Individual Blog
     |-------------------------------------------------------------------------------
     | URL:            /api/v1/blogs/{id}
     | Controller:     API\blogsController@getBlog
     | Method:         GET
     | Description:    Gets an individual blog
    */
    Route::get('/blogs/{id}', 'API\BlogsController@getBlog');
    /*
        |-------------------------------------------------------------------------------
        | Register A New User
        |-------------------------------------------------------------------------------
        | URL:            /api/v1//user/add
        | Controller:     API\UsersController@addUser
        | Method:         POST
        | Description:    Register a new user
       */
    Route::post('/register', 'API\UsersController@register');
});
Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function(){
    /*
     |-------------------------------------------------------
    +------------------------
     | Adds a New Blog
     |-------------------------------------------------------------------------------
     | URL:            /api/v1/blogs
     | Controller:     API\BlogsController@postNewBlog
     | Method:         POST
     | Description:    Adds a new blog to the application
    */
    Route::post('/blogs', 'API\BlogsController@postNewBlog');
});


