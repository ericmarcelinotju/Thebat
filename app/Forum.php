<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Rule;
use App\User;
use App\Comment;

class Forum extends Model
{
    public function rules()
    {
    	return $this->belongsToMany(Rule::class);
    }

    public function comments()
    {
    	return $this->hasMany(Comment::class);
    }

    public function user()
    {
    	return $this->belongsTo(User::class);
    }
}
