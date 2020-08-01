<?php

namespace App;

use App\Comment;
use App\mealRaiting;
use App\Account\Info;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function Info()
    {
        return $this->hasOne(Info::class);
    }

    public function raits()
    {
        return $this->hasMany(mealRaiting::class);
    }
    
    public function comment()
    {
        return $this->hasMany(Comment::class);
    }
}
