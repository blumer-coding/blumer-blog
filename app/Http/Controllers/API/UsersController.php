<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\StoreRegisterRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
class UsersController extends Controller
{
    public function getUser(){
        return Auth::guard('api')->user();
    }

    public function register(StoreRegisterRequest $request)
    {
        $user = new User();

        $user->name         = $request->input('name');
        $user->password     = $request->input('pwdcfm');
        $user->email        = $request->input('email');

        $user->save();

        return response()->json($user,201);
    }
}
