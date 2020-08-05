<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
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
    public function getforUserByDate($date)
    {
        return Order::where('user_id', auth()->user()->id)->where('date', $date)->first();
        // if(!$row) {
        //     return null;
        // }
        // return $row;
    }

    public function getByDate($date)
    {
        Order::where('date', $date)->get();
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'user_id' => 'required',
            'meal_id' => 'required',
            'date' => 'required',
        ]);
        if($data) {

            $row = Order::where('user_id', $data['user_id'])->where('date', $data['date'])->first();
            // dd($row);
            if($row) {
                $row->update(['meal_id'=>$data['meal_id']]);
                return response(['message' => "Entry was updated. New meal_id {$data['meal_id']} was assigned for the user for {$data['date']}"], 200);
            }
            Order::create($data);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }
}
