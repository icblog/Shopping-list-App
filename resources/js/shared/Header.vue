<template>
  <div class="container">
    <div class="row">
      <div class="col-md-9 mx-auto header-wrapper mb-4 pb-0">
        <div>
          <Logo />
        </div>
        <div class="row">
          <!-- <div class="col text-right">
            <AppButton
              :btnFunc="goToAddItems"
              btnStyle="primary"
              customClass="pl-2 pr-2 pt-1 pb-1 mt-3"
            >
              Manage Storage
            </AppButton>
          </div> -->

          <div class="col mt-1 mb-2">
            <AppButton
              :btnFunc="goToStorage"
              btnStyle="primary"
              customClass="pl-2 pr-2 pt-1 pb-1 mr-3"
            >
              Manage Storage
            </AppButton>
            <AppButton
              :btnFunc="goToAddItems"
              btnStyle="primary"
              customClass="pl-2 pr-2 pt-1 pb-1"
            >
              {{ linkName }}
            </AppButton>
          </div>
        </div>
        <hr class="m-0" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { router } from "@inertiajs/vue3";
import Logo from "./Logo";
import AppButton from "./AppButton";
const props = defineProps({
  linkUrl: {
    type: String,
    default: "/add-items",
  },
  linkName: {
    type: String,
    default: "Add items to system",
  },
});
const goToAddItems = () => {
  router.get(props.linkUrl);
};
const goToStorage = () => {
  router.get("/storage");
};
</script>
