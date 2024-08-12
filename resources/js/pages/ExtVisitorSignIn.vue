<template>
  <Layout pageTitle="ext-visitor-signin" backUrl="/sign-in-option">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="form-wrapper">
            <!-- loading spinner when sending the form -->
            <section v-if="processing && respondsMsg == ''"><LoadingIndicator /></section>
            <!-- Error from processing the form -->
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
            <!-- Success from processing the form -->
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
              <!-- System error from processing the form -->
              <div v-if="!processing && respondsMsg == 'code100'">
                <HandleMsg
                  infotype="error"
                  :customHeading="'Error ' + respondsMsg"
                  :msg="returnSystemErrorMsg()"
                  customClass="form-responds-msg"
                />
              </div>
              <h5 class="text-center mb-2">External visitors/contractors only</h5>
              <p class="text-center small mb-3">
                <span class="optional">
                  (Please note, all fields marked with a * are required)</span
                >
              </p>
              <form @submit.prevent="handleIvSigninForm">
                <!-- Check if visitor/contractor is regular and populate the form -->
                <section class="mb-5" v-show="!signInData.checking_badge_complete">
                  <div class="row">
                    <div class="col-md-7 mx-auto mb-3 mt-3">
                      <div v-if="signInData.badge_id_err != ''">
                        <HandleMsg
                          infotype="error"
                          :customHeading="'Badge error_01 '"
                          :msg="signInData.badge_id_err"
                          customClass="form-responds-msg"
                        />
                      </div>
                      <div v-else class="input-group">
                        <div class="input-group-prepend">
                          <label class="form-label mr-2" for="badge">Badge id* </label>
                        </div>
                        <input
                          ref="firstInput"
                          v-model="badge_id"
                          type="text"
                          :class="{
                            'form-control ext-badgeid-input': true,
                            'input-error':
                              signInData.signInFormError.badge_err != '' ? true : false,
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
                            class="badge-img ext-badge-img"
                            src="/imgs/badge.jpg"
                            alt="badge"
                          />
                        </div>
                        <!-- end div input-group -->
                      </div>
                      <div v-show="signInData.checking_badge">
                        <LoadingIndicator
                          loaderSize="small"
                          loaderPSizeClassName="invisible"
                        />
                      </div>

                      <!-- end div col-md-7 mx-auto -->
                    </div>
                    <!-- end div row -->
                  </div>
                </section>
                <!-- Show rest of form -->
                <section v-show="signInData.checking_badge_complete">
                  <div class="row">
                    <div class="col-md-12 pb-3">
                      <label class="form-label pr-2">Your badge id is:</label>
                      <span class="selected-visitor-p"
                        >{{ signInData.signInForm.badge }}
                        <span class="ml-2 change-visitor-btn" @click="changeBadge">
                          Change
                        </span>
                      </span>
                    </div>
                    <!-- end div col-md-12 -->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="form-label" for="fname">First name *</label>
                        <div
                          class="text-danger small"
                          v-if="signInData.signInFormError.first_name_err != ''"
                        >
                          {{ signInData.signInFormError.first_name_err }}
                        </div>
                        <input
                          v-model="signInData.signInForm.first_name"
                          type="text"
                          :class="{
                            'form-control': true,
                            'input-error':
                              signInData.signInFormError.first_name_err != ''
                                ? true
                                : false,
                          }"
                          id="fname"
                          name="first_name"
                          maxlength="255"
                          autocomplete="off"
                          @keypress.enter.prevent
                          @focus="() => removeFormInputError('fname')"
                        />
                      </div>
                      <!-- end div form-group -->
                      <div class="form-group">
                        <label class="form-label" for="phone">Phone *</label>
                        <div
                          class="text-danger small"
                          v-if="signInData.signInFormError.phone_err != ''"
                        >
                          {{ signInData.signInFormError.phone_err }}
                        </div>
                        <input
                          v-model="signInData.signInForm.phone"
                          type="text"
                          :class="{
                            'form-control': true,
                            'input-error':
                              signInData.signInFormError.phone_err != '' ? true : false,
                          }"
                          id="phone"
                          name="phone"
                          maxlength="11"
                          autocomplete="off"
                          @keypress.enter.prevent
                          @focus="() => removeFormInputError('phone')"
                        />
                      </div>
                      <!-- end div form-group -->

                      <div class="form-group">
                        <label class="form-label" for="reason">Reason *</label>
                        <span class="optional"> (Why you're here today?)</span>
                        <div
                          class="text-danger small"
                          v-if="signInData.signInFormError.reason_err != ''"
                        >
                          {{ signInData.signInFormError.reason_err }}
                        </div>

                        <div class="input-group">
                          <input
                            v-model="signInData.signInForm.reason"
                            type="text"
                            :class="{
                              'form-control': true,
                              'input-error':
                                signInData.signInFormError.reason_err != ''
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
                                  signInData.isReasonOptionDivOpened
                                    ? 'fas fa-arrow-up'
                                    : 'fas fa-arrow-down'
                                "
                              ></i>
                            </AppButton>
                          </div>
                        </div>
                        <div class="quick-outer-wrapper" v-if="reasonResult.length > 0">
                          <div v-if="signInData.isReasonOptionDivOpened">
                            <OptionElement
                              :resultObj="reasonResult"
                              :optionSelected="signInData.signInForm.reason"
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
                                    signInData.signInForm.reason == reason.name,
                                }"
                                @click="() => handleQuickReason(reason.name)"
                                >{{ reason.name }}</span
                              >
                            </span>
                          </div>
                        </div>
                      </div>
                      <!-- end div form-group -->
                    </div>
                    <!-- end div col-md-6 -->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="form-label" for="lname">Last name *</label>
                        <div
                          class="text-danger small"
                          v-if="signInData.signInFormError.last_name_err != ''"
                        >
                          {{ signInData.signInFormError.last_name_err }}
                        </div>
                        <input
                          v-model="signInData.signInForm.last_name"
                          type="text"
                          :class="{
                            'form-control': true,
                            'input-error':
                              signInData.signInFormError.last_name_err != ''
                                ? true
                                : false,
                          }"
                          id="lname"
                          name="last_name"
                          maxlength="255"
                          autocomplete="off"
                          @keypress.enter.prevent
                          @focus="() => removeFormInputError('lname')"
                        />
                      </div>
                      <!-- end div form-group -->

                      <div class="form-group">
                        <label class="form-label" for="visiting">
                          {{
                            signInData.signInForm.visiting == ""
                              ? "Host * "
                              : "Your host: "
                          }}
                        </label>
                        <span
                          v-show="signInData.signInForm.visiting == ''"
                          class="optional"
                        >
                          (Who are you here to see?)</span
                        >
                        <div
                          class="text-danger small"
                          v-if="signInData.signInFormError.host_err != ''"
                        >
                          {{ signInData.signInFormError.host_err }}
                        </div>

                        <p
                          class="selected-visitor-p"
                          v-if="signInData.signInForm.visiting != ''"
                        >
                          <span class="pr-3"> {{ signInData.signInForm.visiting }}</span>
                          <span class="change-visitor-btn" @click="changeVisitor">
                            Change
                          </span>
                        </p>
                        <div v-else>
                          <coWorkerSearch
                            :makeResultAlink="false"
                            resultFoundTextSingular="person"
                            resultFoundTextplural="people"
                            noResultText="Sorry no one found, try again or you can leave this field empty thank you."
                            @updateSelected="updateUserSelected"
                            :inputFocusFunc="() => removeFormInputError('host')"
                          />
                        </div>
                      </div>
                      <!-- end div form group -->

                      <div class="form-group">
                        <label class="form-label" for="company">Company</label>
                        <span class="optional"> (Optional)</span>
                        <div class="input-group">
                          <input
                            v-model="signInData.signInForm.company"
                            type="text"
                            class="form-control"
                            id="company"
                            name="company"
                            maxlength="255"
                            autocomplete="off"
                            @keypress.enter.prevent
                            @focus="() => removeFormInputError('company')"
                          />
                          <div class="input-group-append">
                            <AppButton
                              btnType="button"
                              customClass="option-toggle-btn"
                              :btnFunc="() => toggleOptionWrapperDiv('company')"
                            >
                              <i
                                :class="
                                  signInData.isCompanyOptionDivOpened
                                    ? 'fas fa-arrow-up'
                                    : 'fas fa-arrow-down'
                                "
                              ></i>
                            </AppButton>
                          </div>
                        </div>
                        <div class="quick-outer-wrapper" v-if="companyResult.length > 0">
                          <div v-if="signInData.isCompanyOptionDivOpened">
                            <OptionElement
                              :resultObj="companyResult"
                              :optionSelected="signInData.signInForm.company"
                              @updateSelectedOptionInput="handleQuickCompany"
                              placeHolderText="Search for company"
                            />
                          </div>
                          <p class="small">Quick company</p>
                          <div class="quick-wrapper pb-2">
                            <span
                              v-for="(company, companyIndex) in companyResult"
                              :key="companyIndex"
                            >
                              <span
                                v-if="company.is_quick == 1"
                                :class="{
                                  'quick-btn': true,
                                  'quick-btn-disabled':
                                    signInData.signInForm.company == company.name,
                                }"
                                @click="() => handleQuickCompany(company.name)"
                                >{{ company.name }}</span
                              >
                            </span>
                          </div>
                        </div>
                      </div>
                      <!-- end div form group -->
                    </div>
                    <!-- end div col-md-6 -->
                    <div class="text-center col-md-12 pt-3">
                      <!-- Bot detection -->
                      <input
                        v-model="signInData.signInForm.myhouse"
                        type="text"
                        maxlength="2"
                        name="myhouse"
                        class="not_in_my_house"
                        @keypress.enter.prevent
                      />
                      <div v-show="signInData.signInForm.reason == 'Work'">
                        <AppCheckBox
                          :default_checked="signInData.signInForm.code1000"
                          :checkbox_error="signInData.signInFormError.code1000_err"
                          @updateCheckBox="updateCheckBox"
                        >
                          I have received <strong>site induction</strong>, read and
                          understood <strong>code 5K</strong> evacuation process*
                        </AppCheckBox>
                      </div>
                    </div>
                    <!-- end div col-md-12 -->
                    <div class="pt-3 col-md-6 mx-auto">
                      <AppButton
                        btnType="submit"
                        btnStyle="primary"
                        customClass="iv-submit-btn"
                        >Sign in</AppButton
                      >
                    </div>
                  </div>
                  <!-- end div row -->
                </section>
              </form>
            </section>

            <!-- end div form wrapper -->
          </div>
          <!-- end div col-md-12 -->
        </div>
        <!-- end div row -->
      </div>
      <!-- end div container -->
    </div>
  </Layout>
