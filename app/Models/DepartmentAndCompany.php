<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class DepartmentAndCompany extends Model
{
    use HasFactory;
        /**
     * The table associated with the model.
     *
     * @var string
     */
    //protected $table = 'departments_and_companies';



public static function fetchDepartmentsAndCompanies(){
   
        $out_come_array = array("error"=>false, "companyResult"=> []);
      
      try { 
        
           $query = DB::table('department_and_companies')->select('name','is_quick')
           ->where('is_depart_or_comp', '=', 1)
           ->orderBy('department_and_companies.name','ASC');

           $out_come_array["companyResult"] = $query->get();
           return $out_come_array;
      
        } catch (\Exception $e) {
         // dd($e);
          $out_come_array["error"] = true;
          return $out_come_array;
        }
       
}//End fetchDepartmentsAndCompanies


}






