<template>
  <Layout pageTitle="view items">
    <div class="container">
      <div class="row">
        <div class="col-md-9 mx-auto">
          <section v-if="reactiveData.main_err != ''">
            <HandleMsg
              infotype="error"
              customClass="bg-white text-center"
              :msg="reactiveData.main_err"
            />
          </section>
          <section v-else>
            <div class="row">
              <div class="col">
                <h6>View system items</h6>
              </div>
              <div class="col text-right">
                <span class="small bolded">{{ returnTotalRecordsMsg() }}</span>
              </div>
            </div>

            <hr class="m-0 mb-2" />
            <div class="row">
              <div class="col-md-6 pt-1 sm-screen-mb">
                <input
                  v-model="search_word"
                  type="text"
                  class="form-control"
                  placeholder="Search  item name..."
                  maxlength="255"
                  autocomplete="off"
                  @keypress.enter.prevent
                />
                <!-- col-md-6 -->
              </div>

              <div class="col-md-6 pt-1">
                <OptionElementInput
                  :defaultOptionSelected="reactiveData.option_selected"
                  labelName="Sort:"
                  :allowSearch="false"
                  :labelPrepend="true"
                  arrType="obj"
                  :disabledInput="true"
                  :resultObj="option_select_arr"
                  @updateSelectedOptionInput="handleSortSelectOption"
                />

                <!-- col-md-6 -->
              </div>
              <!-- end row -->
            </div>
            <section v-if="reactiveData.data_length > 0">
              <div
                v-if="reactiveData.is_searching || reactiveData.is_sorting"
                class="pt-3"
              >
                <LoadingIndicator />
              </div>
              <!-- Show result content -->
              <div v-else class="mt-4">
                <div v-for="(item, index) in reactiveData.api_res" :key="index">
                  <div
                    :class="{
                      'view-items-data-detail-wrapper': true,
                      'view-items-data-detail-wrapper-active': returnIfInputIsActive(
                        item.id
                      ),
                    }"
                  >
                    <div class="row align-items-center mb-1">
                      <div class="col">
                        <img :src="item.img_url" class="item-img" alt="Item image" />
                      </div>
                      <div class="col">{{ item.name }}</div>
                      <div class="col">{{ item.storage_name }}</div>

                      <div class="col text-right action-btn-wrapper">
                        <span v-if="returnIfInputIsActive(item.id)">
                          <!-- Okay button -->
                          <AppButton
                            customClass="mr-2"
                            btnStyle="success"
                            :btnFunc="() => handleDataUpdate(index)"
                          >
                            <span v-if="returnIfDataIsEditing(item.id)"
                              >Processing....</span
                            >
                            <span v-else-if="returnIfDataEditsuccess(item.id)">{{
                              reactiveData.edit_delete_success
                            }}</span>
                            <span v-else><i class="fas fa-check"></i></span>
                          </AppButton>
                          <!-- Cancel button -->
                          <AppButton
                            btnStyle="warn"
                            :hideBtn="hideCancelBtn(item.id)"
                            :btnFunc="handleCancelBtn"
                          >
                            <span><i class="fas fa-times"></i></span>
                          </AppButton>
                        </span>
                        <span v-else>
                          <!-- Edit button -->
                          <AppButton
                            btnStyle="primary2"
                            customClass="mr-2"
                            :hideBtn="
                              returnIfDataIsDeleting(item.id) ||
                              returnIfDataIsDeleteSuccess(item.id)
                            "
                            :btnFunc="() => handleEditBtn(index, item)"
                          >
                            <span><i class="fas fa-edit"></i></span>
                          </AppButton>
                          <!-- Delete button -->
                          <AppButton
                            :btnStyle="
                              returnIfDataIsDeleting(item.id)
                                ? 'secondary'
                                : returnIfDataIsDeleteSuccess(item.id)
                                ? 'success'
                                : 'danger'
                            "
                            :btnFunc="() => handleDeleteDataYes(item.id, item.name)"
                          >
                            <span v-if="returnIfDataIsDeleting(item.id)"
                              >Processing...</span
                            >

                            <span v-else-if="returnIfDataIsDeleteSuccess(item.id)">{{
                              reactiveData.edit_delete_success
                            }}</span>
                            <span v-else><i class="fas fa-trash"></i></span>
                          </AppButton>
                        </span>
                        <!-- end action-btn-wrapper div-->
                      </div>
                      <!-- end row -->
                    </div>
                    <div v-show="returnIfInputIsActive(item.id)">
                      <div class="row">
                        <div class="col-md-12 mb-1">
                          <OptionElementInput
                            :defaultOptionSelected="item.storage_name"
                            labelName="Select storage*"
                            :allowSearch="false"
                            :labelPrepend="false"
                            whatToget="id"
                            arrType="obj"
                            :disabledInput="true"
                            :resultObj="storage_data"
                            @updateSelectedOptionInput="handleSelectedStorage"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <input
                            ref="dataInput"
                            v-model="reactiveData.data_new_name_value"
                            type="text"
                            @focus="hideCustomError"
                            class="form-control ml-1"
                          />
                        </div>
                        <div class="col">
                          <input
                            v-model="reactiveData.data_new_img_url_value"
                            type="text"
                            @focus="hideCustomError"
                            class="form-control ml-1"
                          />
                        </div>
                        <!-- end row -->
                      </div>
                    </div>

                    <div
                      class="small text-danger text-center"
                      v-if="showErrMsgIfNotEmpty(item.id)"
                    >
                      {{ reactiveData.edit_delete_err }}
                    </div>
                    <!-- input group start -->
                    <!-- end detail wrapper -->
                  </div>

                  <!-- V-for div end -->
                </div>
              </div>
              <div v-show="item_res?.next_page_url != null" class="pt-3">
                <div class="text-center">
                  <AppButton
                    customClass="primary-btn"
                    :btnFunc="handleLoadMoreResult"
                    :fullBtn="true"
                  >
                    <span v-if="reactiveData.is_paginating">
                      <LoadingIndicator loaderSize="small" :showBelowText="false" />
                    </span>
                    <span v-else> Load more </span>
                  </AppButton>
                </div>
              </div>
              <!-- Result content -->
            </section>
            <section v-else>
              <p class="text-center tp-5 mt-5">Sorry no records found</p>
            </section>
          </section>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { reactive, ref, watch, nextTick } from "vue";
