<template>
  <Layout pageTitle="home">
    <div class="container">
      <div class="row">
        <div class="col-md-10 mx-auto">
          <div class="row">
            <div class="col text-right">
              <AppButton
                :btnFunc="() => initiateSignInOption()"
                btnStyle="primary"
                customClass="sign-in-out-btn"
              >
                <i class="fas fa-arrow-up"></i><br />
                Sign In
              </AppButton>
            </div>
            <div class="col">
              <AppButton
                :btnFunc="() => initiateSignOut()"
                btnStyle="primary"
                customClass="sign-in-out-btn ml-4"
              >
                <i class="fas fa-arrow-down"></i><br />
                Sign Out
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
</script>
