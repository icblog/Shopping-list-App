<template>
  <Layout pageTitle="lists">
    <div class="container-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-9 mx-auto">
            <p class="small">
              Search for an item and add it to
              <span class="bolded">{{ list_res.name }}</span
              >. If the item is not found, click the "Add item to system" button to add it
              to the system. Then, return to this page, search and add to your
              <span class="bolded">{{ list_res.name }}</span
              >.
            </p>
            <!-- List item search form -->
            <ListItemSearchForm :list_id="list_res.id" :list_name="list_res.name" />

            <hr class="m-0" />

            <div class="row">
              <div class="col">
                <p class="m-0 small bolded">{{ list_res.name }}</p>
              </div>
              <div class="col text-right">
                <span class="small bolded">{{ returnTotalRecordsMsg() }}</span>
              </div>
            </div>
            <hr class="m-0 mb-2" />

            <section v-if="reactiveListData.data_length > 0">
              <div
                v-if="reactiveListData.is_searching || reactiveListData.is_sorting"
                class="pt-3"
              >
                <LoadingIndicator />
              </div>

              <div v-else class="mt-4">
                <!-- Remaining items start -->

                <p>
                  Remaining
                  {{ pendingCount > 1 ? "items" : "item" }}
                  <span class="text-danger bolded">({{ pendingCount }})</span>
                </p>
                <p v-show="pendingCount > 0" class="small bolded">
                  Click on the item image or name to move it into your trolley items below
                </p>
                <div
                  v-for="(items, storageName) in filteredPendingItems"
                  :key="storageName"
                >
                  <h5 class="text-muted bolded mb-3 mt-5 grouped-storage-name">
                    {{ storageName }}
                  </h5>

                  <div v-for="(item, index) in items" :key="`${storageName}-${item.id}`">
                    <div
                      v-show="item.pending_trolley == 0"
                      :class="{
                        'mb-3 s-list-detail-wrapper': true,
                      }"
                    >
                      <div class="row align-items-center">
                        <div class="col">
                          <img
                            :src="item.img_url"
                            class="s-list-item-img"
                            alt="Item image"
                            :onclick="() => moveItem(item.id, 'move_to_trolley')"
                          />
                        </div>
                        <div class="col">
                          <span
                            class="item-name bolded"
                            :onclick="() => moveItem(item.id, 'move_to_trolley')"
                            >{{
                              returnIfItemIsBeingUpdated(item.id)
                                ? "Please wait.."
                                : item.name
                            }}</span
                          >
                        </div>
                        <div class="col">
                          <span
                            v-show="!returnIfItemIsBeingUpdated(item.id)"
                            @click="() => handleEditItemQty(storageName, index)"
                            >Qty:
                          </span>
                          <span
                            class="pl-2 bolded"
                            @click="() => handleEditItemQty(storageName, index)"
                            >{{
                              returnIfItemIsBeingUpdated(item.id) ? "" : item.qty
                            }}</span
                          >
                        </div>
                        <div class="col text-right action-btn-wrapper">
                          <!-- Delete button -->
                          <span class="pr-2">
                            <AppButton
                              :btnStyle="
                                returnIfDataIsDeleting(item.id)
                                  ? 'secondary'
                                  : returnIfDataIsDeleteSuccess(item.id)
                                  ? 'success'
                                  : 'danger'
                              "
                              :btnFunc="
                                () =>
                                  handleDeleteDataYes(
                                    item.id,
                                    item.name,
                                    storageName,
                                    index
                                  )
                              "
                            >
                              <span v-if="returnIfDataIsDeleting(item.id)"
                                >Processing...</span
                              >

                              <span v-else-if="returnIfDataIsDeleteSuccess(item.id)">{{
                                reactiveListData.edit_delete_success
                              }}</span>
                              <span v-else><i class="fas fa-trash"></i></span>
                            </AppButton>
                          </span>
                        </div>
                        <!-- end row -->
                      </div>
                    </div>
                    <!-- end forEach items-->
                  </div>
                  <!-- end forEach Storage name-->
                </div>

                <hr />
                <!-- Pending items end -->
                <!-- Trolley items start -->

                <div class="row align-items-center">
                  <div class="col">
                    <p>
                      Trolley
                      {{ trolleyCount > 1 ? "items" : "item" }}
                      <span class="text-success bolded">({{ trolleyCount }})</span>
                    </p>
                  </div>
                  <div class="col text-right">
                    <span v-show="pendingCount == 0" class="pr-2">
                      <AppButton btnStyle="success" :btnFunc="handleListReset">
                        <span>Reset</span>
                      </AppButton>
                    </span>
                  </div>
                </div>
                <p v-show="trolleyCount > 0" class="small bolded">
                  Click on the item image or name to move it into pending items above
                </p>

                <div
                  v-for="(items, storageName) in filteredTrolleyItems"
                  :key="storageName"
                >
                  <h5 class="text-muted bolded mb-3 mt-5 grouped-storage-name">
                    {{ storageName }}
                  </h5>

                  <div v-for="(item, index) in items" :key="`${storageName}-${item.id}`">
                    <!-- your existing item layout here -->
                    <div
                      v-show="item.pending_trolley == 1"
                      :class="{
                        'mb-3 s-list-detail-wrapper': true,
                        's-list-detail-wrapper-active': item.pending_trolley == 1,
                      }"
                    >
                      <div class="row align-items-center">
                        <div class="col">
                          <img
                            :src="item.img_url"
                            class="s-list-item-img"
                            alt="Item image"
                            :onclick="() => moveItem(item.id, 'move_to_pending')"
                          />
                        </div>
                        <div class="col">
                          <span
                            class="item-name"
                            :onclick="() => moveItem(item.id, 'move_to_pending')"
                            >{{
                              returnIfItemIsBeingUpdated(item.id)
                                ? "Please wait.."
                                : item.name
                            }}</span
                          >
                        </div>
                        <div class="col">
                          <span v-show="!returnIfItemIsBeingUpdated(item.id)">Qty: </span>
                          <span class="pl-2">{{
                            returnIfItemIsBeingUpdated(item.id) ? "" : item.qty
                          }}</span>
                        </div>
                        <div class="col text-right action-btn-wrapper">
                          <span class="text-success pr-2"
                            ><i class="fas fa-check"></i
                          ></span>
                        </div>
                        <!-- end row -->
                      </div>
                    </div>
                    <!-- End foreach items -->
                  </div>
                  <!-- End foreach storage names -->
                </div>

                <!-- Trolley item end -->
              </div>
              <div v-show="list_res?.list.next_page_url != null" class="pt-3">
                <div class="text-center">
                  <AppButton
                    customClass="primary-btn"
                    :btnFunc="handleLoadMoreResult"
                    :fullBtn="true"
                  >
                    <span v-if="reactiveListData.is_paginating">
                      <LoadingIndicator loaderSize="small" :showBelowText="false" />
                    </span>
                    <span v-else> Load more </span>
                  </AppButton>
                </div>
              </div>
            </section>
            <section v-else>
              <p class="text-center tp-5 mt-5">
                Sorry no item found in <span class="bolded">{{ list_res.name }}</span
                >, use the form above to start adding items
              </p>
            </section>
            <!-- end col-md-8 mx-auto   -->
          </div>
          <!-- end row -->
        </div>
        <!-- end container -->
      </div>
    </div>
    <section v-if="reactiveListData.show_modal">
      <Modal :showModal="reactiveListData.show_modal" :showCloseBtn="false">
        <template v-slot:c-modal-header>
          <div class="row">
            <div class="col">Edit Item quantity</div>
            <div class="col text-right">
              <AppButton :btnFunc="closeEditQtyModal" btnStyle="secondary">X</AppButton>
            </div>
          </div>
        </template>
        <template v-slot:c-modal-content>
          <EditItemQtyForm
            :grouped_result="reactiveListData.api_res"
            :edited_item_storage_name="reactiveListData.item_being_edited_storage_name"
            :edited_item_index="reactiveListData.item_being_edited_index"
            @updateItemQty="updateItemQty"
          />
        </template>
      </Modal>
    </section>
  </Layout>
