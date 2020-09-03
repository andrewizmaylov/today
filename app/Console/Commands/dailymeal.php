<?php

namespace App\Console\Commands;

use App\Order;
use Carbon\Carbon;
use Illuminate\Console\Command;

class dailymeal extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'daily:insert';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'insert everyday meal';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        // return 0;
        $date = Carbon::now()->format('Y-m-d');
        Order::create([
             'user_id' => 1,
             'meal_id' => 5,
             'place' => 'hotel',
             'msg' => 'в отеле',
             'date' => $date
        ]);
        Order::create([
             'user_id' => 5,
             'meal_id' => 3,
             'place' => 'hotel',
             'msg' => 'в отеле',
             'date' => $date
        ]);
        Order::create([
             'user_id' => 16,
             'meal_id' => 6,
             'place' => 'hotel',
             'msg' => 'в отеле',
             'date' => $date
        ]);
    }
}
