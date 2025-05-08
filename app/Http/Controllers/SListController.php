<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\SList;
use App\Models\Item;
use Illuminate\Http\Request;



class SListController extends BaseController
{


  public function index(Request $request)
  {

    //Fetch list
    $result_per_page = $this->returnResultPerPageNumber(); //Find this in base controller
    $paginate = true;
    $item_name = $request->has('item_name') ? $this->cleanData($request->item_name) : "";

    $list_res = SList::fetchList(
      $this->cleanData($request->id),
      $item_name,
      $paginate,
      $result_per_page
    );
    if ($list_res['error']) {
      $list_res['list_data']['data']['error'] = $this->returnGenericSystemErrMsg();
    }
    //dd($list_res['list_data']);

    return Inertia::render('SList', [
      'list_res' => [
        'id' => $request->id,
        'name' => $request->name,
        'list' => $list_res['list_data']
      ],

    ]);
  }

  public function searchItem(Request $request)
  {
    if ($request->searched_item == "") {
      return response()->json([
        'error' => "Please enter search word",
      ], 201);
    }

    try {
      $item_data = Item::select("id", "name", "img_url")->where([
        ['name', 'LIKE', "%{$this->cleanData($request->searched_item)}%"]
      ])->get();
      return response()->json([
        'itemData' => $item_data,
        'error' => '',
      ], 201);
    } catch (\Exception $e) {
      // dd($e);
      return response()->json([
        'error' => $this->returnGenericSystemErrMsg(),
      ], 422);
    }
  } // end searchItem

  public function addListItem(Request $request)
  {
    // check if item has already been added to the list
    $result = SList::select("id")->where("item_id", $request->item_id)->where("list_name_id", $request->list_id)->first();
    //if record is found, send error msg to user
    if (!is_null($result)) {
      //result code goes here
      return response()->json([
        'error' => $request->item_name . " already exist in " . $request->list_name,
      ], 201);
    } //

    try {
      $list = new SList();
      $list->list_name_id = (int)$request->list_id;
      $list->item_id = $request->item_id;
      $list->qty = $request->item_qty;
      $list->save();
      return response()->json([
        'error' => '',
      ], 201);
    } catch (\Exception $e) {
      // dd($e);
      return response()->json([
        'error' => $this->returnGenericSystemErrMsg(),
      ], 422);
    }
  } // end addListItem



  public function deleteListItem(Request $request)
  {
    //Validate request variables
    if (!is_numeric($request->item_id)) {
      return response()->json([
        'error' => $this->returnGenericSystemErrMsg(),
      ], 201);
    }
    try {

      SList::where('id', $request->item_id)->where("list_name_id", (int)$request->list_name_id)->delete();
      return response()->json([
        'error' => '',
      ], 201);
    } catch (\Exception $e) {
      // dd($e);
      return response()->json([
        'error' => $this->returnGenericSystemErrMsg(),
      ], 401);
    } // end try catch

  } //end delete

  public function updateListItem(Request $request)
  {
    //Validate request variables
    if (!is_numeric($request->item_id)) {
      return response()->json([
        'error' => $this->returnGenericSystemErrMsg(),
      ], 201);
    }
    try {

      $data_to_update = array(
        "pending_trolley" => ($request->action == "move_to_trolley") ? 1 : 0,
      );

      SList::where('id', $request->item_id)->where("list_name_id", (int)$request->list_name_id)->update($data_to_update);
      return response()->json([
        'error' => '',
      ], 201);
    } catch (\Exception $e) {
      // dd($e);
      return response()->json([
        'error' => $this->returnGenericSystemErrMsg(),
      ], 401);
    } // end try catch

  } //end updateListItem


  public function updateItemQty(Request $request)
  {
    //Validate request variables
    if (!is_numeric($request->data_id)) {
      return response()->json([
        'error' => $this->returnGenericSystemErrMsg(),
      ], 201);
    }

    if ($request->data_qty == "") {
      return response()->json([
        'error' => "Please enter item qty",
      ], 201);
    }

    if ($request->data_qty == 0) {
      return response()->json([
        'error' => "Item qty can not be zero",
      ], 201);
    }




    $dataToUpdate = array(
      'qty' => $this->cleanData($request->data_qty),
    );

    try {
      SList::where('id', $request->data_id)->update($dataToUpdate);
      return response()->json([
        'error' => '',
      ], 201);
    } catch (\Exception $e) {
      // dd($e);
      return response()->json([
        'error' => $this->returnGenericSystemErrMsg(),
      ], 401);
    } // end try catch

  } // end update item qty


  public function resetListItems(Request $request)
  {
    //Validate request variables
    if ($request->list_name_id == "") {
      return response()->json([
        'error' => $this->returnGenericSystemErrMsg(),
      ], 201);
    }
    try {

      $data_to_update = array(
        "pending_trolley" => 0,
      );

      SList::where("list_name_id", (int)$request->list_name_id)->update($data_to_update);
      return response()->json([
        'error' => '',
      ], 201);
    } catch (\Exception $e) {
      // dd($e);
      return response()->json([
        'error' => $this->returnGenericSystemErrMsg(),
      ], 401);
    } // end try catch

  } //end resetListItems


}
