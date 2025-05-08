<template>
    <div class="form-wrapper">
      <section v-if="list_name_data.is_processing"><LoadingIndicator /></section>
      <section v-if="!list_name_data.is_processing">
        <form @submit.prevent="handleFormSubmit">
          <label class="form-label"
            >
            <span v-if="showFormErr()" class="text-danger bolded small">{{
              list_name_data.err_msg
            }}</span>
            <span
              v-else-if="list_name_data.success_msg != ''"
              class="text-success bolded"
              >{{ list_name_data.success_msg }}</span
            >
            <span v-else>Shopping list name*</span>
          </label>
          <div v-show="list_name_data.success_msg == ''" class="input-group mb-3">
            <input
              type="text"
              v-model="list_name_data.list_name"
              class="form-control"
              @focus="hideFormErr"
            />
            <div class="input-group-append">
              <AppButton btnType="submit" btnStyle="primary" customClass="p-0 m-0 pl-1 pr-1 bolded">Save</AppButton>
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
  
  const list_name_data = reactive({
    list_name: "",
    is_processing: false,
    err_msg: "",
    success_msg: "",
  });
  const showFormErr = () => {
    if (list_name_data.err_msg != "") {
      return true;
    } else {
      return false;
    }
  };
  
  const hideFormErr = () => {
    list_name_data.err_msg = "";
  };
  
  const handleFormSubmit = () => {
    let abort = false;
    if (list_name_data.list_name == "") {
      abort = true;
      list_name_data.err_msg = "*Please enter shopping list name before saving thanks";
    }
    if (!abort) {
      //Post the form
      list_name_data.is_processing = true;
      setTimeout(async () => {
        try {
          const res = await axios.post("/add-list-name", {
            list_name: list_name_data.list_name,
          });
  
          if (res?.data?.error != "") {
            list_name_data.err_msg = res?.data?.error;
          } else {
            list_name_data.success_msg = "Shopping list name added successfully";
            list_name_data.list_name = "";
            setTimeout(() => {
              router.get("/");
            }, 500);
          }
        } catch (err) {
          list_name_data.err_msg = returnSystemErrorMsg();
        } finally {
          list_name_data.is_processing = false;
        }
      }, 1000);
    }
  };
  </script>