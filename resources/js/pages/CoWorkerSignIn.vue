<template>
  <Layout pageTitle="co-worker-signin" backUrl="/sign-in-option">
    <div class="container">
      <div class="row">
        <div class="col-md-10 mx-auto">
          <div class="form-wrapper">
            <section v-if="processing && respondsMsg == ''"><LoadingIndicator /></section>
            <section v-if="!processing && respondsMsg == 'code000'">
              <HandleMsg
                :showHeading="false"
                infotype="error"
                customClass="form-responds-msg"
                msg="You have already signed in, please sign out first before signing back in thank you!"
              />
              <div class="text-center">
                <AppLink className="primary-btn" linkUrl="/signout">Sign out</AppLink>
              </div>
            </section>

            <section v-if="!processing && respondsMsg == 'code200'">
              <HandleMsg
                :showHeading="false"
                infotype="success"
                msg="Sign in successful thank you!"
                customClass="form-responds-msg"
              />
            </section>

            <section
              v-if="(!processing && respondsMsg == '') || respondsMsg == 'code100'"
            >
              <div v-if="!processing && respondsMsg == 'code100'">
                <HandleMsg
                  infotype="error"
                  :customHeading="'Error ' + respondsMsg"
                  :msg="returnSystemErrorMsg()"
                  customClass="form-responds-msg"
                />
              </div>
              <h5 class="text-center mb-3">IC co-workers only</h5>
              <p class="text-center small mb-3">
                Please note, all fields marked with a * are required
              </p>

              <form @submit.prevent="handleIvSigninForm">
                <div class="row">
                  <div class="col-md-10 mx-auto">
                    <section
                      class="pb-5"
                      v-if="coworkerSignInData.selected_coworker == ''"
                    >
                      <label class="form-label">Your first or last name *</label>
                      <coWorkerSearch
                        :makeResultAlink="false"
                        :focusOnSearchInput="true"
                        resultFoundTextSingular="person"
                        resultFoundTextplural="people"
                        user_type="coworker"
                        placeholderText="Let's find you..."
                        noResultText="Sorry we could'nt find you, this sign page is for only IC co-workers only"
                        @updateSelected="updateSelectedCoworker"
                      />
                    </section>
                    <section v-else>
                      <p class="bolded">
                        Your name:
                        <span class="selected-visitor-p ml-1">
                          <span class="pr-3">{{
                            coworkerSignInData.selected_coworker
                          }}</span>
                          <span class="change-visitor-btn" @click="changeCoworker">
                            Change
                          </span>
                        </span>
                      </p>

                      <div class="form-group">
                        <label class="form-label" for="visiting">
                          {{
                            coworkerSignInData.signInForm.visiting == ""
                              ? "Host *"
                              : "Your host:"
                          }}
                        </label>
                        <span
                          v-show="coworkerSignInData.signInForm.visiting == ''"
                          class="optional"
                        >
                          (Who are you here to see?)</span
                        >
                        <div
                          class="text-danger small"
                          v-if="coworkerSignInData.signInFormError.host_err != ''"
                        >
                          {{ coworkerSignInData.signInFormError.host_err }}
                        </div>
                        <span
                          class="selected-visitor-p"
                          v-if="coworkerSignInData.signInForm.visiting != ''"
                        >
                          <span class="ml-2 pr-3">
                            {{ coworkerSignInData.signInForm.visiting }}</span
                          >
                          <span class="change-visitor-btn" @click="changeHost">
                            Change
                          </span>
                        </span>
                        <div v-else>
                          <coWorkerSearch
                            :makeResultAlink="false"
                            resultFoundTextSingular="person"
                            resultFoundTextplural="people"
                            user_type="coworker"
                            :input_error="
                              coworkerSignInData.signInFormError.host_err != ''
                                ? true
                                : false
                            "
                            noResultText="Sorry no one found, try again or you can leave this field empty thank you."
                            @updateSelected="updateSelectedHost"
                            :inputFocusFunc="() => removeFormInputError('host')"
                          />
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="form-label" for="reason">Reason *</label>
                        <div
                          class="text-danger small"
                          v-if="coworkerSignInData.signInFormError.reason_err != ''"
                        >
                          {{ coworkerSignInData.signInFormError.reason_err }}
                        </div>

                        <div class="input-group">
                          <input
                            v-model="coworkerSignInData.signInForm.reason"
                            type="text"
                            :class="{
                              'form-control': true,
                              'input-error':
                                coworkerSignInData.signInFormError.reason_err != ''
                                  ? true
                                  : false,
                            }"
                            id="reason"
                            name="reason"
                            maxlength="255"
                            autocomplete="off"
                            @keypress.enter.prevent
                            @focus="() => removeFormInputError('reason')"
                          />
                          <div class="input-group-append">
                            <AppButton
                              btnType="button"
                              customClass="option-toggle-btn"
                              :btnFunc="() => toggleOptionWrapperDiv('reason')"
                            >
                              <i
                                :class="
                                  coworkerSignInData.isReasonOptionDivOpened
                                    ? 'fas fa-arrow-up'
                                    : 'fas fa-arrow-down'
                                "
                              ></i>
                            </AppButton>
                          </div>
                        </div>
                        <div class="quick-outer-wrapper" v-if="reasonResult.length > 0">
                          <div v-if="coworkerSignInData.isReasonOptionDivOpened">
                            <OptionElement
                              :resultObj="reasonResult"
                              :optionSelected="coworkerSignInData.signInForm.reason"
                              placeHolderText="Search for reason"
                              @updateSelectedOptionInput="handleQuickReason"
                            />
                          </div>
                          <p class="small">Quick reason</p>
                          <div class="quick-wrapper pb-2">
                            <span
                              v-for="(reason, reasonIndex) in reasonResult"
                              :key="reasonIndex"
                            >
                              <span
                                v-if="reason.quick_reason == 'yes'"
                                :class="{
                                  'quick-btn': true,
                                  'quick-btn-disabled':
                                    coworkerSignInData.signInForm.reason == reason.name,
                                }"
                                @click="() => handleQuickReason(reason.name)"
                                >{{ reason.name }}</span
                              >
                            </span>
                          </div>
                        </div>
                      </div>
                      <label class="form-label" for="badge">Badge id* </label>
                      <div
                        class="text-danger small"
                        v-if="coworkerSignInData.signInFormError.badge_err != ''"
                      >
                        {{ coworkerSignInData.signInFormError.badge_err }}
                      </div>

                      <div class="input-group">
                        <input
                          v-model="coworkerSignInData.signInForm.badge"
                          type="text"
                          :class="{
                            'form-control ext-badgeid-input': true,
                            'input-error':
                              coworkerSignInData.signInFormError.badge_err != ''
                                ? true
                                : false,
                          }"
                          id="badge"
                          name="badge"
                          maxlength="8"
                          autocomplete="off"
                          @keypress.enter.prevent
                          @focus="() => removeFormInputError('badge')"
                        />
                        <div class="input-group-append">
                          <img
                            :class="{
                              'badge-img ext-badge-img': true,
                              'input-error':
                                coworkerSignInData.signInFormError.badge_err != ''
                                  ? true
                                  : false,
                            }"
                            src="/imgs/badge.jpg"
                            alt="badge"
                          />
                        </div>
                        <!-- end div input-group -->
                      </div>
                      <input
                        v-model="coworkerSignInData.signInForm.myhouse"
                        type="text"
                        maxlength="2"
                        name="myhouse"
                        class="not_in_my_house"
                        @keypress.enter.prevent
                      />

                      <!-- <div class="text-center col-md-12 pt-4">
                        <AppCheckBox
                          :default_checked="coworkerSignInData.signInForm.code1000"
                          :checkbox_error="
                            coworkerSignInData.signInFormError.code1000_err
                          "
                          @updateCheckBox="updateCheckBox"
                        >
                          I have received <strong>site induction</strong>, read and
                          understood <strong>code 5K</strong> evacuation process*
                        </AppCheckBox>
                      </div> -->
                      <div class="pt-3 text-center">
                        <AppButton
                          btnType="submit"
                          btnStyle="primary"
                          customClass="iv-submit-btn"
                          >Submit</AppButton
                        >
                      </div>
                    </section>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { reactive, ref } from "vue";
