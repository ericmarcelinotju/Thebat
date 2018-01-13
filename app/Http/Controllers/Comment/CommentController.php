<?php

namespace App\Http\Controllers\Comment;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Comment;

class CommentController extends Controller
{
    public function get($id, $type)
    {
    	# code...
    }

    public function create(Request $request)
    {
    	try{
	    	$comment = new Comment();

	    	$comment->content = $request->content;
	    	$comment->type = 'comment';
	    	$comment->user_id = Auth::user()->id;
	    	$comment->forum_id = $request->forum_id;
	    	$comment->comment_id = $request->comment_id;

	    	$comment->save();

	    	return $comment;

    	}catch(Exception $e){
	    	throw $e;
	    }
    }
}