</template>

<script setup>
import { reactive, ref, onMounted, watch } from "vue";
import { debounce } from "lodash";
import { router } from "@inertiajs/vue3";
import Layout from "../shared/Layout";
import HandleMsg from "../shared/HandleMsg";
import LoadingIndicator from "../shared/LoadingIndicator.vue";
import {
  focusOnFirstInput,
  scrollToTopOfPage,
  returnSystemErrorMsg,
  validMobileNumber,
  returnCoWorkerFullName,
  returnCurrentTime,
  returnCurrentDate,
} from "../helper/util";
import AppButton from "../shared/AppButton";
import OptionElement from "../shared/OptionElement";
import coWorkerSearch from "../shared/coWorkerSearch";
import AppLink from "../shared/AppLink";
import AppCheckBox from "../shared/AppCheckBox";
import axios from "../api/axios";

let processing = ref(false),
  firstInput = ref(null),
  badge_id = ref("");

const props = defineProps({
  errors: Object,
  respondsMsg: String,
  companyResult: {
    type: Object,
    default: [],
  },
  reasonResult: {
    type: Object,
    default: [],
  },
});

const signInData = reactive({
  signInForm: {
    first_name: "",
    last_name: "",
    phone: "",
    badge: badge_id,
    company: "",
    reason: "",
    visiting: "",
    code1000: false,
    myhouse: "",
    action: "ext",
    host_details_arr: [],
    date_now: returnCurrentDate(),
    time_now: returnCurrentTime(),
  },
  signInFormError: {
    first_name_err: "",
    last_name_err: "",
    phone_err: "",
    badge_err: "",
    reason_err: "",
    host_err: "",
    code1000_err: "",
  },
  isReasonOptionDivOpened: false,
  isCompanyOptionDivOpened: false,
  badge_id_err: "",
  checking_badge: false,
  checking_badge_complete: false,
});
const updateCheckBox = (check_box_value) => {
  if (check_box_value) {
    if (signInData.signInFormError.code1000_err != "") {
      signInData.signInFormError.code1000_err = "";
    }
  }
  signInData.signInForm.code1000 = check_box_value;
};
const changeBadge = () => {
  signInData.signInForm.code1000 = false;
  signInData.checking_badge_complete = false;
  signInData.signInForm.host_details_arr = [];
  signInData.signInForm.first_name = "";
  signInData.signInForm.last_name = "";
  signInData.signInForm.phone = "";
  signInData.signInForm.reason = "";
  signInData.signInForm.company = "";
  signInData.signInForm.visiting = "";
};

