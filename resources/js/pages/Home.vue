<template>
  <Layout pageTitle="home">
    <div class="container">
      <div class="row">
        <div class="col-md-10 mx-auto">
          <div class="row">
            <div class="col">
              <AppButton
                :btnFunc="() => initiateSignInOption()"
                btnStyle="success"
                customClass="sign-in-out-btn"
              >
                Sign In <i class="fas fa-arrow-down"></i>
              </AppButton>
            </div>
            <div class="col">
              <AppButton
                :btnFunc="() => initiateSignOut()"
                btnStyle="danger"
                customClass="sign-in-out-btn ml-4"
              >
                Sign Out <i class="fas fa-arrow-up"></i>
              </AppButton>
            </div>
            <div class="col">
              <AppButton
                :btnFunc="() => initiateTempInOut()"
                btnStyle="warn"
                customClass="sign-in-out-btn ml-4"
              >
                Temp Off Site
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

const initiateSignInOption = () => {
  router.visit("/sign-in-option");
};
const initiateSignOut = () => {
  router.visit("/signout");
};
const initiateTempInOut = () => {
  router.visit("/temp-in-out");
};
</script>
