<template>
  <Layout pageTitle="signout" backUrl="/temp-in-out">
    <div class="container">
      <div class="row">
        <div class="col-md-10 mx-auto">
          <div class="row">
            <div class="col-md-12">
              <section v-if="processing && sign_in_data.responds_code == ''">
                <LoadingIndicator />
              </section>
              <section v-if="!processing && sign_in_data.responds_code == 'code0'">
                <div class="form-wrapper">
                  <HandleMsg
                    :showHeading="false"
                    infotype="success"
                    msg="Sign in successful thank you!"
                    customClass="form-responds-msg"
                  />
                </div>
              </section>
              <section v-if="!processing && sign_in_data.responds_code == 'code1'">
                <HandleMsg
                  infotype="error"
                  :customHeading="'Error ' + sign_in_data.responds_code"
                  :msg="returnSystemErrorMsg()"
                  customClass="form-responds-msg"
                />
              </section>
            </div>
          </div>

          <section v-if="!processing && sign_in_data.responds_code == ''">
            <div class="row">
              <div class="col-md-10 mx-auto">
                <div class="form-wrapper">
                  <h5 class="text-center mb-3">Temp Offsite backin</h5>
                  <p class="text-center small mb-3">
                    Please note, all fields marked with a * are required
                  </p>
                  <div class="form-group">
                    <label class="form-label" for="lname">Last name *</label>
                    <input
                      ref="firstInput"
                      v-model="searchvalue"
                      type="text"
                      class="form-control"
                      placeholder="Let's find you..."
                      maxlength="255"
                      autocomplete="off"
                      @keypress.enter.prevent
                    />
                  </div>
                </div>

                <div class="find-visitor-signin-result-div">
                  <section v-if="sign_in_data.is_searching">
                    <LoadingIndicator />
                  </section>
                  <section v-else>
                    <div
                      v-show="sign_in_data.temp_sign_out_res.length > 0"
                      v-for="(
                        temp_off_site, temp_off_site_index
                      ) in sign_in_data.temp_sign_out_res"
                    >
                      <div class="row" :key="temp_off_site_index">
                        <div class="col">
                          <p>{{ temp_off_site.fname }}</p>
                        </div>
                        <div class="col">
                          <p>{{ temp_off_site.lname }}</p>
                        </div>

                        <div class="col text-right">
                          <AppButton
                            customClass="btn-primary"
                            :btnFunc="() => handleSignBackInBtnClick(temp_off_site.id)"
                          >
                            Back in
                          </AppButton>
                        </div>
                      </div>
                    </div>

                    <div
                      v-show="
                        sign_in_data.is_search_complete &&
                        sign_in_data.temp_sign_out_res.length <= 0
                      "
                      class="mt-4"
                    >
                      <HandleMsg
                        infotype="error"
                        :customHeading="'Error code1'"
                        :msg="returnCanNotFindVistorErrorMsg()"
                        customClass="form-responds-msg"
                      />
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { reactive, ref, onMounted, watch } from "vue";
import { router } from "@inertiajs/vue3";
import { debounce } from "lodash";
import axios from "../api/axios";
import {
  focusOnFirstInput,
  returnSystemErrorMsg,
  toSqlDatetime,
  scrollToTopOfPage,
} from "../helper/util";
import Layout from "../shared/Layout";
import AppButton from "../shared/AppButton";
import LoadingIndicator from "../shared/LoadingIndicator.vue";
import HandleMsg from "../shared/HandleMsg";

let processing = ref(false),
  searchvalue = ref(""),
  firstInput = ref(null);

const props = defineProps({
  signed_out_id: Number,
});

const sign_in_data = reactive({
  form_data: {
    searched_word_value: "",
  },
  action_data: {
    temp_log_id: props.signed_out_id,
    current_date_time: toSqlDatetime(new Date()),
  },
  responds_code: "",
  is_search_complete: false,
  is_searching: false,
  custom_err: "",
  temp_sign_out_res: [],
  already_signed_out: props.signed_out_id > 0 ? true : false,
});

const handleTempOffsite = () => {
  processing.value = true;
  scrollToTopOfPage();
  setTimeout(async () => {
    try {
      const res = await axios.post(
        "/handle-temp-offsite-sign-in",
        sign_in_data.action_data
      );

      sign_in_data.responds_code = res.data?.responds_code;
      if (sign_in_data.responds_code == "code0") {
        setTimeout(() => {
          if (sign_in_data.already_signed_out) {
            router.visit("/temp-in-out");
          } else {
            router.visit("/");
          }
        }, 1600);
      }
    } catch (error) {
      sign_in_data.responds_code = "code1";
    } finally {
      processing.value = false;
    }
  }, 400);
};
const handleSignBackInBtnClick = (temp_log_id) => {
  sign_in_data.action_data.temp_log_id = temp_log_id;

  //Call above function
  handleTempOffsite();
};

const returnCanNotFindVistorErrorMsg = () => {
  return "Sorry we can not find you, please see a member of the security team thank you.";
};

const handleSearchForm = async (searched_word_value) => {
  if (searched_word_value != "") {
    sign_in_data.form_data.searched_word_value = searched_word_value;

    sign_in_data.is_searching = true;

    if (sign_in_data.is_search_complete) {
      sign_in_data.is_search_complete = false;
    }

    try {
      const res = await axios.post(
        "/find-temp-offsite-signed-out",
        sign_in_data.form_data
      );

      if (res?.data?.error != "") {
        sign_in_data.custom_err = res.data.error;
      } else {
        sign_in_data.temp_sign_out_res = res?.data?.temp_sign_out_res;
      }
    } catch (err) {
      sign_in_data.custom_err = returnSystemErrorMsg();
      //console.log(err);
    } finally {
      sign_in_data.is_searching = false;
      sign_in_data.is_search_complete = true;
    }
  } else {
    if (sign_in_data.temp_sign_out_res.length > 0) {
      sign_in_data.temp_sign_out_res = [];
      sign_in_data.is_search_complete = false;
    }
  } //end if searched_word_value is not empty
};

onMounted(() => {
  focusOnFirstInput(firstInput);

  if (sign_in_data.already_signed_out) {
    handleTempOffsite();
  }
});

watch(
  searchvalue,
  debounce((value) => {
    handleSearchForm(value);
  }, 700)
);
</script>