import { router } from "@inertiajs/vue3";
import Layout from "../shared/Layout";
import HandleMsg from "../shared/HandleMsg";
import LoadingIndicator from "../shared/LoadingIndicator.vue";
import {
  scrollToTopOfPage,
  returnSystemErrorMsg,
  returnCoWorkerFullName,
  returnCurrentTime,
  returnCurrentDate,
} from "../helper/util";
import AppButton from "../shared/AppButton";
import OptionElement from "../shared/OptionElement.vue";
import coWorkerSearch from "../shared/coWorkerSearch";
import AppLink from "../shared/AppLink.vue";
import AppCheckBox from "../shared/AppCheckBox";
import axios from "../api/axios";

let processing = ref(false);

const props = defineProps({
  errors: Object,
  respondsMsg: String,

  reasonResult: {
    type: Object,
    default: [],
  },
});

const coworkerSignInData = reactive({
  signInForm: {
    first_name: "",
    last_name: "",
    phone: "",
    badge: "",
    company: "IC",
    reason: "Work",
    visiting: "",
    code1000: true,
    myhouse: "",
    action: "co-worker",
    host_details_arr: [],
    date_now: returnCurrentDate(),
    time_now: returnCurrentTime(),
  },
  signInFormError: {
    badge_err: "",
    reason_err: "",
    code1000_err: "",
    host_err: "",
  },
  selected_coworker: "",
  isReasonOptionDivOpened: false,
  isCompanyOptionDivOpened: false,
});

const updateCheckBox = (check_box_value) => {
  if (check_box_value) {
    if (coworkerSignInData.signInFormError.code1000_err != "") {
      coworkerSignInData.signInFormError.code1000_err = "";
    }
  }
  coworkerSignInData.signInForm.code1000 = check_box_value;
};

