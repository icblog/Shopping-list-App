                              @include('mail.components.mail-header')
                              <!-- If event type is In -->
                              @if ($dataObj->event_type == 'in')

                              <p style="text-align:left;font-family:Helvetica,Arial,sans-serif;font-size:15px;margin-bottom:0;margin-top:3px;color:#5F5F5F;line-height:135%;">Below are datails of your
                                  @if ($dataObj->msg_type == 'coworker')
                                  <span>
                                      coworker
                                  </span>
                                  @endif
                                  @if ($dataObj->msg_type == 'visitor_contractor')
                                  <span>
                                      visitor/contractor
                                  </span>
                                  @endif
                                  that has <span style="font-weight:bold; color:darkgreen;">arrived</span> on site.
                              </p>

                              </td>
                              </tr>
                              <tr>
                                  <td valign="top" class="textContent">
                                      <p style="text-align:left;font-family:Helvetica,Arial,sans-serif;font-size:15px;margin-bottom:0;margin-top:20px;color:#5F5F5F;line-height:100%; font-weight:bold;">Name: <span style="font-weight:normal;">{{$dataObj->coworker_vist_contractor_name}} </span></p>
                                      <p style="text-align:left;font-family:Helvetica,Arial,sans-serif;font-size:15px;margin-bottom:0;margin-top:10px;color:#5F5F5F;line-height:100%; font-weight:bold;">Date: <span style="font-weight:normal;">{{$dataObj->date}} </span></p>
                                      <p style="text-align:left;font-family:Helvetica,Arial,sans-serif;font-size:15px;margin-bottom:0;margin-top:10px;color:#5F5F5F;line-height:100%; font-weight:bold;">Time in: <span style="font-weight:normal;">{{$dataObj->time}} </span></p>
                                      <p style="text-align:left;font-family:Helvetica,Arial,sans-serif;font-size:15px;margin-bottom:0;margin-top:10px;color:#5F5F5F;line-height:100%; font-weight:bold;">Reason: <span style="font-weight:normal;">{{$dataObj->reason}} </span></p>
                                      @if ($dataObj->msg_type == 'visitor_contractor')
                                      <p style="text-align:left;font-family:Helvetica,Arial,sans-serif;font-size:15px;margin-bottom:0;margin-top:10px;color:#5F5F5F;line-height:100%; font-weight:bold;">Company: <span style="font-weight:normal;">{{$dataObj->company}} </span></p>
                                      @endif
                                  </td>

                              </tr>
                              @endif

                              <!-- If event type is Out -->
                              @if ($dataObj->event_type == 'out')

                              <p style="text-align:left;font-family:Helvetica,Arial,sans-serif;font-size:15px;margin-bottom:0;margin-top:3px;color:#5F5F5F;line-height:135%;">Below are datails of your
                                  @if ($dataObj->msg_type == 'coworker')
                                  <span>
                                      coworker
                                  </span>
                                  @endif
                                  @if ($dataObj->msg_type == 'visitor_contractor')
                                  <span>
                                      visitor/contractor
                                  </span>
                                  @endif
                                  that has <span style="font-weight:bold; color:darkred;">left</span> site.
                              </p>

                              </td>
                              </tr>
                              <tr>
                                  <td valign="top" class="textContent">
                                      <p style="text-align:left;font-family:Helvetica,Arial,sans-serif;font-size:15px;margin-bottom:0;margin-top:20px;color:#5F5F5F;line-height:100%; font-weight:bold;">Name: <span style="font-weight:normal;">{{$dataObj->coworker_vist_contractor_name}} </span></p>
                                      <p style="text-align:left;font-family:Helvetica,Arial,sans-serif;font-size:15px;margin-bottom:0;margin-top:10px;color:#5F5F5F;line-height:100%; font-weight:bold;">Date: <span style="font-weight:normal;">{{$dataObj->date}} </span></p>
                                      <p style="text-align:left;font-family:Helvetica,Arial,sans-serif;font-size:15px;margin-bottom:0;margin-top:10px;color:#5F5F5F;line-height:100%; font-weight:bold;">Time out: <span style="font-weight:normal;">{{$dataObj->time}} </span></p>
                                      <p style="text-align:left;font-family:Helvetica,Arial,sans-serif;font-size:15px;margin-bottom:0;margin-top:10px;color:#5F5F5F;line-height:100%; font-weight:bold;">Reason: <span style="font-weight:normal;">{{$dataObj->reason}} </span></p>
                                      @if ($dataObj->msg_type == 'visitor_contractor')
                                      <p style="text-align:left;font-family:Helvetica,Arial,sans-serif;font-size:15px;margin-bottom:0;margin-top:10px;color:#5F5F5F;line-height:100%; font-weight:bold;">Company: <span style="font-weight:normal;">{{$dataObj->company}} </span></p>
                                      @endif
                                  </td>

                              </tr>
                              @endif



                              @include('mail.components.mail-footer')