<template>
  <Layout pageTitle="home" backUrl="/">
    <div class="container">
      <div class="row">
        <div class="col-md-10 mx-auto">
          <div class="row">
            <div class="col text-right">
              <AppButton
                :btnFunc="() => initiateCoWokerSignIn()"
                btnStyle="primary"
                customClass="sign-in-out-btn"
              >
                I'm XYZ co-worker
              </AppButton>
            </div>
            <div class="col">
              <AppButton
                :btnFunc="() => initiateExtVisitorSiginIn()"
                btnStyle="primary"
                customClass="sign-in-out-btn ml-4"
              >
                External visitor
              </AppButton>
            </div>

            <!-- <div class="col text-center">
              <AppButton
                :btnFunc="() => initiateSupportOffice()"
                btnStyle="primary"
                customClass="sign-in-out-btn"
              >
                Service Office
              </AppButton>
            </div> -->
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

const initiateExtVisitorSiginIn = () => {
  router.visit("/external-visitor-signin");
};

const initiateCoWokerSignIn = () => {
  router.visit("/co-worker-signin");
};

// const initiateSupportOffice = () => {
//   router.visit("/service-office-signin");
// };
</script>
