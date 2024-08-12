<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use App\Models\DepartmentAndCompany;
use App\Models\Reason;
use App\Models\Visitor;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\AppMail;


class VisitorController extends BaseController
{

  public function signInOptionIndex()
  {

    return Inertia::render('SignInOption');
  } //end signInOptionIndex

  public function extVisitorSignInIndex()
  {

    $dataToView = array(
      "companyResult" => array(),
      "reasonResult" => array(),
    );

    $companyResult = DepartmentAndCompany::fetchDepartmentsAndCompanies();
    $reasonResult = Reason::fetchReasons();

    if (!$companyResult['error']) {
      $dataToView['companyResult'] = $companyResult['companyResult'];
    }

    if (!$reasonResult['error']) {
      $dataToView['reasonResult'] = $reasonResult['reasonResult'];
    }

    return Inertia::render('ExtVisitorSignIn', $dataToView);
  } //end extVisitorSignInIndex



  public function coWorkerSignInIndex()
  {
    $dataToView = array(
      "reasonResult" => array(),
    );
    $reasonResult = Reason::fetchReasons();
    if (!$reasonResult['error']) {
      $dataToView['reasonResult'] = $reasonResult['reasonResult'];
    }

    return Inertia::render('CoWorkerSignIn', $dataToView);
  } // end coWorkerSignInIndex



  public function signOutIndex(Request $request)
  {
    $dataToView = array(
      'visitorAlreadySignedIn' => false,
    );
    if ($request->session()->has('visitorAlreadySignedIn')) {
      $dataToView['visitorAlreadySignedIn'] = $request->session()->pull('visitorAlreadySignedIn');
    }

    return Inertia::render('SignOut', $dataToView);
  } // end signOutIndex

  public function store(Request $request)
  {

    //Check if myhouse the hidden recaptcha input is filled in,
    //if that is the case redirect to home page.

    if ($request->myhouse != '') {
      return redirect()->route('home.index');
      die();
    }

    $redirectPage = 'iv.extVisitorSignin'; //Route name found in web.php route file
    if ($request->action == 'co-worker') {
      $redirectPage = 'iv.coWorkerSiginIn'; //Route name found in web.php route file
    } //end if action is co-worker

    $validator = Validator::make(
      $request->all(),
      [
        'first_name' => 'required|string',
        'last_name' => 'required|string',
        'phone' => 'required|string',
        'badge' => 'required|string',
        'reason' => 'required|string',
        'company' => 'nullable|string',
        'visiting' => 'nullable|string',
        // 'code1000' => 'accepted'
      ],
      // [
      //   'code1000.accepted' => "Tick this box to confirm you've recieved site induction and understand code 5K"
      // ]
    );

    if ($request->action == 'ext') {
      $validator->after(function ($validator) use ($request) {
        if (!$this->validatePhone($request->phone)) {
          $validator->errors()->add(
            'phone',
            'Phone is invalid'
          );
        }

        if ($request->reason == 'Work') {
          if (!$request->code1000) {
            $validator->errors()->add(
              'code1000',
              "Tick this box to confirm you've recieved site induction and understand code 5K"
            );
          }
        }
      });
    } //end if action is ext


    if ($validator->fails()) {
      return redirect()
        ->route($redirectPage)
        ->withErrors($validator)
        ->withInput();
      die();
    }

    //Check if use visitor has sign in and not sign out.
    $visitorResult = Visitor::checkOutVisitor($request);

    //Check for query error
    if ($visitorResult['error']) {

      $request->session()->put('respondsMsg', 'code100');
      return redirect()
        ->route($redirectPage)
        ->withInput();
      die();
    }

    // If no query error check if visitor was found signed in already
    if ($visitorResult['visitorAlreadySignedIn']) {
      $request->session()->put('respondsMsg', 'code000');
      return redirect()
        ->route($redirectPage);
      die();
    }


    //if no errors or the current visitor isn't alreadly signed in store data in db
    try {
      $msg_type = "visitor_contractor";
      $event_type = "in";
      $host_ids = "";
      //check if $host_detail_arr is Object 
      $is_host_detail_object = is_object($request->host_details_arr) ? true : false;
      //Count $request->host_details_arr 
      $host_details_arr_count  = count($request->host_details_arr);
      if ($host_details_arr_count > 0) {
        $i = 1;
        foreach ($request->host_details_arr as $host_detail) {
          if ($is_host_detail_object) {
            $host_ids = $i < $host_details_arr_count ? $host_detail->id . "," : $host_detail->id;
          } else {

            $host_ids .= $i < $host_details_arr_count ? $host_detail['id'] . "," : $host_detail['id'];
          }
          $i++;
        } //End foreach loop
      } //end if host_details_arr_count > 0
      //dd($host_ids);
      $visitor = new Visitor();
      $visitor->fname = $request->first_name;
      $visitor->lname = $request->last_name;
      $visitor->phone = $request->phone;
      $visitor->badge = $request->badge;
      $visitor->reason = $request->reason;
      $visitor->host_ids = $host_ids;
      if ($request->company != "") {
        $visitor->company = $request->company;
      }
      if ($request->visiting != "") {
        $visitor->visiting = $request->visiting;
      }
      if ($request->action == 'co-worker') {
        $visitor->visitor_type = 'Co-worker';
        $msg_type = "coworker";
      } //end if action is co-worker
      $visitor->save();

      //Send email to inform host

      if ($host_details_arr_count > 0) {

        $this->sendCoworkerVisitorContractorEmail(
          $msg_type,
          $event_type,
          $request->date_now,
          $request->time_now,
          $request->reason,
          $request->company,
          $request->first_name . " " . $request->last_name,
          $request->host_details_arr
        );
      } // end if host array details > 0


      $request->session()->put('respondsMsg', "code200");
      return redirect()
        ->route($redirectPage);
      die();
    } catch (\Exception $e) {
      //dd($e);
      $request->session()->put('respondsMsg', "code100");
      return redirect()
        ->route($redirectPage)
        ->withInput();
      die();
    }
  } // end store


