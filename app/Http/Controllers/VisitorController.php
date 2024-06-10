<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use App\Models\DepartmentAndCompany;
use App\Models\Reason;
use App\Models\Visitor;
use App\Models\User;


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
        'code1000' => 'accepted'
      ],
      [
        'code1000.accepted' => "Tick this box to confirm you've recieved site induction and understand code 1000"
      ]
    );

    if ($request->action == 'ext') {
      $validator->after(function ($validator) use ($request) {
        if (!$this->validatePhone($request->phone)) {
          $validator->errors()->add(
            'phone',
            'Phone is invalid'
          );
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

      $visitor = new Visitor();
      $visitor->fname = $request->first_name;
      $visitor->lname = $request->last_name;
      $visitor->phone = $request->phone;
      $visitor->badge = $request->badge;
      $visitor->reason = $request->reason;
      if ($request->company != "") {
        $visitor->company = $request->company;
      }
      if ($request->visiting != "") {
        $visitor->visiting = $request->visiting;
      }
      if ($request->action == 'co-worker') {
        $visitor->visitor_type = 'Co-worker';
      } //end if action is co-worker
      $visitor->save();
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

    $userResult =  User::searchUser($request->searchedword);


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


  public function handleVisitorSignout(Request $request)
  {
    if ($request->action == null || $request->action == "") {
      return redirect()
        ->route('/');
      die();
    } //end if action is null or empty

    $signedInId = 0;

    if ($request->action == "alreadysignedIn") {
      if ($request->session()->has('visitorAlreadySignInId')) {
        $signedInId = $request->session()->pull('visitorAlreadySignInId', 0);
        $request->session()->forget('visitorAlreadySignInId');
        $request->session()->forget('visitorAlreadySignedIn');
      } else {

        $request->session()->put('respondsMsg', "code100");
        return redirect()
          ->route('iv.signout');
        die();
      } //end if session has visitorAlreadySignInId

    } else if ($request->action == "endSignedIn") {

      $signedInId = $request->signInVistorId;
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
  } // end findVisitorSignin


}//End main class
