<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Occupation extends Model
{
    protected $guarded = [];
    
    public function user()
    {
    	return $this->belongsToMany(User::class)->withTimestamps();
    }
}
