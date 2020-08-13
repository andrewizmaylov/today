<?php

namespace App\Http\Controllers;

use App\Meal;
use App\Mealmenu;
use App\mealRaiting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MealController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth')->except(['getMenu', 'getMeal']);
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeRating(Request $request)
    {
        // dd($request);
        $data = $request->validate([
            'date' => 'required|unique:meal_raitings,user_id',
            'rate' => 'required',
        ]);

        if($data) { 
            $data['user_id'] = auth()->user()->id;
            // check record exists
            // $row = DB::table('meal_raitings')->where([['user_id', $data['user_id']], ['date', $data['date']]] )->first();
            $row = mealRaiting::where('user_id', $data['user_id'])->where('date', $data['date'])->first();
            // dd($row);
            if($row) {
                $row->update(['rate'=>$data['rate']]);
                return response(['message' => "Entry was updated. New Rate {$data['rate']} was assigned for the meal"], 200);
            }
            mealRaiting::create($data);
            return response(['message' => 'Entry was created'], 201);
        }       

    }

    public function getRating($date)
    {
        return mealRaiting::where('date', $date)->pluck('rate');
    }
    

    public function getMeal()
    {
         return Meal::all();
    }

    public function getMenu($date)
    {
         $result = Mealmenu::where('date', $date)->firstOrFail();
         return unserialize($result['keys']);
    }

    public function storeMenu(Request $request)
    {
        $data = $request->validate([
            'date' => 'required',
            'keys' => 'required'
        ]);
        $data['keys'] = serialize($request->keys);
        if($data) { 
            $row = Mealmenu::where('date', $data['date'])->first();
            if($row) {
                $row->update(['keys'=>$data['keys']]);
                return response(['message' => "Entry was updated. New array of keys {$data['keys']} was assigned for the mealmenu on {$data['date']}"], 200);
            }
            mealMenu::create($data);
            return response(['message' => 'Entry was created'], 201);
        }    
    }



    public function cookdetector()
    {
        if(count(auth()->user()->occupation) >0) {
            return auth()->user()->occupation[0]->id === 7;
        }
        return false;

        // return (\App\OccupationUser::where('user_id', auth()->user()->id)->firstOrFail())->occupation_id === 7;
    }
    public function cooks()
    {
        $keys = \App\OccupationUser::where('occupation_id', 7)->get()->pluck('user_id');
        $users = \App\User::with('Info')->get();
        return $users->intersect(\App\User::whereIn('id', $keys)->get());
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\mealRaiting  $mealRaiting
     * @return \Illuminate\Http\Response
     */
    public function show(mealRaiting $mealRaiting)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\mealRaiting  $mealRaiting
     * @return \Illuminate\Http\Response
     */
    public function edit(mealRaiting $mealRaiting)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\mealRaiting  $mealRaiting
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, mealRaiting $mealRaiting)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\mealRaiting  $mealRaiting
     * @return \Illuminate\Http\Response
     */
    public function destroy(mealRaiting $mealRaiting)
    {
        //
    }
}
