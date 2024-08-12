<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class User extends Authenticatable
{


  public static function updateLastLoginDate()
  {
    if (Auth::check()) {
      DB::table('users')->where('id', Auth::User()->id)->update(['last_login_date' => \Carbon\Carbon::now()->toDateTimeString()]);
    }
  }


  public static function checkIfUserExist($fieldTocheck, $fieldValue)
  {
    $outComeArray = array("error" => false, "user" => null);

    try {

      $user = DB::table('users')->where($fieldTocheck, $fieldValue)->first();

      $outComeArray["user"] = $user;

      //  if(!is_null($user)) {
      //     $outComeArray["user"] = $user;
      //  }

      return $outComeArray;
    } catch (\Exception $e) {
      $outComeArray["error"] = true;
      return $outComeArray;
    }
  } //End check if user exist

  public static function searchUser($searchedWord, $user_type = "all")
  {
    $outComeArray = array("error" => false, "searchResult" => []);
    $res = [];
    try {

      $res = DB::table('users')

        ->select('users.id', 'users.fname', 'users.lname', 'users.phone', 'users.email', 'department_and_companies.name AS department_name', 'department_and_companies.is_depart_or_comp AS is_depart_or_comp', 'department_and_companies.id AS depart_or_comp_id')
        ->join('department_and_companies', 'department_and_companies.id', '=', 'users.department_company')
        ->where([
          ['users.fname', 'LIKE', "%{$searchedWord}%"]
        ])
        ->orWhere([
          ['users.lname', 'LIKE', "%{$searchedWord}%"]
        ])
        ->limit(5)
        ->get();
      //dd($res);

      $outComeArray['searchResult'] =  $res->filter(function ($item) use ($user_type) {

        if ($user_type == "coworker") {
          return $item->is_depart_or_comp == 0;
        } else if ($user_type == "visitor_contractor") {
          return $item->is_depart_or_comp == 1;
        } else if ($user_type == "all") {
          return $item;
        }
      })->values();
      //visitor_contractor
      //coworker
      //all

      return $outComeArray;
    } catch (\Exception $e) {
      // dd($e);
      $outComeArray["error"] = true;
      return $outComeArray;
    }
  } //End searchUser

  public static function fetchRegularVisitorOrContractor($badge_id)
  {
    $visitor_contractor_res = null;
    $visitor_contractor_leader_res = [];

    try {

      $visitor_contractor_res = DB::table('users')

        ->select('users.fname', 'users.lname', 'users.email', 'users.phone', 'department_and_companies.name AS depart_or_comp_name', 'department_and_companies.id AS depart_or_comp_id')
        ->join('department_and_companies', 'department_and_companies.id', '=', 'users.department_company')
        ->where('users.badge_id', $badge_id)->first();

      if (!is_null($visitor_contractor_res)) {
        $visitor_contractor_leader_res = self::fetchLeadersByDepartCompId($visitor_contractor_res->depart_or_comp_id);
      }
      return array(
        'error' => false,
        'visitor_contractor_res' => $visitor_contractor_res,
        'visitor_contractor_leader_res' => $visitor_contractor_leader_res
      );
    } catch (\Exception $e) {
      ///dd($e);
      return array(
        'error' => true,
        'visitor_contractor_res' => $visitor_contractor_res,
        'visitor_contractor_leader_res' => $visitor_contractor_leader_res

      );
    } // end try catch

  } //End fetchRegularVisitorOrContractor

  public static function fetchLeadersByDepartCompId($depart_comp_id)
  {

    try {
      $visitor_contractor_leader_res = DB::table('users')
        ->select('users.id', 'users.fname', 'users.lname', 'users.email')
        ->where('users.department_company', $depart_comp_id)
        ->where('users.is_leader', 1)
        ->get();
      return $visitor_contractor_leader_res;
    } catch (\Throwable $th) {
      return [];
      //throw $th;
    }
  }
}