</template>

<script setup>
import { reactive, computed, ref, watch, toRaw } from "vue";
import { router } from "@inertiajs/vue3";
import Layout from "../shared/Layout";
import ListItemSearchForm from "./ListItemSearchForm";
import AppButton from "../shared/AppButton";
import LoadingIndicator from "../shared/LoadingIndicator";
import Modal from "../shared/Modal";
import { scrollToTopOrBottomOfPage, returnSystemErrorMsg } from "../helper/util";
import { debounce } from "lodash";
import axios from "../api/axios";
import EditItemQtyForm from "./EditItemQtyForm";
const search_word = ref("");
const props = defineProps({
  list_res: {
    type: Object,
    default: {},
  },
});

const returnGroupedData = (data) => {
  return toRaw(data);
};

// Function to get the count of items in each group
function returnGroupedDataLength(data) {
  // Unwrap the Proxy object
  const grouped = toRaw(data);

  // Initialize total count
  let totalCount = 0;

  // Loop through each group and add the count of items
  Object.keys(grouped).forEach((groupName) => {
    const groupItems = grouped[groupName]; // Get the array of items for each group
    totalCount += groupItems.length; // Add the count of items in this group to the total
  });

  // Return the total item count
  return totalCount;
}
const dataLength = returnGroupedDataLength(props.list_res.list.data);
const dataResult = returnGroupedData(props.list_res.list.data);
const reactiveListData = reactive({
  api_res: props.list_res.list.total <= 0 ? [] : dataResult,
  data_length: props.list_res.list.total <= 0 ? 0 : dataLength,
  current_records_on_page: props.list_res.list.total <= 0 ? 0 : dataLength,
  total_records: props.list_res.list.total <= 0 ? 0 : props.list_res.list.total,
  main_err:
    props.list_res.list.data.error == undefined ? "" : props.list_res.list.data.error,

  option_selected: "Latest",
  is_searching: false,
  is_searching_complete: false,
  is_paginating: false,
  is_sorting: false,
  first_page_load: true,
  edit_delete_err: "",
  edit_delete_success: "",
  //Delete
  is_deleting: false,
  is_deleted: false,
  //Edit Qty
  show_modal: false,
  item_being_edited_storage_name: "",
  item_being_edited_index: 0,
});

