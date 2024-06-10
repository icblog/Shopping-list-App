<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class TempLog extends Model
{
    use HasFactory;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    //no created_at and updated_at columns in db
    public $timestamps = false;

    public static function checkIfUserAlreadySignedOut($request)
    {
        $outComeArray = array('error' => false, 'signed_out_id' => 0);
        $todayDate = now()->format('Y-m-d');

        try {
            $outComeResult = DB::table('temp_logs')
                ->select('id')
                ->where('fname', $request->fname)
                ->where('lname', $request->lname)
                ->whereNull('time_in')
                ->whereDate('time_out', '=', $todayDate)
                ->first();
            if (!is_null($outComeResult)) {
                $outComeArray['signed_out_id'] = $outComeResult->id;
            }

            return $outComeArray;
        } catch (\Exception $e) {
            //dd($e);
            $outComeArray['error'] = true;
            return $outComeArray;
        }
    }

    public static function offsiteSignOut($search_name)
    {
        $outComeArray = array('error' => false, 'temp_sign_out_res' => []);
        $todayDate = now()->format('Y-m-d');
        try {
            $query = DB::table('temp_logs')->select('id', 'fname', 'lname');

            $query->where([
                ['lname', 'LIKE', "%{$search_name}%"]
            ]);

            $query->whereNull('time_in')->whereDate('time_out', '=', $todayDate);

            $outComeArray['temp_sign_out_res'] = $query->get();

            return $outComeArray;
        } catch (\Exception $e) {
            $outComeArray['error'] = true;
            return $outComeArray;
        }
    }
}
