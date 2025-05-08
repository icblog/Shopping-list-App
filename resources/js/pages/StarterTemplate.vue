<template>
  <Layout pageTitle="starter">
    <div class="container-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-9 mx-auto"></div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { reactive } from "vue";
import { router } from "@inertiajs/vue3";
import Layout from "../shared/Layout";
import HandleMsg from "../shared/HandleMsg";
import AppButton from "../shared/AppButton";
import AppLink from "../shared/AppLink";
import LoadingIndicator from "../shared/LoadingIndicator";
</script>
