<?php

namespace App;

use App\User;
use App\Occupation;
use Illuminate\Database\Eloquent\Model;

class OccupationUser extends Model
{
    protected $table = 'occupation_user';

    public function user()
    {
    	return $this->hasMany(User::class);
    }    
    public function occupation()
    {
    	return $this->hasMany(Occupation::class);
    }
}
