<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class AuthenticationController extends Controller
{
    public $successStatus = 200;

/** 
     * logins api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function login(){ 

        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){ 
            $user = Auth::user(); 
            $success['token'] =  $user->createToken('MyApp')-> accessToken;  
            return response()->json(['success' => $success], $this-> successStatus); 

        } 
        else{ 
            return response()->json(['error'=>'Unauthorised'], 401); 
        } 
    }

/** 
     * logout api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function logout() {
        $accessToken = Auth::user()->token();
        DB::table('oauth_refresh_tokens')
            ->where('access_token_id', $accessToken->id)
            ->update([
                'revoked' => true
            ]);

        $accessToken->revoke();
        return response()->json(['success'=>'Logged out'], $this-> successStatus);
    }
}
