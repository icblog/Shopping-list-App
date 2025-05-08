<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class ListName extends Model{
    use HasFactory;


    public static function fetchListNames(
        $order_by = '',
        $list_name = "",
        $paginate=false,
        $result_per_page=6
        ){
           
      switch ($order_by) {
         case 'A-Z':
            $sort_how = "ASC";
            $order_by =  "name";
             break;
         case 'Z-A':
            $sort_how = "DESC";
            $order_by =  "name";
             break;
         case 'Date ascending':
             $sort_how = "ASC";
             $order_by =  "created_at";
             break;
  
         case 'Date descending':
            $sort_how = "DESC";
            $order_by =  "created_at";
            break;
       default:
         $sort_how = "DESC";
         $order_by =  "id";
     }
   
      $out_come_array = array('error'=>false,'list_names_data'=>[
        'data'=> ['error' => ""],
         'total'=> 0,
        ]);
      
         try {
           
            $query = DB::table('list_names')->select('id','name');
              if($list_name  !=''){
                $query->where([
                     ['name', 'LIKE', "%{$list_name}%"]
                  ]);
               }
            $query->orderBy($order_by,$sort_how);
           if($paginate){
                $res =  $query->paginate($result_per_page);
                // check if there is a result data
                if($res->total() > 0){
                    $out_come_array['list_names_data'] = $res;
                    $list_name_res['list_names_data']['error'] = "";
                 }
                }else{
                    $res =  $query->limit($result_per_page)->get();
                    if(count($res) > 0){
                        $out_come_array['list_names_data'] = $res;
                        $list_name_res['list_names_data']['error'] = "";
                    }
               }
               // dd($out_come_array);
              return $out_come_array;
  
            } catch (\Exception $e) {
              //dd($e);
               $out_come_array['error'] = true;
               return $out_come_array;
  
            }
  
     }//End fetchListNames

    
}//End class