import { router } from "@inertiajs/vue3";
import Layout from "../shared/Layout";
import LoadingIndicator from "../shared/LoadingIndicator";
import HandleMsg from "../shared/HandleMsg";
import AppButton from "../shared/AppButton";
import OptionElementInput from "../shared/OptionElementInput";

import {
  returnSortOptionArray,
  scrollToTopOrBottomOfPage,
  removeItemFromArrOrObjByValue,
  returnSystemErrorMsg,
} from "../helper/util";
import { debounce } from "lodash";
import axios from "../api/axios";
const option_select_arr = returnSortOptionArray();
const search_word = ref("");
let dataInput = ref(null);

const props = defineProps({
  item_res: {
    type: Object,
    default: {},
  },
  storage_data: {
    type: Object,
    default: {},
  },
});

const reactiveData = reactive({
  api_res: props.item_res.data == undefined ? [] : props.item_res.data,
  data_length: props.item_res.data.length == undefined ? 0 : props.item_res.data.length,
  current_records_on_page:
    props.item_res.data.length == undefined ? 0 : props.item_res.data.length,
  total_records: props.item_res.total == undefined ? 0 : props.item_res.total,
  main_err: props.item_res.data.error == undefined ? "" : props.item_res.data.error,

  option_selected: "Latest",
  is_searching: false,
  is_searching_complete: false,
  is_paginating: false,
  is_sorting: false,
  first_page_load: true,
  edit_delete_err: "",
  edit_delete_success: "",

  //EDIT
  data_storage_name: "",
  data_new_storage_id: "",
  data_old_storage_id: "",
  data_new_name_value: "",
  data_old_name_value: "",
  data_new_img_url_value: "",
  data_old_img_url_value: "",
  data_being_edited_id: 0,
  show_ok_cancel_btn: false,
  is_editing: false,

  //Delete
  is_deleting: false,
  is_deleted: false,
});

const handleSelectedStorage = (selected_storage) => {
  //Remove any error
  hideCustomError();
  //selected_storage is an object containing the selected storage id & name
  reactiveData.data_new_storage_id = selected_storage.id;
  reactiveData.data_storage_name = selected_storage.name;
};

const handleEditBtn = (index, { id, name, img_url, storage_id, storage_name }) => {
  // Grouping updates to reactive data
  reactiveData.show_ok_cancel_btn = true;
  reactiveData.data_being_edited_id = id;
  reactiveData.data_storage_name = storage_name;
  reactiveData.data_new_storage_id = storage_id;
  reactiveData.data_old_storage_id = storage_id;
  reactiveData.data_new_name_value = name;
  reactiveData.data_old_name_value = name;
  reactiveData.data_new_img_url_value = img_url;
  reactiveData.data_old_img_url_value = img_url;

  // Using Vue's nextTick to ensure DOM updates before focusing
  nextTick(() => {
    dataInput.value[index].focus();
  });
};

