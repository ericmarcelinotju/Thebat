<?php

namespace App\Http\Controllers\Forum;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Forum;

class ForumController extends Controller
{
	public function get(){
    	$forums = Forum::with('rules')->get();

    	return $forums;
    }

    public function find($id){
    	$forum = Forum::with('rules')->with('user')->with('comments')->find($id);

    	return $forum;
    }

    public function search($search){
    	$forums = Forum::with('rules')->with('user')->with('comments')->where('categories', 'like', '%'.$search.'%')->get();

    	foreach ($forums as $key => $forum) {
    		$categories = explode('#',$forum->categories);
    		if(!in_array($search, $categories))
    			unset($forums[$key]);
    	}

    	return $forums;
    }

    public function create(Request $request){
    	try{
	    	$forum = new Forum();
	    	$forum->title = $request->title;
	    	$forum->content = $request->content;
	    	$forum->type = $request->type;
	    	$forum->categories = $request->categories;
	    	$forum->user_id = Auth::user()->id;
	    	
	    	$forum->save();

	    	$forum->rules()->attach($request->rules);
	    	
	    	return $forum;
	    }catch(Exception $e){
	    	throw $e;
	    }
    }


}
