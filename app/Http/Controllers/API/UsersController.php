<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
class UsersController extends Controller
{
    public function getUser(){
        return Auth::guard('api')->user();
    }

    public function register(Request $request)
    {
        return $request->all();
    }
}
