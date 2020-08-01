<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class UserController extends Controller
{
    
	// protected $user;

	public function __construct()
	{
		// $this->user = auth()->user();
		$this->middleware('auth');
	}

	// 
	//handle common user information score
	//
    public function store($model, Request $request)
    {
    	// return $request->all();

    	$user = auth()->user();
    	// 
    	// retrive the model name outside from query
    	// 
		$model_name = "\\App\\Account\\" . ucfirst($model);

		// instantiate a class
		// and set the validation parameters for the request
		// 
		$validation_rulls = (new $model_name())->getValidation();

		// perfom validation in common way
		// 
		$attributes = $this->validate($request, $validation_rulls);

		// store information in apropriate database table
		// return with response
		// 
		if($attributes) {
			$user->$model()->create($attributes);
			return response(['message' => 'Entry was proceeded', 'path' => '/account/'. strtolower($model)], 200);
		}
	
    }
    public function updateRecord($model, $user_id, Request $request)
    {
        $model_name = "\\App\\Account\\" . ucfirst($model);

        $validation_rulls = (new $model_name())->getValidation();

        $attributes = $this->validate($request, $validation_rulls);

        if($attributes) {
            $row = $model_name::find($user_id);
            foreach($attributes as $key => $value) {
                $row[$key] = $value;
            }
            $row->save();
            return response(['message' => 'Entry was changed succesfully', 'path' => '/account/' . strtolower($model)], 200);
        }       

    }
    public function show($model)
    {
        $table = "\\App\\Account\\". ucfirst($model);
        $result = $table::where('user_id', auth()->id())->first();  
        // dd($result);    
        if($result) {
            // if(is_array($result)) {
            //     return $result[0];
            // }
            return $result;
        }

        $fillable = (new $table)->getFillable();
        $model = [];
        foreach($fillable as $key) {
            $model[$key] = '';
        }
   
        return collect($model);
    }

    public function changeAvatar(Request $request) 			
    {
        if($request->hasFile('file')) {
    		$avatar = $request->file('file');
    		$filename = time() . '.' . $avatar->getClientOriginalExtension();
    		$image = Image::make($avatar);
            if($image->height() > $image->width()) {
                $image->crop($image->width(), $image->width());
            } else {
                $image->crop($image->height(), $image->height());
            }
            $image->resize(300,300)->save(public_path('/uploads/avatars/'.$filename));
    		$info = auth()->user()->info;
            $info->avatar = $filename;
            $info->save();
    		return response(200);
    	}
    }

    public function changeOccupation(Request $request)
    {
    	// dd($request->all());

        // flash message before proceed in modal header
    	// "All data relative for the user can be losted" 
    	// 
    	// may be better give acces for this method only for head of department ir site admin? 
    	// 
    	// inside the transaction
    	// 
    	// clear previosly added occupations for the authentificated user
    	auth()->user()->occupation()->detach();
    	// set the new ones

    	// return $request->occupation;
    	auth()->user()->occupation()->attach($request->all());
    }

    public function getOccupation()
    {
        $output = [];
        $data = auth()->user()->occupation()->get();
        // dd($data);
        foreach($data as $item) {
            $output[] = $item->id;
        }
        return $output;
    }
}