const closeEditQtyModal = () => {
  reactiveListData.item_being_edited_storage_name = "";
  reactiveListData.item_being_edited_index = 0;
  reactiveListData.show_modal = false;
};

const handleEditItemQty = (storage_name, item_index) => {
  reactiveListData.item_being_edited_storage_name = storage_name;
  reactiveListData.item_being_edited_index = item_index;
  reactiveListData.show_modal = true;
  // console.log(`StorageName: ${storage_name} Index: ${item_index}`);
};

const updateItemQty = (new_qty) => {
  const updatedList = [
    ...reactiveListData.api_res[reactiveListData.item_being_edited_storage_name],
  ];

  updatedList[reactiveListData.item_being_edited_index] = {
    ...updatedList[reactiveListData.item_being_edited_index],
    qty: new_qty,
  };

  reactiveListData.api_res = {
    ...reactiveListData.api_res,
    [reactiveListData.item_being_edited_storage_name]: updatedList,
  };
  closeEditQtyModal();
};

const handleListReset = async () => {
  try {
    const res = await axios.post("/s-list-reset", {
      list_name_id: props.list_res.id,
    });
    //res.data.outcome can be boolean or error message
    if (res?.data?.error == "") {
      router.get(`/s-list/${props.list_res.name}/${props.list_res.id}`);
    } else {
      //Set error meg
      // reactiveListData.edit_delete_err = res?.data?.error; //console.log("PHONE ERROR =>", res.data.outcome);
    }
  } catch (err) {
    reactiveListData.edit_delete_err = returnSystemErrorMsg();
    //console.log("ERR =>", err);
  } finally {
    reactiveListData.data_being_edited_id = 0;
  }
};

const moveItem = (item_id, action) => {
  reactiveListData.data_being_edited_id = item_id;

  setTimeout(async () => {
    try {
      const res = await axios.post("/s-list-update-item", {
        action: action,
        item_id: item_id,
        list_name_id: props.list_res.id,
      });
      //res.data.outcome can be boolean or error message
      if (res?.data?.error == "") {
        router.get(`/s-list/${props.list_res.name}/${props.list_res.id}`);
      } else {
        //Set error meg
        reactiveListData.edit_delete_err = res?.data?.error; //console.log("PHONE ERROR =>", res.data.outcome);
      }
    } catch (err) {
      reactiveListData.edit_delete_err = returnSystemErrorMsg();
      //console.log("ERR =>", err);
    } finally {
      reactiveListData.data_being_edited_id = 0;
    }
  }, 300);
};

const returnIfDataIsDeleting = (data_id) => {
  let deleting = false;
  if (reactiveListData.is_deleting && reactiveListData.data_being_edited_id == data_id) {
    deleting = true;
  }
  return deleting;
};

const returnIfDataIsDeleteSuccess = (data_id) => {
  let success = false;
  if (
    reactiveListData.is_deleted &&
    reactiveListData.edit_delete_success != "" &&
    reactiveListData.data_being_edited_id == data_id
  ) {
    success = true;
  }
  return success;
};

