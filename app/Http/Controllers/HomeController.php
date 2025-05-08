<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\ListName;
use Illuminate\Http\Request;


class HomeController extends BaseController{
 

   public function index(Request $request){
   
      //Fetch list names
    $result_per_page = $this->returnResultPerPageNumber(); //Find this in base controller
    $paginate = true;
    $selected_sort_option = $request->has('selected_sort_option') ? $request->selected_sort_option : "";
    $list_name = $request->has('list_name') ? $request->list_name : "";
   
    $list_name_res = ListName::fetchListNames(
      $selected_sort_option,
      $list_name,
      $paginate,
      $result_per_page
    );
   
   

    if ($list_name_res['error']) {
      $list_name_res['list_names_data']['data']['error'] = $this->returnGenericSystemErrMsg();
     
     }
     
   
    return Inertia::render('Home',[
      'list_name_res' => $list_name_res['list_names_data'],
      
     ]);
       
  }

    
}