const updateSelectedCoworker = (selectedCoworker) => {
  coworkerSignInData.selected_coworker = returnCoWorkerFullName(
    selectedCoworker.fname,
    selectedCoworker.lname
  );

  coworkerSignInData.signInForm.first_name = selectedCoworker.fname;
  coworkerSignInData.signInForm.last_name = selectedCoworker.lname;
  coworkerSignInData.signInForm.phone = selectedCoworker.phone;

  fetchLeaders(selectedCoworker.depart_or_comp_id);
};

const updateSelectedHost = (selectedCoworker) => {
  coworkerSignInData.signInForm.visiting = returnCoWorkerFullName(
    selectedCoworker.fname,
    selectedCoworker.lname
  );
  coworkerSignInData.signInForm.host_details_arr = [selectedCoworker];
};

const changeCoworker = () => {
  coworkerSignInData.selected_coworker = "";
  coworkerSignInData.signInForm.host_details_arr = [];
  coworkerSignInData.signInForm.reason = "Work";
};

const changeHost = () => {
  coworkerSignInData.signInForm.visiting = "";
  coworkerSignInData.signInForm.host_details_arr = [];
};

const toggleOptionWrapperDiv = (inputName) => {
  if (inputName == "reason") {
    coworkerSignInData.isCompanyOptionDivOpened = false;
    coworkerSignInData.isReasonOptionDivOpened = !coworkerSignInData.isReasonOptionDivOpened;
  }
};

const hideOptionSelectDiv = () => {
  if (coworkerSignInData.isReasonOptionDivOpened) {
    coworkerSignInData.isReasonOptionDivOpened = false;
  }
};

const removeFormInputError = (inputName) => {
  switch (inputName) {
    case "host":
      coworkerSignInData.signInFormError.host_err = "";
      break;

    case "badge":
      coworkerSignInData.signInFormError.badge_err = "";
      break;

    case "reason":
      coworkerSignInData.signInFormError.reason_err = "";
      hideOptionSelectDiv();
      break;
    default:
      break;
  }
};

const handleQuickReason = (reasonText) => {
  coworkerSignInData.signInForm.reason = reasonText;
  coworkerSignInData.signInFormError.reason_err = "";
  hideOptionSelectDiv();
};

const assignServerErrors = (errObj) => {
  if (errObj.host !== undefined) {
    coworkerSignInData.signInFormError.host_err = errObj.host;
  }
  if (errObj.badge !== undefined) {
    coworkerSignInData.signInFormError.badge_err = errObj.badge;
  }

  if (errObj.reason !== undefined) {
    coworkerSignInData.signInFormError.reason_err = errObj.reason;
  }

  if (errObj?.code1000 !== undefined) {
    coworkerSignInData.signInFormError.code1000_err = errObj.code1000;
  }
};

const handleIvSigninForm = () => {
  //Validate the form
  let abort = false;
  if (coworkerSignInData.signInForm.visiting == "") {
    abort = true;
    coworkerSignInData.signInFormError.host_err =
      "Search and select your host please thank you";
  }

  if (coworkerSignInData.signInForm.badge == "") {
    abort = true;
    coworkerSignInData.signInFormError.badge_err = "Enter Badge id";
  }

  if (coworkerSignInData.signInForm.reason == "") {
    abort = true;
    coworkerSignInData.signInFormError.reason_err = "Reason is required";
  }

  if (coworkerSignInData.signInForm.code1000 == "") {
    abort = true;
    coworkerSignInData.signInFormError.code1000_err =
      "Tick this box to confirm you've recieved site induction and understand code 5K";
  }

  //Submit form if no validation errors

  if (!abort) {
    router.post("/handle-visitor-signin", coworkerSignInData.signInForm, {
      onStart: () => {
        scrollToTopOfPage();
        setTimeout(() => {
          processing.value = true;
        }, 300);
      },
      onSuccess: () => {
        if (props.respondsMsg == "code200") {
          setTimeout(() => {
            router.visit("/");
          }, 1600);
        }
      },
      onFinish: () => {
        processing.value = false;
      },
      onError: (errors) => {
        assignServerErrors(errors);
      },
    });
  } // end if abort
};

const fetchLeaders = async (depart_comp_id) => {
  try {
    const res = await axios.post("/fetch-leaders", {
      depart_comp_id: depart_comp_id,
    });

    if (res?.data?.error != "") {
      //console.log(res.data.error);
    } else {
      //console.log(res?.data?.leaders_result);
      if (res?.data?.leaders_result.length > 0) {
        coworkerSignInData.signInForm.visiting = returnCoWorkerFullName(
          res?.data?.leaders_result[0].fname,
          res?.data?.leaders_result[0].lname
        );
        coworkerSignInData.signInForm.host_details_arr = res?.data?.leaders_result;
      }
    }
  } catch (err) {
    //returnSystemErrorMsg();
    //console.log(err);
  }
};
</script>