const returnIfItemIsBeingUpdated = (data_id) => {
  let success = false;
  if (reactiveListData.data_being_edited_id == data_id) {
    success = true;
  }
  return success;
};

//HANDLE DELETE BTN
const handleDeleteDataYes = (data_id, data_name, storage_name, index_to_remove) => {
  reactiveListData.edit_delete_err = "";

  if (
    window.confirm(
      `Delete item ${data_name} from ${props.list_res.name}? please note this can not be undone.`
    )
  ) {
    reactiveListData.is_deleted = false;
    reactiveListData.is_deleting = true;
    reactiveListData.data_being_edited_id = data_id;

    setTimeout(async () => {
      try {
        const res = await axios.post("/s-list-delete-item", {
          item_id: data_id,
          list_name_id: props.list_res.id,
        });
        //res.data.outcome can be boolean or error message
        if (res?.data?.error == "") {
          //set success msg
          reactiveListData.edit_delete_success = "Success";
          reactiveListData.is_deleted = true;
          setTimeout(() => {
            reactiveListData.api_res = {
              ...reactiveListData.api_res,
              [storage_name]: reactiveListData.api_res[storage_name].filter(
                (_, index) => index !== index_to_remove
              ),
            };
            reactiveListData.total_records = reactiveListData.total_records - 1;
            reactiveListData.current_records_on_page =
              reactiveListData.current_records_on_page - 1;
          }, 300);
        } else {
          //Set error meg
          reactiveListData.edit_delete_err = res?.data?.error; //console.log("PHONE ERROR =>", res.data.outcome);
        }
      } catch (err) {
        reactiveListData.edit_delete_err = returnSystemErrorMsg();
        //console.log("ERR =>", err);
      } finally {
        reactiveListData.is_deleting = false;
      }
    }, 500);
  } // end window confirm
};

const assignDataFromAxiosApiCall = () => {
  reactiveListData.data_length = dataLength;
  reactiveListData.total_records = props.list_res.list.total;
  reactiveListData.api_res = [...reactiveListData.api_res, ...dataResult];
  reactiveListData.current_records_on_page =
    reactiveListData.current_records_on_page + dataLength;
};

const returnDataToBePost = () => {
  return {
    selected_sort_option: reactiveListData.option_selected,
    item_name: search_word.value,
  };
};
const returnTotalRecordsMsg = () => {
  let record_word = "record";

  if (reactiveListData.total_records > 1) {
    record_word = "records";
  }
  return (
    reactiveListData.current_records_on_page +
    " of " +
    reactiveListData.total_records +
    " total " +
    record_word
  );
};

const handleLoadMoreResult = async () => {
  if (!reactiveListData.is_searching) {
    if (props.list_res?.list.next_page_url === null) {
      return;
    }

    router.post(props.list_res?.list.next_page_url, returnDataToBePost(), {
      preserveState: true,
      preserveScroll: true,
      only: ["list_res"],
      onStart: () => {
        reactiveListData.is_paginating = true;
      },
      onFinish: () => {
        reactiveListData.is_paginating = false;
      },

      onSuccess: () => {
        scrollToTopOrBottomOfPage("bottom");
        window.history.replaceState({}, "", props.list_res?.list.path);
        assignDataFromAxiosApiCall();
      },
    });
  } // end if !reactiveListData.is_searching
};

// Compute the count of items with pending_trolley 0
const pendingCount = computed(() => {
  return Object.values(reactiveListData.api_res)
    .flat()
    .filter((item) => item.pending_trolley === 0).length;
});

// Compute the count of items with pending_trolley 1
const trolleyCount = computed(() => {
  return Object.values(reactiveListData.api_res)
    .flat()
    .filter((item) => item.pending_trolley === 1).length;
});
//Watch the search input value for changes.
watch(
  search_word,
  debounce(() => {
    handleSearchForm();
  }, 400)
);

const filteredPendingItems = computed(() => {
  const result = {};
  for (const [key, items] of Object.entries(reactiveListData.api_res)) {
    const pendingItems = items.filter((item) => item.pending_trolley === 0);
    if (pendingItems.length) {
      result[key] = pendingItems;
    }
  }
  return result;
});

const filteredTrolleyItems = computed(() => {
  const result = {};
  for (const [key, items] of Object.entries(reactiveListData.api_res)) {
    const trolleyItems = items.filter((item) => item.pending_trolley === 1);
    if (trolleyItems.length) {
      result[key] = trolleyItems;
    }
  }
  return result;
});
</script>
