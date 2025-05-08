<?php

namespace App\Http\Controllers;

use App\Models\Storage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StorageController extends BaseController
{
    public function index(Request $request)
    {

        //Fetch list names
        $result_per_page = $this->returnResultPerPageNumber(); //Find this in base controller
        $paginate = true;
        $selected_sort_option = $request->has('selected_sort_option') ? $request->selected_sort_option : "";
        $storage_name = $request->has('storage') ? $request->storage : "";

        $storage_res = Storage::fetchStorages(
            $selected_sort_option,
            $storage_name,
            $paginate,
            $result_per_page
        );



        if ($storage_res['error']) {
            $storage_res['storage_data']['data']['error'] = $this->returnGenericSystemErrMsg();
        }


        return Inertia::render('Storage', [
            'storage_res' => $storage_res['storage_data'],

        ]);
    } // end index

    public function addStorage(Request $request)
    {
        if ($request->list_name == "") {
            return response()->json([
                'error' => "*Please enter list name before saving thanks",
            ]);
            die();
        }

        //Save data in DB
        try {

            $list_name = new Storage();

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
    } //End addStorage

    public function updateStorage(Request $request)
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
            Storage::where('id', $request->data_id)->update($array_data);
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


    public function deleteStorage(Request $request)
    {

        //Validate request variables
        if (!is_numeric($request->data_id)) {
            return response()->json([
                'error' => $this->returnGenericSystemErrMsg(),
            ], 201);
        }

        try {
            //Delete storage by storage id
            Storage::where('id', $request->data_id)->delete();
            return response()->json([
                'error' => '',
            ], 201);
        } catch (\Exception $e) {
            // dd($e);
            return response()->json([
                'error' => $this->returnGenericSystemErrMsg(),
            ], 401);
        } // end try catch

    } // end deleteStorage

}// end StorageController
