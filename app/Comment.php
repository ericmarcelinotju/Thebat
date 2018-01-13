<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Comment extends Model
{
	protected $appends = ['username', 'comments'];

    public function user()
    {
    	return $this->belongsTo(User::class);
    }

    public function getUsernameAttribute()
    {
    	return $this->user()->first()->username;
    }

    public function comments()
    {
    	return $this->hasMany(Comment::class);
    }

    public function getCommentsAttribute()
    {
    	return $this->comments()->get();
    }
}
