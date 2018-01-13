<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Exception;

class LoginController extends Controller
{
    public function getUser(){
        if(Auth::check()){
            return Auth::user();
        }else{
            throw new Exception("User session not found");
            
        }
    }
    public function login(Request $request)
    {
        $email = $request->email;
        $password = $request->password;
        $remember = $request->remember;

        if (Auth::attempt(['email' => $email, 'password' => $password], $remember)) {
            return Auth::user();
        }else{
            throw new Exception("Credential not match");
        }
    }

    public function logout()
    {
        return Auth::logout();
    }
}