  public function searchCoworker(Request $request)
  {

    if (!is_string($request->searchedword)) {
      return response()->json([
        'error' => $this->returnGenericSystemErrMsg()
      ]);
    } //End if error

    $userResult =  User::searchUser($request->searchedword, $request->user_type);


    if ($userResult["error"]) {

      return response()->json([
        'error' => $this->returnGenericSystemErrMsg()
      ]);
    } //End if error


    return response()->json([
      'error' => "",
      'coWorkerResData' => $userResult["searchResult"]
    ]);
  } // end searchCoworker


  public function fetchLeadersByDepartCompId(Request $request)
  {
    $leaders_result = User::fetchLeadersByDepartCompId($request->depart_comp_id);
    return response()->json([
      'error' => "",
      'leaders_result' => $leaders_result,
    ]);
  }

  public function handleVisitorSignout(Request $request)
  {

    // dd($request->signInVistor);

    if ($request->action == null || $request->action == "") {
      return redirect()
        ->route('/');
      die();
    } //end if action is null or empty

    $signedInId = 0;
    $signInVistorFname = "";
    $signInVistorLname = "";
    $visitor_type = "";
    $reason = "";
    $company = "";
    $date_now = "";
    $time_now = "";
    $host_ids = "";

    if ($request->action == "alreadysignedIn") {

      if ($request->session()->has('visitorAlreadySignInId')) {
        //Get session varibles
        $signedInId = $request->session()->pull('visitorAlreadySignInId', 0);
        $signInVistorFname = $request->session()->pull('fname', '');
        $signInVistorLname = $request->session()->pull('lname', '');
        $visitor_type = $request->session()->pull('visitor_type', '');
        $reason = $request->session()->pull('reason', '');
        $company = $request->session()->pull('company', '');
        $date_now = $request->session()->pull('date_now', '');
        $time_now = $request->session()->pull('time_now', '');
        $host_ids = $request->session()->pull('host_ids', '');
        //remove session varibles
        $request->session()->forget('fname');
        $request->session()->forget('lname');
        $request->session()->forget('visitorAlreadySignedIn');
        $request->session()->forget('visitor_type');
        $request->session()->forget('reason');
        $request->session()->forget('company');
        $request->session()->forget('date_now');
        $request->session()->forget('time_now');
        $request->session()->forget('host_ids');
      } else {

        $request->session()->put('respondsMsg', "code100");
        return redirect()
          ->route('iv.signout');
        die();
      } //end if session has visitorAlreadySignInId

    } else if ($request->action == "endSignedIn") {

      $signedInId = $request->signInVistor['id'];
      $signInVistorFname = $request->signInVistor['fname'];
      $signInVistorLname = $request->signInVistor['lname'];
      $visitor_type = $request->signInVistor['visitor_type'];
      $reason = $request->signInVistor['reason'];
      $company = $request->signInVistor['company'];
      $date_now = $request->date_now;
      $time_now = $request->time_now;
      $host_ids = $request->signInVistor['host_ids'];
    } else {

      $request->session()->put('respondsMsg', "code100");
      return redirect()
        ->route('iv.signout');
      die();
    } //end if action

    if ($signedInId > 0) {

      try {
        //if there is an id update database;
        Visitor::where('id', $signedInId)
          ->update(['sign_out' => $request->currentDataTime]);
        //Turn host ids into array
        $host_ids = explode(',', $host_ids);
        $host_leaders = array();
        $host = null;

        foreach ($host_ids as $host_id) {
          $host = User::select('fname', 'email')->where('id', $host_id)->first();
          if (!is_null($host)) {
            array_push($host_leaders, $host);
          }
        } // end foreach
        //dd($host_leaders[0]->fname);

        if (count($host_leaders) > 0) {
          $msg_type = "visitor_contractor";
          $event_type = "out";

          if ($visitor_type == 'Co-worker') {
            $msg_type = "coworker";
          } //end if action is co-worker

          //Send email to host/leaders
          $this->sendCoworkerVisitorContractorEmail(
            $msg_type,
            $event_type,
            $date_now,
            $time_now,
            $reason,
            $company == "Not a company" ? "" : $company,
            $signInVistorFname . " " . $signInVistorLname,
            $host_leaders
          );
        } // end count leaders


        $request->session()->put('respondsMsg', "code200");
        return redirect()
          ->route('iv.signout');
        die();
      } catch (\Exception $e) {
        //dd($e);
        $request->session()->put('respondsMsg', "code100");
        return redirect()
          ->route('iv.signout');
        die();
      } // end try catch

    } else {

      $request->session()->put('respondsMsg', "code100");
      return redirect()
        ->route('iv.signout');
      die();
    } //end if SignInId > 0

  } //end handleVisitorSignout

