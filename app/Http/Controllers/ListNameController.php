<?php

namespace App\Http\Controllers;

use App\Models\ListName;
use Illuminate\Http\Request;


class ListNameController extends BaseController
{


    public function addListName(Request $request) {
        if ($request->list_name == "") {
            return response()->json([
              'error' => "*Please enter list name before saving thanks",
            ]);
            die();
        }
      
          //Save data in DB
          try {

            $list_name = new ListName();
           
            $list_name->name = $this->cleanData($request->list_name); //find this in baseController
            $list_name->save();
            return response()->json([
              "error" => '',
            ]);
          } catch (\Exception $e) {
                dd($e);
            return response()->json([
              'error' => $this->returnGenericSystemErrMsg(),
            ], 422);
          }
    } //End addListName

    public function updateListName(Request $request)
    {
  
      //Validate request variables
      if (!is_numeric($request->data_id)) {
        return response()->json([
          'error' => $this->returnGenericSystemErrMsg(),
        ], 201);
      }
  
  
      if ($request->data_new_value == "") {
        return response()->json([
          'error' =>  "*Please enter a list name"
        ]);
      }
  
      if ($request->data_new_value == $request->data_old_value) {
        return response()->json([
          'error' =>  "*Please make a change before saving thank you."
        ]);
      }
  
      try {
  
        $array_data = array(
          'name' => $this->cleanData($request->data_new_value), // help/trai
        );
        //Update list name
        ListName::where('id', $request->data_id)->update($array_data);
    return response()->json([
          'error' => '',
        ], 201);
      } catch (\Exception $e) {
        // dd($e);
        return response()->json([
          'error' => $this->returnGenericSystemErrMsg(),
        ], 401);
      } // end try catch
  
    } // end update


public function deleteListName(Request $request)
  {

    //Validate request variables
    if (!is_numeric($request->data_id)) {
      return response()->json([
        'error' => $this->returnGenericSystemErrMsg(),
      ], 201);
    }

    try {
      //Delete storage by storage id
      ListName::where('id', $request->data_id)->delete();
      return response()->json([
        'error' => '',
      ], 201);
    } catch (\Exception $e) {
      // dd($e);
      return response()->json([
        'error' => $this->returnGenericSystemErrMsg(),
      ], 401);
    } // end try catch

  } // end deleteListName
    
}// end ListNameController
