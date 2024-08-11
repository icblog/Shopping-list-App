<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 header-wrapper mb-5">
        <div class="text-center">
          <Logo />
          <hr />
        </div>
        <div class="row">
          <div class="col">
            <h5 class="date-time text-center">
              Date: {{ currentTimeStampData.currentDate }}
            </h5>
          </div>
          <div class="col">
            <h5 class="date-time text-center">
              Time: {{ currentTimeStampData.currentTime }}
            </h5>
          </div>
          <div v-if="backUrl != ''" class="col iv-go-back-btn-wrapper">
            <AppLink :linkUrl="backUrl" className="iv-go-back-btn primary-btn">
              <i class="fas fa-arrow-left"></i>
              Go back
            </AppLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import AppLink from "./AppLink.vue";
import Logo from "./Logo.vue";

defineProps({
  backUrl: {
    type: String,
    default: "",
  },
});

const currentTimeStampData = reactive({
  currentDate: "",
  currentTime: "",
});

const currentDateTime = () => {
  const current = new Date();
  currentTimeStampData.currentDate = current.toDateString();
  currentTimeStampData.currentTime = current.toLocaleTimeString("en-GB").slice(0, 5);
};

onMounted(() => {
  setTimeout(() => {
    currentDateTime();
  }, 50);
  setInterval(() => {
    currentDateTime();
  }, 1000);
});
</script>
