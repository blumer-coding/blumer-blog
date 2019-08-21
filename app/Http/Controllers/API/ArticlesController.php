<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Article;
class ArticlesController extends Controller
{
    /*
     |-------------------------------------------------------------------------------
     | Get All Articles
     |-------------------------------------------------------------------------------
     | URL:            /api/v1/articles
     | Method:         GET
     | Description:    Gets all of the articles in the application
    */
    public function getArticles(){
        $articles = Article::all();
        return response()->json($articles);
    }

    /*
     |-------------------------------------------------------------------------------
     | Get An Individual Article
     |-------------------------------------------------------------------------------
     | URL:            /api/v1/articles/{id}
     | Method:         GET
     | Description:    Gets an individual article
     | Parameters:
     |   $id   -> ID of the article we are retrieving
    */
    public function getArticle($id){
        $article = Article::all();
        return response()->json($article);
    }

    /*
     |-------------------------------------------------------------------------------
     | Adds a New Article
     |-------------------------------------------------------------------------------
     | URL:            /api/v1/articles
     | Method:         POST
     | Description:    Adds a new article to the application
    */
    public function postNewArticle(){

    }
}
