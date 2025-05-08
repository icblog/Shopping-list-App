<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\Storage;


class AddItemController extends BaseController
{

    public function index()
    {
        $storage_data = array();
        try {
            $storage_data = Storage::select("id", "name")->get();
        } catch (\Exception $e) {
            // dd($e);
            return $storage_data;
        }

        return Inertia::render('AddItem', ['storage_data' => $storage_data]);
    } //end index

    public function save(Request $request)
    {
        // dd($request->item_n_url);
        $error_msg = "";
        //Check if name value is empty
        foreach ($request->item_n_url as $item_n_url) {
            if ($item_n_url['name'] == "" || $item_n_url['storage'] == "") {
                $error_msg = "Please ensure everthing is filled in correctly, image url is optional";
            }
        } //end foreach

        if ($error_msg != "") {
            return response()->json([
                'error' => $error_msg
            ], 201);
        }
        //Check if name value already exist
        //fetch all item names
        $name_res = Item::select("name")->get();
        if (!empty($name_res)) {

            foreach ($request->item_n_url as $item_n_url) {
                $post_item_name = $item_n_url['name'];
                foreach ($name_res as $res) {
                    if (strtolower($post_item_name) == strtolower($res->name)) {
                        $error_msg = $post_item_name . " already exist, try a different item name";
                    } // end if
                } // end 2st foreach
            } // end 1st foreach

        } // end if

        if ($error_msg != "") {
            return response()->json([
                'error' => $error_msg
            ], 201);
        }
        // No errors try and save datain db

        try {

            foreach ($request->item_n_url as $item_n_url) {
                $item = new Item();
                $item->name = $item_n_url['name'];
                $item->storage_id = $item_n_url['storage'];
                if ($item_n_url['url'] != "") {
                    $item->img_url = $item_n_url['url'];
                }
                $item->save();
            } //end foreach
            return response()->json([
                'error' =>  $error_msg
            ], 201);
        } catch (\Exception $e) {
            // dd($e);
            return response()->json([
                'error' => $this->returnGenericSystemErrMsg(),
            ], 422);
        } // end try catch
    } //end save


}// end AddItemController