const handleCancelBtn = () => {
  reactiveData.show_ok_cancel_btn = false;
  reactiveData.is_deleted = false;
  reactiveData.data_being_edited_id = 0;
  reactiveData.data_storage_name = "";
  reactiveData.data_new_storage_id = "";
  reactiveData.data_old_storage_id = "";
  reactiveData.data_new_name_value = "";
  reactiveData.data_old_name_value = "";
  reactiveData.data_new_img_url_value = "";
  reactiveData.data_old_img_url_value = "";
  reactiveData.main_err = "";
  reactiveData.edit_delete_err = "";
  reactiveData.edit_delete_success = "";
};
const returnIfDataIsDeleting = (data_id) => {
  let deleting = false;
  if (reactiveData.is_deleting && reactiveData.data_being_edited_id == data_id) {
    deleting = true;
  }
  return deleting;
};

const returnIfDataIsDeleteSuccess = (data_id) => {
  let success = false;
  if (
    reactiveData.is_deleted &&
    reactiveData.edit_delete_success != "" &&
    reactiveData.data_being_edited_id == data_id
  ) {
    success = true;
  }
  return success;
};

const returnIfDataIsEditing = (data_id) => {
  let editing = false;
  if (reactiveData.is_editing && reactiveData.data_being_edited_id == data_id) {
    editing = true;
  }
  return editing;
};

const returnIfDataEditsuccess = (data_id) => {
  let success = false;
  if (
    reactiveData.edit_delete_success != "" &&
    !reactiveData.is_editing &&
    reactiveData.data_being_edited_id == data_id
  ) {
    success = true;
  }
  return success;
};

const showErrMsgIfNotEmpty = (data_id) => {
  let is_empty_msg = false;
  if (
    reactiveData.edit_delete_err != "" &&
    reactiveData.data_being_edited_id == data_id
  ) {
    is_empty_msg = true;
  }
  return is_empty_msg;
};

const returnIfInputIsActive = (data_id) => {
  let is_active = false;
  if (reactiveData.show_ok_cancel_btn && reactiveData.data_being_edited_id == data_id) {
    is_active = true;
  }
  return is_active;
};
const hideCancelBtn = (data_id) => {
  let cancel = false;
  if (
    reactiveData.edit_delete_success != "" &&
    reactiveData.data_being_edited_id == data_id
  ) {
    cancel = true;
  }
  return cancel;
};

const hideCustomError = () => {
  if (reactiveData.main_err != "") {
    reactiveData.main_err = "";
  }

  if (reactiveData.edit_delete_err != "") {
    reactiveData.edit_delete_err = "";
  }
};

const assignDataFromAxiosApiCall = (is_paginate_result) => {
  reactiveData.data_length = props.item_res?.data.length;
  reactiveData.total_records = props.item_res?.total;
  //if paginate result, add else replace.
  if (is_paginate_result) {
    reactiveData.api_res = [...reactiveData.api_res, ...props.item_res?.data];
    reactiveData.current_records_on_page =
      reactiveData.current_records_on_page + props.item_res?.data.length;
  } else {
    reactiveData.api_res = props.item_res?.data;
    reactiveData.current_records_on_page = props.item_res?.data.length;
  }
};

const returnDataToBePost = () => {
  return {
    selected_sort_option: reactiveData.option_selected,
    item_name: search_word.value,
    //first_page_load: reactiveData.first_page_load,
  };
};

const handleLoadMoreResult = async () => {
  if (!reactiveData.is_searching) {
    if (props.item_res?.next_page_url === null) {
      return;
    }
    // reactiveData.first_page_load = false;

    router.post(props.item_res?.next_page_url, returnDataToBePost(), {
      preserveState: true,
      preserveScroll: true,
      only: ["item_res"],
      onStart: () => {
        reactiveData.is_paginating = true;
      },
      onFinish: () => {
        reactiveData.is_paginating = false;
      },

      onSuccess: () => {
        scrollToTopOrBottomOfPage("bottom");
        window.history.replaceState({}, "", props.item_res?.path);
        assignDataFromAxiosApiCall(true);
      },
    });
  } // end if !reactiveData.is_searching
};

const returnTotalRecordsMsg = () => {
  let record_word = "record";

  if (reactiveData.total_records > 1) {
    record_word = "records";
  }
  return (
    reactiveData.current_records_on_page +
    " of " +
    reactiveData.total_records +
    " total " +
    record_word
  );
};