const updateUserSelected = (coWorker) => {
  signInData.signInForm.visiting = returnCoWorkerFullName(coWorker.fname, coWorker.lname);
  signInData.signInForm.host_details_arr = [coWorker];
};

const changeVisitor = () => {
  signInData.signInForm.visiting = "";
};
const toggleOptionWrapperDiv = (inputName) => {
  if (inputName == "reason") {
    signInData.isCompanyOptionDivOpened = false;
    signInData.isReasonOptionDivOpened = !signInData.isReasonOptionDivOpened;
  }

  if (inputName == "company") {
    signInData.isReasonOptionDivOpened = false;
    signInData.isCompanyOptionDivOpened = !signInData.isCompanyOptionDivOpened;
  }
};

const hideOptionSelectDiv = () => {
  if (signInData.isReasonOptionDivOpened) {
    signInData.isReasonOptionDivOpened = false;
  }
  if (signInData.isCompanyOptionDivOpened) {
    signInData.isCompanyOptionDivOpened = false;
  }
};

const removeFormInputError = (inputName) => {
  switch (inputName) {
    case "fname":
      signInData.signInFormError.first_name_err = "";
      break;
    case "lname":
      signInData.signInFormError.last_name_err = "";
      break;
    case "phone":
      signInData.signInFormError.phone_err = "";
      break;
    case "host":
      signInData.signInFormError.host_err = "";
      break;
    case "badge":
      signInData.signInFormError.badge_err = "";
      break;

    case "reason":
      signInData.signInFormError.reason_err = "";
      hideOptionSelectDiv();
      break;
    case "company":
      hideOptionSelectDiv();
      break;
    default:
      break;
  }
};

