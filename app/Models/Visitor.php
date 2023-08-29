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

    public static function checkOutVisitor($request){
        $outComeArray = array('error'=>false, 'visitorAlreadySignedIn'=> false);
         try {
         $outComeResult = DB::table('visitors')
                      ->select('id','sign_in')
                      ->where('fname',$request->first_name)
                      ->where('lname',$request->last_name)
                      ->whereNull('sign_out')
                      ->first();

              if(!is_null($outComeResult)){
                
                $todayDate = date("Y-m-d H:i:s");
                $todayDate = date('Y-m-d',strtotime($todayDate));

               if($todayDate == date('Y-m-d',strtotime($outComeResult->sign_in))){
                    $outComeArray['visitorAlreadySignedIn'] = true;
                    //store the visitor sign in id in session for later sign out
                    $request->session()->put('visitorAlreadySignInId', $outComeResult->id);
                    $request->session()->put('visitorAlreadySignedIn', true);
                }

              }
      
          return $outComeArray;
      
        } catch (\Exception $e) {
          //dd($e);
          $outComeArray['error'] = true;
          return $outComeArray;
        }
       
    }

    public static function findVisitorSignedIn($signOutOption,$badgeOrLname){
      $outComeArray = array('error'=>false,'visitorsSigninData'=>[]);
            
         try {
              $query = DB::table('visitors')
             
               ->select('id','fname','lname');
             
              if($signOutOption == 'badge'){
               
                $query->where('badge',$badgeOrLname);
              
              }else if($signOutOption == 'lastname'){
                $query->where([
                  ['lname', 'LIKE', "%{$badgeOrLname}%"]
                ]);
              }else{
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






