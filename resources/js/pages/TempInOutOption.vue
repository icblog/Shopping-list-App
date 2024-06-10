<template>
  <Layout pageTitle="tempinout-option" backUrl="/">
    <section v-show="temp_option_data.btn_action == ''">
      <div class="container">
        <div class="row">
          <div class="col-md-10 mx-auto">
            <div class="text-center pb-5">
              <h5>Off site option</h5>
            </div>
            <div class="row">
              <div class="col text-right">
                <AppButton
                  :btnFunc="() => handleOptionBtnClicked('going_off_site')"
                  btnStyle="danger"
                  customClass="sign-in-out-btn mr-4"
                >
                  Going off site <br /><i class="fas fa-arrow-up"></i>
                </AppButton>
              </div>
              <div class="col">
                <AppButton
                  :btnFunc="() => handleOptionBtnClicked('coming_back_in')"
                  btnStyle="success"
                  customClass="sign-in-out-btn ml-4"
                >
                  Coming back in <br /><i class="fas fa-arrow-down"></i>
                </AppButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-show="temp_option_data.btn_action == 'going_off_site'">
      <GoingOffSite :company_result="companyResult" />
    </section>
  </Layout>
</template>

<script setup>
import { reactive } from "vue";
import { router } from "@inertiajs/vue3";
import AppButton from "../shared/AppButton";
import Layout from "../shared/Layout";
import GoingOffSite from "./GoingOffSite";

const props = defineProps({
  companyResult: {
    type: Object,
    default: [],
  },
});

const temp_option_data = reactive({
  btn_action: "",
});

const handleOptionBtnClicked = (btn_action) => {
  if (btn_action == "coming_back_in") {
    router.visit(`/temp-offsite-backin/${0}`);
  } else {
    temp_option_data.btn_action = btn_action;
  }
};
</script>
