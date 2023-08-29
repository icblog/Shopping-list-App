<template>
  <Layout pageTitle="ext-visitor-signin" backUrl="/sign-in-option">
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
              <h5 class="text-center mb-3">External visitors only</h5>
              <p class="text-center small mb-5">
                Please note, all fields marked with a * are required
              </p>

              <form @submit.prevent="handleIvSigninForm">
                <div class="row">
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
                        ref="firstInput"
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
                            signInData.signInFormError.last_name_err != '' ? true : false,
                        }"
                        id="lname"
                        name="last_name"
                        maxlength="255"
                        autocomplete="off"
                        @keypress.enter.prevent
                        @focus="() => removeFormInputError('lname')"
                      />
                    </div>
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

                    <div class="form-group">
                      <label class="form-label" for="badge">Badge * </label>

                      <div class="badge-img-wrapper">
                        <img class="badge-img" src="/imgs/badge.jpg" alt="badge" />
                      </div>

                      <div
                        class="text-danger small"
                        v-if="signInData.signInFormError.badge_err != ''"
                      >
                        {{ signInData.signInFormError.badge_err }}
                      </div>

                      <input
                        v-model="signInData.signInForm.badge"
                        type="text"
                        :class="{
                          'form-control': true,
                          'input-error':
                            signInData.signInFormError.badge_err != '' ? true : false,
                        }"
                        id="badge"
                        name="badge"
                        maxlength="255"
                        autocomplete="off"
                        @keypress.enter.prevent
                        @focus="() => removeFormInputError('badge')"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="form-label" for="reason">Reason *</label>
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
                              signInData.signInFormError.reason_err != '' ? true : false,
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
                              v-if="company.quick_company == 'yes'"
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

                    <div class="form-group">
                      <label class="form-label" for="visiting">
                        {{
                          signInData.signInForm.visiting == ""
                            ? "Visiting"
                            : "You are visiting"
                        }}
                      </label>
                      <span
                        v-show="signInData.signInForm.visiting == ''"
                        class="optional"
                      >
                        (Optional)</span
                      >
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
                        />
                      </div>
                    </div>
                  </div>
                  <div class="text-center col-md-12">
                    <div
                      class="text-danger small"
                      v-if="signInData.signInFormError.code1000_err != ''"
                    >
                      {{ signInData.signInFormError.code1000_err }}
                    </div>

                    <label for="code1000" class="check-box-container">
                      <span class="induction-text"
                        >I have received <strong>site induction</strong>, read and
                        understood <strong>code 1000</strong> evacuation process *</span
                      >
                      <input
                        v-model="code1000CheckBox"
                        type="checkbox"
                        id="code1000"
                        name="code1000"
                        @keypress.enter.prevent
                      />

                      <span
                        :class="{
                          checkmark: true,
                          'input-error':
                            signInData.signInFormError.code1000_err != '' ? true : false,
                        }"
                      ></span>
                    </label>
                  </div>
                </div>

                <input
                  v-model="signInData.signInForm.myhouse"
                  type="text"
                  maxlength="2"
                  name="myhouse"
                  class="not_in_my_house"
                  @keypress.enter.prevent
                />

                <div class="pt-3 text-center">
                  <AppButton
                    btnType="submit"
                    btnStyle="primary"
                    customClass="iv-submit-btn"
                    >Submit</AppButton
                  >
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
import { reactive, ref, onMounted, watch } from "vue";
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
} from "../helper/util";
import AppButton from "../shared/AppButton";
import OptionElement from "../shared/OptionElement.vue";
import coWorkerSearch from "../shared/coWorkerSearch";
import AppLink from "../shared/AppLink.vue";

let processing = ref(false),
  firstInput = ref(null),
  code1000CheckBox = ref(false);

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
    badge: "",
    company: "",
    reason: "",
    visiting: "",
    code1000: code1000CheckBox,
    myhouse: "",
    action: "ext",
  },
  signInFormError: {
    first_name_err: "",
    last_name_err: "",
    phone_err: "",
    badge_err: "",
    reason_err: "",
    code1000_err: "",
  },
  isReasonOptionDivOpened: false,
  isCompanyOptionDivOpened: false,
});
const updateUserSelected = (coWorker) => {
  signInData.signInForm.visiting = returnCoWorkerFullName(coWorker.fname, coWorker.lname);
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

  if (signInData.signInForm.badge == "") {
    abort = true;
    signInData.signInFormError.badge_err = "Enter Badge letter or name";
  }

  if (signInData.signInForm.reason == "") {
    abort = true;
    signInData.signInFormError.reason_err = "Reason is required";
  }

  if (!code1000CheckBox.value) {
    abort = true;
    signInData.signInFormError.code1000_err =
      "Tick this box to confirm you've recieved site induction and understand code 1000";
  }
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

onMounted(() => {
  focusOnFirstInput(firstInput);
});

watch(code1000CheckBox, (newCode1000Value) => {
  if (newCode1000Value) {
    signInData.signInFormError.code1000_err = "";
  }
  signInData.signInForm.code1000 = newCode1000Value;
});
</script>
