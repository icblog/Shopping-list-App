<template>
  <div class="custom-checkbox-wrapper">
    <div class="row">
      <div class="col-1 text-right p-0 b1">
        <span
          :class="{
            'custom-checkbox': true,
            checkbox_checked: custom_checkbox_data.checkbox_checked,
          }"
          @click="toggleCheckBox"
        >
          <span
            :class="{
              'custom-checkbox-check-icon': !custom_checkbox_data.checkbox_checked,
              'custom-checkbox-check-icon-checked': custom_checkbox_data.checkbox_checked,
            }"
            ><i class="fas fa-check"></i
          ></span>
        </span>
      </div>
      <div class="col-11 p-0 b2 text-left">
        <span
          :class="{
            'custom-checkbox-text p-0': true,
            [custom_checkbox_data.checkbox_text_class]: true,
          }"
        >
          <slot />
        </span>
      </div>
    </div>
    <!-- end div row -->
    <p class="checkbox_error text-left small text-danger" v-show="checkbox_error != ''">
      {{ checkbox_error }}
    </p>
  </div>
  <!-- end div custom-checkbox-wrapper -->
</template>
<script setup>
import { reactive, watch } from "vue";

const emit = defineEmits(["updateCheckBox"]);

const props = defineProps({
  checkbox_text_class: {
    type: String,
    default: "",
  },
  checkbox_error: {
    type: String,
    default: "",
  },
  default_checked: {
    type: Boolean,
    default: false,
  },
});
const custom_checkbox_data = reactive({
  checkbox_checked: false,
});
const toggleCheckBox = () => {
  custom_checkbox_data.checkbox_checked = !custom_checkbox_data.checkbox_checked;
  //update parent componet
  emit("updateCheckBox", custom_checkbox_data.checkbox_checked);
};

watch(
  () => props.default_checked,
  (new_value, pre_value) => {
    if (new_value) {
      custom_checkbox_data.checkbox_checked = true;
    } else {
      custom_checkbox_data.checkbox_checked = false;
    }
  }
);
</script>
