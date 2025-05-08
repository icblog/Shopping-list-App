<template>
  <div class="form-wrapper">
    <section v-if="item_storage_data.is_processing"><LoadingIndicator /></section>
    <section v-if="!item_storage_data.is_processing">
      <form @submit.prevent="handleFormSubmit">
        <label class="form-label">
          <span v-if="showFormErr()" class="text-danger bolded small">{{
            item_storage_data.err_msg
          }}</span>
          <span
            v-else-if="item_storage_data.success_msg != ''"
            class="text-success bolded"
            >{{ item_storage_data.success_msg }}</span
          >
          <span v-else>Storage name*</span>
        </label>
        <div v-show="item_storage_data.success_msg == ''" class="input-group mb-3">
          <input
            type="text"
            v-model="item_storage_data.list_name"
            class="form-control"
            @focus="hideFormErr"
          />
          <div class="input-group-append">
            <AppButton
              btnType="submit"
              btnStyle="primary"
              customClass="p-0 m-0 pl-1 pr-1 bolded"
              >Save</AppButton
            >
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { router } from "@inertiajs/vue3";
import AppButton from "../shared/AppButton";
import LoadingIndicator from "../shared/LoadingIndicator";
import axios from "../api/axios";
import { returnSystemErrorMsg } from "../helper/util";

const item_storage_data = reactive({
  list_name: "",
  is_processing: false,
  err_msg: "",
  success_msg: "",
});
const showFormErr = () => {
  if (item_storage_data.err_msg != "") {
    return true;
  } else {
    return false;
  }
};

const hideFormErr = () => {
  item_storage_data.err_msg = "";
};

const handleFormSubmit = () => {
  let abort = false;
  if (item_storage_data.list_name == "") {
    abort = true;
    item_storage_data.err_msg = "*Please enter shopping list name before saving thanks";
  }
  if (!abort) {
    //Post the form
    item_storage_data.is_processing = true;
    setTimeout(async () => {
      try {
        const res = await axios.post("/add-storage", {
          list_name: item_storage_data.list_name,
        });

        if (res?.data?.error != "") {
          item_storage_data.err_msg = res?.data?.error;
        } else {
          item_storage_data.success_msg = "Storage added successfully";
          item_storage_data.list_name = "";
          setTimeout(() => {
            router.get("/storage");
          }, 500);
        }
      } catch (err) {
        item_storage_data.err_msg = returnSystemErrorMsg();
      } finally {
        item_storage_data.is_processing = false;
      }
    }, 1000);
  }
};
</script>
