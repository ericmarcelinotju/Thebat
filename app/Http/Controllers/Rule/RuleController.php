<?php

namespace App\Http\Controllers\Rule;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Rule;

class RuleController extends Controller
{
    public function get(){
    	$rules = Rule::all();

    	return $rules;
    }
}