  public function findVisitorSignin(Request $request)
  {
    if (!is_string($request->searchedWordValue)) {
      return response()->json([
        'error' => $this->returnGenericSystemErrMsg()
      ]);
    } //End if error

    $visitorsSigninData =  Visitor::findVisitorSignedIn($request->signoutoption, $request->searchedWordValue);

    //dd($visitorsSigninData);

    if ($visitorsSigninData["error"]) {
      return response()->json([
        'error' => $this->returnGenericSystemErrMsg()
      ]);
    } //End if error

    return response()->json([
      'error' => "",
      'visitorsSigninData' => $visitorsSigninData['visitorsSigninData']
    ]);
  } //end findVisitorSignin

  public function signInOutOptionIndex()
  {
    return Inertia::render('SignInOut');
  } //end signInOutOptionIndex

  public function fetchRegularContractorVisitor(Request $request)
  {
    $out_come_data = User::fetchRegularVisitorOrContractor($request->badge_id);
    if ($out_come_data["error"]) {
      return response()->json([
        'error' => $this->returnGenericSystemErrMsg()
      ]);
    } //End if error

    return response()->json([
      'error' => "",
      'visitor_contractor_data' => $out_come_data['visitor_contractor_res'],
      'visitor_contractor_leader_data' => $out_come_data['visitor_contractor_leader_res']
    ]);
  } // end fetchRegularContractorVisitor

  private function sendCoworkerVisitorContractorEmail(
    $msg_type,
    $event_type,
    $date,
    $time,
    $reason,
    $company,
    $coworker_visitor_contractor_name,
    $host_detail_arr
  ) {
    //check if $host_detail_arr is Object 
    $is_host_detail_object = is_object($host_detail_arr) ? true : false;
    //dd($is_host_detail_object);
    foreach ($host_detail_arr as $host_detail) {

      $outComeArray = array("error" => "", "outcome" => "");
      $emailTemplate = "mail.coworker-contractor";
      $subject_str =  $event_type == 'in' ? 'has arrived' : 'has left';
      $subject = "Your visitor/contractor " . $subject_str;

      $host_name = "";
      $host_email = "";

      if ($is_host_detail_object) {
        $host_name = $host_detail->fname;
        $host_email = $host_detail->email;
      } else {
        $host_name = $host_detail['fname'];
        $host_email = $host_detail['email'];
      }
      if ($msg_type == "coworker") {
        $subject = "Your coworker " . $subject_str;
      } // end if msg_type
      $dataArray = array(
        'msg_type' => $msg_type,
        'event_type' => $event_type,
        'to_name' => $host_name,
        'date' => $date,
        'time' => $time,
        'reason' => $reason,
        'company' => $company,
        'coworker_vist_contractor_name' => $coworker_visitor_contractor_name,
      );
      //convert data array into data object for blade view
      $dataObj = (object)$dataArray;
      try {
        Mail::to($host_email)->send(new AppMail($subject, $emailTemplate, $dataObj));
        $outComeArray["outcome"] .= " mail sent";
      } catch (\Exception $e) {
        //dd($e);
        $outComeArray["error"] = $outComeArray["error"] .= " error";
      }
    } //end foreach loop
    return $outComeArray;
  } // End fetchRegularContractorVisitor

}//End main class
