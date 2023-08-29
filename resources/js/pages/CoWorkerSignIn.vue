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
              <h5 class="text-center mb-3">ZXY co-workers only</h5>
              <p class="text-center small mb-5">
                Please note, all fields marked with a * are required
              </p>

              <form @submit.prevent="handleIvSigninForm">
                <div class="row">
                  <div class="col-md-9 mx-auto">
                    <section v-if="coworkerSignInData.selected_coworker == ''">
                      <label class="form-label" for="lname">Last name *</label>
                      <coWorkerSearch
                        :makeResultAlink="false"
                        :focusOnSearchInput="true"
                        resultFoundTextSingular="person"
                        resultFoundTextplural="people"
                        placeholderText="Let's find you..."
                        noResultText="Sorry we could'nt find you, this sign page is for only ZYX co-workers only"
                        @updateSelected="updateUserSelected"
                      />
                    </section>
                    <section v-else>
                      <p class="bolded">Your name</p>
                      <p class="selected-visitor-p">
                        <span class="pr-3">{{
                          coworkerSignInData.selected_coworker
                        }}</span>
                        <span class="change-visitor-btn" @click="changeCoworker">
                          Change
                        </span>
                      </p>

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

                      <div
                        v-show="
                          coworkerSignInData.signInForm.reason != '' &&
                          coworkerSignInData.signInForm.reason == 'Meeting'
                        "
                        class="form-group"
                      >
                        <label class="form-label" for="visiting">
                          {{
                            coworkerSignInData.signInForm.visiting == ""
                              ? "Visiting"
                              : "You are visiting"
                          }}
                        </label>
                        <span
                          v-show="coworkerSignInData.signInForm.visiting == ''"
                          class="optional"
                        >
                          (Optional)</span
                        >
                        <p
                          class="selected-visitor-p"
                          v-if="coworkerSignInData.signInForm.visiting != ''"
                        >
                          <span class="pr-3">
                            {{ coworkerSignInData.signInForm.visiting }}</span
                          >
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
                            @updateSelected="updateVisitorSelected"
                          />
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="form-label" for="badge">Badge * </label>

                        <div class="badge-img-wrapper">
                          <img class="badge-img" src="/imgs/badge.jpg" alt="badge" />
                        </div>

                        <div
                          class="text-danger small"
                          v-if="coworkerSignInData.signInFormError.badge_err != ''"
                        >
                          {{ coworkerSignInData.signInFormError.badge_err }}
                        </div>

                        <input
                          v-model="coworkerSignInData.signInForm.badge"
                          type="text"
                          :class="{
                            'form-control': true,
                            'input-error':
                              coworkerSignInData.signInFormError.badge_err != ''
                                ? true
                                : false,
                          }"
                          id="badge"
                          name="badge"
                          maxlength="255"
                          autocomplete="off"
                          @keypress.enter.prevent
                          @focus="() => removeFormInputError('badge')"
                        />
                      </div>

                      <input
                        v-model="coworkerSignInData.signInForm.myhouse"
                        type="text"
                        maxlength="2"
                        name="myhouse"
                        class="not_in_my_house"
                        @keypress.enter.prevent
                      />

                      <div class="text-center col-md-12">
                        <div
                          class="text-danger small"
                          v-if="coworkerSignInData.signInFormError.code1000_err != ''"
                        >
                          {{ coworkerSignInData.signInFormError.code1000_err }}
                        </div>

                        <label for="code1000" class="check-box-container">
                          <span class="induction-text induction-text-coworker"
                            >I have received <strong>site induction</strong>, read and
                            understood <strong>code 1000</strong> evacuation process
                            *</span
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
                              checkmarkcoworkerform: true,
                              checkmark: true,
                              'input-error':
                                coworkerSignInData.signInFormError.code1000_err != ''
                                  ? true
                                  : false,
                            }"
                          ></span>
                        </label>
                      </div>

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
import { reactive, ref, watch } from "vue";
import { router } from "@inertiajs/vue3";
import Layout from "../shared/Layout";
import HandleMsg from "../shared/HandleMsg";
import LoadingIndicator from "../shared/LoadingIndicator.vue";
import {
  scrollToTopOfPage,
  returnSystemErrorMsg,
  returnCoWorkerFullName,
} from "../helper/util";
import AppButton from "../shared/AppButton";
import OptionElement from "../shared/OptionElement.vue";
import coWorkerSearch from "../shared/coWorkerSearch";
import AppLink from "../shared/AppLink.vue";

let processing = ref(false),
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

const coworkerSignInData = reactive({
  signInForm: {
    first_name: "",
    last_name: "",
    phone: "",
    badge: "",
    company: "XZY",
    reason: "",
    visiting: "",
    code1000: code1000CheckBox,
    myhouse: "",
    action: "co-worker",
  },
  signInFormError: {
    badge_err: "",
    reason_err: "",
    code1000_err: "",
  },
  selected_coworker: "",
  isReasonOptionDivOpened: false,
  isCompanyOptionDivOpened: false,
});
const updateUserSelected = (selectedCoworker) => {
  coworkerSignInData.selected_coworker = returnCoWorkerFullName(
    selectedCoworker.fname,
    selectedCoworker.lname
  );

  coworkerSignInData.signInForm.first_name = selectedCoworker.fname;
  coworkerSignInData.signInForm.last_name = selectedCoworker.lname;
  coworkerSignInData.signInForm.phone = selectedCoworker.phone;
};
const updateVisitorSelected = (selectedCoworker) => {
  coworkerSignInData.signInForm.visiting = returnCoWorkerFullName(
    selectedCoworker.fname,
    selectedCoworker.lname
  );
};

const changeCoworker = () => {
  coworkerSignInData.selected_coworker = "";
};

const changeVisitor = () => {
  coworkerSignInData.signInForm.visiting = "";
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

  if (coworkerSignInData.signInForm.badge == "") {
    abort = true;
    coworkerSignInData.signInFormError.badge_err = "Enter Badge letter or name";
  }

  if (coworkerSignInData.signInForm.reason == "") {
    abort = true;
    coworkerSignInData.signInFormError.reason_err = "Reason is required";
  }

  if (!code1000CheckBox.value) {
    abort = true;
    coworkerSignInData.signInFormError.code1000_err =
      "Tick this box to confirm you've recieved site induction and understand code 1000";
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

watch(code1000CheckBox, (newCode1000Value) => {
  if (newCode1000Value) {
    coworkerSignInData.signInFormError.code1000_err = "";
  }
  coworkerSignInData.signInForm.code1000 = newCode1000Value;
});
</script>