const makeApiCall = async () => {
  router.post("/view-items", returnDataToBePost(), {
    onFinish: () => {
      if (reactiveData.is_searching) {
        reactiveData.is_searching = false;
      }
      if (reactiveData.is_sorting) {
        reactiveData.is_sorting = false;
      }
    },
    onSuccess: () => {
      assignDataFromAxiosApiCall(false);
      scrollToTopOrBottomOfPage("bottom");
      // if (props.respondsMsg == "searching_or_sorting") {
      //   scrollToTopOrBottomOfPage("bottom");
      //   //console.log(props.respondsMsg);
      // }
    },
  });
};

const handleSearchForm = () => {
  reactiveData.is_searching = true;
  // reactiveData.first_page_load = false;
  reactiveData.current_records_on_page = 0;
  makeApiCall();
};

const handleSortSelectOption = (selected_sort_option) => {
  reactiveData.is_sorting = true;
  //reactiveData.first_page_load = false;
  reactiveData.option_selected = selected_sort_option;
  reactiveData.current_records_on_page = 0;
  makeApiCall();
};

//HANDLE UPDATE OK BTN

const handleDataUpdate = (index) => {
  let abort = false;
  if (reactiveData.data_new_name_value == "") {
    abort = true;
    reactiveData.edit_delete_err = "*Please enter a item name";
  }

  if (
    reactiveData.data_new_name_value == reactiveData.data_old_name_value &&
    reactiveData.data_new_img_url_value == reactiveData.data_old_img_url_value &&
    reactiveData.data_new_storage_id == reactiveData.data_old_storage_id
  ) {
    abort = true;
    reactiveData.edit_delete_err = "*Please make changes before saving thanks";
  }

  if (!abort) {
    //save data
    reactiveData.is_editing = true;
    setTimeout(async () => {
      try {
        const res = await axios.post("/update-item", {
          data_id: reactiveData.data_being_edited_id,
          data_new_name_value: reactiveData.data_new_name_value,
          data_old_name_value: reactiveData.data_old_name_value,
          data_new_img_url: reactiveData.data_new_img_url_value,
          data_old_img_url: reactiveData.data_old_img_url_value,
          data_new_storage_id: reactiveData.data_new_storage_id,
          data_old_storage_id: reactiveData.data_old_storage_id,
        });
        if (res.data?.error != "") {
          reactiveData.edit_delete_err = res.data?.error;
        } else {
          reactiveData.edit_delete_success = "Success";
          setTimeout(() => {
            reactiveData.api_res[index].name = reactiveData.data_new_name_value;
            reactiveData.api_res[index].img_url = reactiveData.data_new_img_url_value;
            reactiveData.api_res[index].storage_id = reactiveData.data_new_storage_id;
            reactiveData.api_res[index].storage_name = reactiveData.data_storage_name;
            reactiveData.edit_delete_success = "";
            reactiveData.data_being_edited_id = 0;
            reactiveData.show_ok_cancel_btn = false;
          }, 300);
        }
      } catch (err) {
        reactiveData.edit_delete_err = returnSystemErrorMsg();
      } finally {
        reactiveData.is_editing = false;
      }
    }, 500);
  }
};

//HANDLE DELETE BTN
const handleDeleteDataYes = (data_id, data_name) => {
  reactiveData.edit_delete_err = "";

  if (
    window.confirm(
      `Delete item ${data_name}? please note this can not be undone, also all keys and key auth related to item ${data_name} will be deleted.`
    )
  ) {
    reactiveData.is_deleted = false;
    reactiveData.is_deleting = true;
    reactiveData.data_being_edited_id = data_id;

    setTimeout(async () => {
      try {
        const res = await axios.post("/delete-item", {
          data_id: data_id,
        });
        //res.data.outcome can be boolean or error message
        if (res?.data?.error == "") {
          //set success msg
          reactiveData.edit_delete_success = "Success";
          reactiveData.is_deleted = true;
          setTimeout(() => {
            reactiveData.api_res = removeItemFromArrOrObjByValue(
              data_id,
              reactiveData.api_res,
              "id",
              "obj"
            );
            reactiveData.total_records = reactiveData.total_records - 1;
            reactiveData.current_records_on_page =
              reactiveData.current_records_on_page - 1;
          }, 300);
        } else {
          //Set error meg
          reactiveData.edit_delete_err = res?.data?.error; //console.log("PHONE ERROR =>", res.data.outcome);
        }
      } catch (err) {
        reactiveData.edit_delete_err = returnSystemErrorMsg();
        //console.log("ERR =>", err);
      } finally {
        reactiveData.is_deleting = false;
      }
    }, 500);
  } // end window confirm
};

//Watch the search input value for changes.
watch(
  search_word,
  debounce(() => {
    handleSearchForm();
  }, 400)
);
</script>
