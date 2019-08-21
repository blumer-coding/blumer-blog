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

Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function(){
    Route::get('/user', function( Request $request ){
        return $request->user();
    });
    /*
 |-------------------------------------------------------------------------------
 | Get All Cafes
 |-------------------------------------------------------------------------------
 | URL:            /api/v1/cafes
 | Controller:     API\CafesController@getCafes
 | Method:         GET
 | Description:    Gets all of the cafes in the application
*/
    Route::get('/articles', 'API\ArticlesController@getArticles');

    /*
     |-------------------------------------------------------------------------------
     | Get An Individual Cafe
     |-------------------------------------------------------------------------------
     | URL:            /api/v1/articles/{id}
     | Controller:     API\articlesController@getCafe
     | Method:         GET
     | Description:    Gets an individual cafe
    */
    Route::get('/articles/{id}', 'API\ArticlesController@getArticle');

    /*
     |-------------------------------------------------------
    +------------------------
     | Adds a New Cafe
     |-------------------------------------------------------------------------------
     | URL:            /api/v1/cafes
     | Controller:     API\CafesController@postNewCafe
     | Method:         POST
     | Description:    Adds a new cafe to the application
    */
    Route::post('/articles', 'API\ArticlesController@postNewArticle');

});


