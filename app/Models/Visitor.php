<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class Visitor extends Model
{
  use HasFactory;
  /**
   * The table associated with the model.
   *
   * @var string
   */
  //no created_at and updated_at columns in db
  public $timestamps = false;

  public static function checkOutVisitor($request)
  {
    $outComeArray = array('error' => false, 'visitorAlreadySignedIn' => false);
    $todayDate = now()->format('Y-m-d');

    try {
      $outComeResult = DB::table('visitors')
        ->select('id', 'sign_in', 'visitor_type', 'reason', 'company', 'host_ids')
        ->where('fname', $request->first_name)
        ->where('lname', $request->last_name)
        ->whereNull('sign_out')
        ->whereDate('sign_in', '=', $todayDate)
        ->first();


      if (!is_null($outComeResult)) {
        $outComeArray['visitorAlreadySignedIn'] = true;
        //store the visitor signedin details in session for later sign out
        $request->session()->put('visitorAlreadySignInId', $outComeResult->id);
        $request->session()->put('visitor_type', $outComeResult->visitor_type);
        $request->session()->put('reason', $outComeResult->reason);
        $request->session()->put('company', $outComeResult->company);
        $request->session()->put('host_ids', $outComeResult->host_ids);
        $request->session()->put('fname', $request->first_name);
        $request->session()->put('lname', $request->last_name);
        $request->session()->put('date_now', $request->date_now);
        $request->session()->put('time_now', $request->time_now);
        $request->session()->put('visitorAlreadySignedIn', true);
      }

      return $outComeArray;
    } catch (\Exception $e) {
      //dd($e);
      $outComeArray['error'] = true;
      return $outComeArray;
    }
  }

  public static function findVisitorSignedIn($signOutOption, $badgeOrname)
  {
    $outComeArray = array('error' => false, 'visitorsSigninData' => []);

    try {
      $query = DB::table('visitors')

        ->select('id', 'fname', 'lname', 'visitor_type', 'reason', 'company', 'host_ids');

      if ($signOutOption == 'badge') {

        $query->where('badge', $badgeOrname);
      } else if ($signOutOption == 'name') {
        $query->where([
          ['fname', 'LIKE', "%{$badgeOrname}%"]
        ])->orWhere([
          ['lname', 'LIKE', "%{$badgeOrname}%"]
        ]);
      } else {
        $outComeArray['error'] = true;
        return $outComeArray;
      }

      $query->whereNull('sign_out');

      $outComeArray['visitorsSigninData'] = $query->get();

      return $outComeArray;
    } catch (\Exception $e) {
      $outComeArray['error'] = true;
      return $outComeArray;
    }
  }
}