const handleQuickCompany = (companyText) => {
  signInData.signInForm.company = companyText;
  hideOptionSelectDiv();
};

const handleQuickReason = (reasonText) => {
  signInData.signInForm.reason = reasonText;
  signInData.signInFormError.reason_err = "";
  hideOptionSelectDiv();
};

const assignServerErrors = (errObj) => {
  if (errObj?.first_name !== undefined) {
    signInData.signInFormError.first_name_err = errObj?.first_name;
  }

  if (errObj.last_name !== undefined) {
    signInData.signInFormError.last_name_err = errObj.last_name;
  }

  if (errObj.phone !== undefined) {
    signInData.signInFormError.phone_err = errObj.phone;
  }

  if (errObj.badge !== undefined) {
    signInData.signInFormError.badge_err = errObj.badge;
  }

  if (errObj.reason !== undefined) {
    signInData.signInFormError.reason_err = errObj.reason;
  }

  if (errObj.host !== undefined) {
    signInData.signInFormError.host_err = errObj.host;
  }

  if (errObj?.code1000 !== undefined) {
    signInData.signInFormError.code1000_err = errObj.code1000;
  }
};

const handleIvSigninForm = () => {
  //Validate the form
  let abort = false;
  if (signInData.signInForm.first_name == "") {
    abort = true;
    signInData.signInFormError.first_name_err = "First name is required";
  }

  if (signInData.signInForm.last_name == "") {
    abort = true;
    signInData.signInFormError.last_name_err = "Last name is required";
  }

  if (signInData.signInForm.phone == "") {
    abort = true;
    signInData.signInFormError.phone_err = "Phone number is required";
  }

  if (!validMobileNumber(signInData.signInForm.phone)) {
    abort = true;
    signInData.signInFormError.phone_err = "Phone number is invalid";
  }

  if (signInData.signInForm.visiting == "") {
    abort = true;
    signInData.signInFormError.host_err =
      "Please search and select your host. the person you're to see thank you.";
  }

  if (signInData.signInForm.badge == "") {
    abort = true;
    signInData.signInFormError.badge_err = "Enter Badge letter or name";
  }

  if (signInData.signInForm.reason == "") {
    abort = true;
    signInData.signInFormError.reason_err = "Reason is required";
  }

  if (signInData.signInForm.reason == "Work") {
    if (!signInData.signInForm.code1000) {
      abort = true;
      signInData.signInFormError.code1000_err =
        "Tick this box to confirm you've recieved site induction and understand code 5K";
    }
  } // end if work

  //Submit form if no validation errors

  if (!abort) {
    router.post("/handle-visitor-signin", signInData.signInForm, {
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

const fetchRegualarContractorOrVisitor = async (badge_id) => {
  if (badge_id != "") {
    signInData.checking_badge = true;

    if (signInData.checking_badge_complete) {
      signInData.checking_badge_complete = false;
    }

    try {
      const res = await axios.post("/fetch-regular-contractor-visitor", {
        badge_id: badge_id,
      });

      if (res?.data?.error != "") {
        signInData.badge_id_err = res.data.error;
      } else {
        // console.log(res?.data);
        assignVisitorContractorDetails(
          res?.data?.visitor_contractor_data,
          res?.data?.visitor_contractor_leader_data
        );
      }
    } catch (err) {
      signInData.badge_id_err = returnSystemErrorMsg();
      //console.log(err);
    } finally {
      signInData.checking_badge = false;
      signInData.checking_badge_complete = true;
    }
  } //end if badge_id not empty
};

const assignVisitorContractorDetails = (visitor_contractor_data, host_details_arr) => {
  // console.log(visitor_contractor_data);
  if (visitor_contractor_data != null) {
    signInData.signInForm.first_name = visitor_contractor_data.fname;
    signInData.signInForm.last_name = visitor_contractor_data.lname;
    signInData.signInForm.phone = visitor_contractor_data.phone;
    signInData.signInForm.reason = "Work";
    signInData.signInForm.company = visitor_contractor_data.depart_or_comp_name;
    signInData.signInForm.code1000 = true;
  }

  if (host_details_arr.length > 0) {
    signInData.signInForm.visiting = returnCoWorkerFullName(
      host_details_arr[0].fname,
      host_details_arr[0].lname
    );
    signInData.signInForm.host_details_arr = host_details_arr;
  }
};

onMounted(() => {
  if (firstInput.value != null) {
    focusOnFirstInput(firstInput);
  }
});

//Watch the search input value for changes.
watch(
  badge_id,
  debounce((value) => {
    fetchRegualarContractorOrVisitor(value);
  }, 700)
);
</script>
