<?php

namespace App\Http\Controllers;

class EmailTestController extends BaseController
{


    public function index()
    {

        $data = array(
            //'msg_type' => 'coworker',
            'msg_type' => 'visitor_contractor',
            'event_type' => 'in',
            'to_name' => 'James',
            'date' => 'Thu Oct 05 2024',
            'time' => '09:34',
            'reason' => 'Work',
            'company' => 'Deep clean ltd',
            'coworker_vist_contractor_name' => 'Apple Banana',
        );
        $dataObj = (object)$data;

        return view('mail.coworker-contractor')->with(['dataObj' => $dataObj]);
    }
}
