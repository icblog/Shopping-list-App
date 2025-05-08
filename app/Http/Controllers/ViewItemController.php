<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Item;
use App\Models\Storage;
use Illuminate\Http\Request;


class ViewItemController extends BaseController
{


  public function index(Request $request)
  {

    //Fetch all storage  
    $storage_data = array();
    try {
      $storage_data = Storage::select("id", "name")->get();
    } catch (\Exception $e) {
      // dd($e);
      return $storage_data;
    }

    //Fetch list names
    $result_per_page = $this->returnResultPerPageNumber(); //Find this in base controller
    $paginate = true;
    $selected_sort_option = $request->has('selected_sort_option') ? $request->selected_sort_option : "";
    $item_name = $request->has('item_name') ? $request->item_name : "";

    $item_name_res = Item::fetchItems(
      $selected_sort_option,
      $item_name,
      $paginate,
      $result_per_page
    );



    if ($item_name_res['error']) {
      $item_name_res['item_data']['data']['error'] = $this->returnGenericSystemErrMsg();
    }


    return Inertia::render('ViewItem', [
      'item_res' => $item_name_res['item_data'],
      'storage_data' => $storage_data

    ]);
  } // end index

  public function update(Request $request)
  {
    //Validate request variables
    if (!is_numeric($request->data_id)) {
      return response()->json([
        'error' => $this->returnGenericSystemErrMsg(),
      ], 201);
    }

    if ($request->data_new_name_value == "") {
      return response()->json([
        'error' => "Please enter item name",
      ], 201);
    }


    if (

      $request->data_new_name_value == $request->data_old_name_value
      && $request->data_new_img_url == $request->data_old_img_url
      && $request->data_new_storage_id == $request->data_old_storage_id
    ) {
      return response()->json([
        'error' => "Please make changes before saving",
      ], 201);
    }

    $dataToUpdate = array(
      'name' => $this->cleanData($request->data_new_name_value),
    );
    if ($request->data_new_img_url != null || $request->data_new_img_url != "") {
      $dataToUpdate["img_url"] = $this->cleanData($request->data_new_img_url);
    } else {
      $dataToUpdate["img_url"] = NULL;
    }

    if ($request->data_new_storage_id != "") {
      $dataToUpdate["storage_id"] = $request->data_new_storage_id;
    }


    try {
      Item::where('id', $request->data_id)->update($dataToUpdate);
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





  public function delete(Request $request)
  {
    //Validate request variables
    if (!is_numeric($request->data_id)) {
      return response()->json([
        'error' => $this->returnGenericSystemErrMsg(),
      ], 201);
    }
    try {

      Item::where('id', $request->data_id)->delete();
      return response()->json([
        'error' => '',
      ], 201);
    } catch (\Exception $e) {
      //dd($e);
      return response()->json([
        'error' => $this->returnGenericSystemErrMsg(),
      ], 401);
    } // end try catch

  } //end delete
}// end class
