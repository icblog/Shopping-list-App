<template>
  <div class="container">
    <div class="row mb-5">
      <div class="col-md-8 mx-auto mb-4">
        <h5 class="text-center">Going off site</h5>
        <p
          v-show="going_off_site_data.form_data.yes_no_action == 'Yes'"
          class="text-center"
        >
          IC co-workers only
        </p>
        <p
          v-show="going_off_site_data.form_data.yes_no_action == 'No'"
          class="text-center"
        >
          External visitors/contractors only
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 mx-auto">
        <div class="form-wrapper">
          <section v-show="going_off_site_data.form_data.yes_no_action == ''">
            <div class="text-center pt-5">
              <p class="bolded">Are you IC Co-worker?</p>
              <div class="text-center pt-4">
                <AppButton
                  :btnFunc="() => handleYesNoBtn('No')"
                  customClass="btn-warning mr-3 bolded pt-3 pb-3 pl-5 pr-5"
                >
                  No
                </AppButton>
                <AppButton
                  :btnFunc="() => handleYesNoBtn('Yes')"
                  customClass="btn-primary ml-3 bolded pt-3 pb-3 pl-5 pr-5"
                >
                  Yes
                </AppButton>
              </div>
            </div>
          </section>
          <!-- if processing form -->
          <section
            v-show="
              going_off_site_data.is_processing && going_off_site_data.responds_code == ''
            "
          >
            <LoadingIndicator />
          </section>
          <!-- if success -->
          <section>
            <HandleMsg
              v-show="
                !going_off_site_data.is_processing &&
                going_off_site_data.responds_code == 'code0'
              "
              :showHeading="false"
              infotype="success"
              msg="Signed out successful thank you!"
              customClass="form-responds-msg"
            />
          </section>
          <!-- if error -->

          <section
            v-show="
              !going_off_site_data.is_processing &&
              going_off_site_data.responds_code == 'code1'
            "
          >
            <HandleMsg
              infotype="error"
              :customHeading="'Error ' + going_off_site_data.responds_code"
              :msg="returnSystemErrorMsg()"
              customClass="form-responds-msg"
            />
          </section>
          <!-- if signed out for the day and not siged back in yet -->
          <section
            v-show="
              !going_off_site_data.is_processing &&
              going_off_site_data.responds_code == 'code2'
            "
          >
            <div>
              <HandleMsg
                infotype="error"
                :customHeading="'Error ' + going_off_site_data.responds_code"
                msg="You didn't sign back in the last you went out, please sign back in first before signing out again thank you!"
                customClass="form-responds-msg"
              />
              <div class="text-center">
                <AppLink
                  className="primary-btn"
                  :linkUrl="`/temp-offsite-backin/${going_off_site_data.signed_out_id}`"
                  >Sign in</AppLink
                >
              </div>
            </div>
          </section>
          <!-- show form -->
          <section
            v-show="
              !going_off_site_data.is_processing &&
              going_off_site_data.responds_code == ''
            "
          >
            <p
              v-show="
                going_off_site_data.form_data.yes_no_action == 'Yes' ||
                going_off_site_data.form_data.yes_no_action == 'No'
              "
              class="small mb-3 mt-3"
            >
              Please note, all fields marked with a * are required
            </p>

            <form @submit.prevent="handleGoingOffSiteForm">
              <section v-show="going_off_site_data.form_data.yes_no_action == 'Yes'">
                <div v-if="going_off_site_data.form_data.fname == ''">
                  <label class="form-label">Last name *</label>
                  <coWorkerSearch
                    :makeResultAlink="false"
                    :focusOnSearchInput="true"
                    resultFoundTextSingular="person"
                    resultFoundTextplural="people"
                    placeholderText="Let's find you..."
                    noResultText="Sorry we could'nt find you, this sign page is for only ZYX co-workers only"
                    @updateSelected="updateUserSelected"
                  />
                </div>
                <div v-else>
                  <p class="bolded mt-3">Your name:</p>
                  <p class="selected-visitor-p">
                    <span class="pr-3">{{
                      returnCoWorkerFullName(
                        going_off_site_data.form_data.fname,
                        going_off_site_data.form_data.lname
                      )
                    }}</span>
                    <span class="change-visitor-btn" @click="changeCoworker">
                      Change
                    </span>
                  </p>
                </div>
              </section>
              <section v-show="going_off_site_data.form_data.yes_no_action == 'No'">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="form-label" for="fname">First name *</label>
                      <div
                        class="text-danger small"
                        v-show="going_off_site_data.form_errors.fname_err != ''"
                      >
                        {{ going_off_site_data.form_errors.fname_err }}
                      </div>
                      <input
                        v-model="going_off_site_data.form_data.fname"
                        type="text"
                        :class="{
                          'form-control': true,
                          'input-error':
                            going_off_site_data.form_errors.fname_err != ''
                              ? true
                              : false,
                        }"
                        maxlength="255"
                        autocomplete="off"
                        @keypress.enter.prevent
                        @focus="() => removeFormInputError('fname')"
                      />
                    </div>
                    <!-- end col-md-6 -->
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="form-label" for="lname">Last name *</label>
                      <div
                        class="text-danger small"
                        v-show="going_off_site_data.form_errors.lname_err != ''"
                      >
                        {{ going_off_site_data.form_errors.lname_err }}
                      </div>
                      <input
                        v-model="going_off_site_data.form_data.lname"
                        type="text"
                        :class="{
                          'form-control': true,
                          'input-error':
                            going_off_site_data.form_errors.lname_err != ''
                              ? true
                              : false,
                        }"
                        maxlength="255"
                        autocomplete="off"
                        @keypress.enter.prevent
                        @focus="() => removeFormInputError('lname')"
                      />
                    </div>
                    <!-- end col-md-6 -->
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label class="form-label" for="company">Company *</label>
                      <p class="small">
                        Select, pick or type your company if it's not listed.
                      </p>
                      <div
                        class="text-danger small"
                        v-show="going_off_site_data.form_errors.depart_comp_err != ''"
                      >
                        {{ going_off_site_data.form_errors.depart_comp_err }}
                      </div>
                      <div class="input-group">
                        <input
                          v-model="going_off_site_data.form_data.depart_comp"
                          type="text"
                          :class="{
                            'form-control': true,
                            'input-error':
                              going_off_site_data.form_errors.depart_comp_err != ''
                                ? true
                                : false,
                          }"
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
                                going_off_site_data.is_company_option_div_opened
                                  ? 'fas fa-arrow-up'
                                  : 'fas fa-arrow-down'
                              "
                            ></i>
                          </AppButton>
                        </div>
                      </div>
                      <div class="quick-outer-wrapper" v-if="company_result.length > 0">
                        <div v-show="going_off_site_data.is_company_option_div_opened">
                          <OptionElement
                            :resultObj="company_result"
                            :optionSelected="going_off_site_data.form_data.depart_comp"
                            @updateSelectedOptionInput="handleQuickCompany"
                            placeHolderText="Search for company"
                          />
                        </div>
                        <p class="small">Quick company</p>
                        <div class="quick-wrapper pb-2">
                          <span
                            v-for="(company, company_index) in company_result"
                            :key="company_index"
                          >
                            <span
                              v-show="company.is_quick == 1"
                              :class="{
                                'quick-btn': true,
                                'quick-btn-disabled':
                                  going_off_site_data.form_data.depart_comp ==
                                  company.name,
                              }"
                              @click="() => handleQuickCompany(company.name)"
                              >{{ company.name }}</span
                            >
                          </span>
                        </div>
                      </div>
                    </div>
                    <!-- end col-md-12 -->
                  </div>
                  <!-- end row-->
                </div>
              </section>

              <div v-show="!showSubmitBtn()">
                <input
                  v-model="going_off_site_data.form_data.myhouse"
                  type="text"
                  maxlength="2"
                  name="myhouse"
                  class="not_in_my_house"
                  @keypress.enter.prevent
                />
                <div class="pt-4 text-center">
                  <AppButton btnType="submit" customClass="btn-primary" :fullBtn="true"
                    >Submit</AppButton
                  >
                </div>
              </div>
            </form>
          </section>

          <!-- end form wrapper -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { router } from "@inertiajs/vue3";
