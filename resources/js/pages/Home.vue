<template>
  <Layout pageTitle="home">
    <div class="container">
      <div class="row">
        <div class="col-md-10 mx-auto">
          <div class="row">
            <div class="col text-right">
              <AppButton
                :btnFunc="() => initiateSignInOutOption()"
                btnStyle="primary2"
                customClass="sign-in-out-btn mr-4"
              >
                I'm Signing<br />
                in/out
              </AppButton>
            </div>
            <div class="col">
              <AppButton
                :btnFunc="() => initiateTempInOut()"
                btnStyle="warn"
                customClass="sign-in-out-btn ml-4"
              >
                Temporarily<br />
                Off Site
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { router } from "@inertiajs/vue3";
import AppButton from "../shared/AppButton";
import Layout from "../shared/Layout";

const initiateSignInOutOption = () => {
  router.visit("/sign-in-out-option");
};

const initiateTempInOut = () => {
  router.visit("/temp-in-out");
};
</script>
