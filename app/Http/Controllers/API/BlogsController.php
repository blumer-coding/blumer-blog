<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\User;
class BlogsController extends Controller
{
    /*
     |-------------------------------------------------------------------------------
     | Get All Blogs
     |-------------------------------------------------------------------------------
     | URL:            /api/v1/blogs
     | Method:         GET
     | Description:    Gets all of the blogs in the application
    */
    public function getBlogs(){
        $blogs = Blog::all();
        return response()->json($blogs);
    }

    /*
     |-------------------------------------------------------------------------------
     | Get An Individual Blog
     |-------------------------------------------------------------------------------
     | URL:            /api/v1/blogs/{id}
     | Method:         GET
     | Description:    Gets an individual blog
     | Parameters:
     |   $id   -> ID of the blog we are retrieving
    */
    public function getBlog($id){
        $blog = Blog::all();
        return response()->json($blog);
    }

    /*
     |-------------------------------------------------------------------------------
     | Adds a New Blog
     |-------------------------------------------------------------------------------
     | URL:            /api/v1/blogs
     | Method:         POST
     | Description:    Adds a new blog to the application
    */
    public function postNewBlog(){

    }
}
