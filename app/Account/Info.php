<?php

namespace App\Account;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Info extends Model
{
    protected $fillable = [
    	'first_name', 'last_name', 'second_name', 'birthday', 'gender', 'avatar'
    ];

    public function user()
    {
    	return $this->belongsTo(User::class);
    }

    protected $validation_rulls = [
        'first_name' => 'required|string',
        'last_name' => 'required|string',
        'second_name' => 'required|string',
        'birthday' => 'required|date',
        'gender' => 'required|string',
    ];

    public function getValidation()
    {
        return $this->validation_rulls;
    }
}
