<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\DepartmentAndCompany;
use Inertia\Inertia;
use App\Models\TempLog;



class TempInOutController extends BaseController
{


    public function index()
    {

        $dataToView = array(
            "companyResult" => array(),

        );
        $companyResult = DepartmentAndCompany::fetchDepartmentsAndCompanies();
        if (!$companyResult['error']) {
            $dataToView['companyResult'] = $companyResult['companyResult'];
        }
        return Inertia::render('TempInOutOption', $dataToView);
    }

    public function tempBackInIndex(Request $request)
    {

        $signed_out_id  = $request->signed_out_id != null ? $request->signed_out_id : 0;

        $dataToView = array(
            'signed_out_id' => (int)$signed_out_id,
        );

        return Inertia::render('OffSiteBackIn', $dataToView);
    }


    public function handleTempOut(Request $request)
    {

        //Check if myhouse the hidden recaptcha input is filled in,
        //if that is the case redirect to home page.
        if ($request->myhouse != '') {
            return redirect()->route('home.index');
            die();
        }


        //Check if sign out exist
        $out_come = TempLog::checkIfUserAlreadySignedOut($request);
        //Check for query error
        if ($out_come['error']) {
            return response()->json([
                'errors' => [],
                'responds_code' => 'code1'
            ], 201);
            die();
        }

        // If no query error check if signed out exist
        if ($out_come['signed_out_id'] > 0) {

            return response()->json([
                'errors' => [],
                'signed_out_id' => $out_come['signed_out_id'],
                'responds_code' => 'code2'
            ], 201);
            die();
        }

        //Check action
        if ($request->yes_no_action == "Yes") {
            $date_save  = $this->saveLogData($request);
            return response()->json([
                'errors' => [],
                'signed_out_id' => 0,
                'responds_code' => $date_save ? "code0" : 'code1'
            ], 201);
        } else if ($request->yes_no_action == "No") {
            $validator = Validator::make(
                $request->all(),
                [
                    'fname' => 'required|string',
                    'lname' => 'required|string',
                    'depart_comp' => 'required|string',
                ]
            );
            if ($validator->fails()) {
                return response()->json([
                    'errors' => $validator->errors(),
                    'signed_out_id' => 0,
                    'responds_code' => ''
                ], 201);

                die();
            }
            $date_save  = $this->saveLogData($request);

            return response()->json([
                'errors' => [],
                'signed_out_id' => 0,
                'responds_code' => $date_save ? "code0" : 'code1'
            ], 201);
        } else {

            return redirect()->route('home.index');
            die();
        } // end check action

    }



    private function saveLogData($request)
    {
        try {
            $temp_log = new TempLog();
            $temp_log->fname = $request->fname;
            $temp_log->lname = $request->lname;
            $temp_log->depart_comp = $request->depart_comp;

            $temp_log->save();
            return true;
        } catch (\Exception $e) {
            //dd($e);
            return false;
        }
    } // end  saveLogData


    public function handleOffsiteSignIn(Request $request)
    {
        if (!$request->has('temp_log_id')) {
            return redirect()
                ->route('/');
            die();
        }


        if ($request->temp_log_id > 0) {

            try {
                //if there is an id update database;
                TempLog::where('id', $request->temp_log_id)
                    ->update(['time_in' => $request->current_date_time]);

                return response()->json([
                    'responds_code' => 'code0'
                ], 201);
            } catch (\Exception $e) {
                //dd($e);
                return response()->json([
                    'responds_code' => 'code1'
                ], 201);
                die();
            } // end try catch

        } else {

            return response()->json([
                'responds_code' => 'code1'
            ], 201);
        } //end if SignInId > 0

    } //end handleOffsetSignIn

    public function findOffsiteSignOut(Request $request)
    {
        if (!is_string($request->searched_word_value)) {
            return response()->json([
                'error' => $this->returnGenericSystemErrMsg()
            ]);
        } //End if error

        $off_site_signed_out_data =  TempLog::offsiteSignOut($request->searched_word_value);

        //dd($off_site_signed_out_data);

        if ($off_site_signed_out_data["error"]) {
            return response()->json([
                'error' => $this->returnGenericSystemErrMsg()
            ]);
        } //End if error

        return response()->json([
            'error' => "",
            'temp_sign_out_res' => $off_site_signed_out_data['temp_sign_out_res']
        ]);
    } // end findOffsiteSignOut
}
