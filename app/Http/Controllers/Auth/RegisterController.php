<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Exception;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $username = $request->username;
        $email = $request->email;
        $password = $request->password;

        $user = User::create([
            'username' => $username,
            'email' => $email,
            'password' => bcrypt($password),
        ]);

        return Auth::login($user);
    }
}