import axios from "../api/axios";
import AppButton from "../shared/AppButton";
import coWorkerSearch from "../shared/coWorkerSearch";
import HandleMsg from "../shared/HandleMsg";
import AppLink from "../shared/AppLink";

import LoadingIndicator from "../shared/LoadingIndicator";
import OptionElement from "../shared/OptionElement";
import {
  scrollToTopOfPage,
  returnSystemErrorMsg,
  returnCoWorkerFullName,
} from "../helper/util";

const props = defineProps({
  errors: {
    type: Object,
    default: [],
  },

  company_result: {
    type: Object,
    default: [],
  },
});

const going_off_site_data = reactive({
  is_processing: false,
  is_company_option_div_opened: false,
  responds_code: "",
  signed_out_id: 0,
  form_data: {
    myhouse: "",
    fname: "",
    lname: "",
    depart_comp: "",
    yes_no_action: "",
  },
  form_errors: {
    fname_err: "",
    lname_err: "",
    depart_comp_err: "",
  },
});

const showSubmitBtn = () => {
  let is_all_field_empty = false;
  if (
    going_off_site_data.form_data.fname == "" ||
    going_off_site_data.form_data.lname == "" ||
    going_off_site_data.form_data.depart_comp == ""
  ) {
    is_all_field_empty = true;
  }
  return is_all_field_empty;
};

const handleQuickCompany = (name) => {
  going_off_site_data.form_data.depart_comp = name;
  going_off_site_data.is_company_option_div_opened = false;
};

const toggleOptionWrapperDiv = (inputName) => {
  if (inputName == "company") {
    going_off_site_data.is_company_option_div_opened = !going_off_site_data.is_company_option_div_opened;
  }
};

const removeFormInputError = (input_name) => {};

const handleYesNoBtn = (clicked_action) => {
  going_off_site_data.form_data.yes_no_action = clicked_action;
};

const updateUserSelected = (selectedCoworker) => {
  going_off_site_data.form_data.fname = selectedCoworker.fname;
  going_off_site_data.form_data.lname = selectedCoworker.lname;
  going_off_site_data.form_data.depart_comp = selectedCoworker.department_name;
};

const changeCoworker = () => {
  going_off_site_data.form_data.fname = "";
  going_off_site_data.form_data.lname = "";
  going_off_site_data.form_data.depart_comp = "";
};

const handleGoingOffSiteForm = () => {
  going_off_site_data.is_processing = true;
  scrollToTopOfPage();
  setTimeout(async () => {
    try {
      const res = await axios.post("/handle-temp-out", going_off_site_data.form_data);

      going_off_site_data.responds_code = res?.data?.responds_code;
      if (res?.data?.signed_out_id > 0) {
        going_off_site_data.signed_out_id = res?.data?.signed_out_id;
      }

      //success
      if (res?.data?.responds_code == "code0") {
        setTimeout(() => {
          router.visit("/");
        }, 1600);
      }
    } catch (err) {
      //console.log(err);
      going_off_site_data.responds_code = "code1";
    } finally {
      going_off_site_data.is_processing = false;
    }
  }, 200);
};
</script>
