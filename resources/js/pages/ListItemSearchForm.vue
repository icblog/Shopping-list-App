<template>
  <div class="list-item-search-wrapper">
    <input
      v-model="item_search"
      type="text"
      class="form-control item-search-imput"
      :placeholder="`Search for item and add to ${list_name}....`"
      maxlength="255"
      autocomplete="off"
      @keypress.enter.prevent
    />
    <span
      v-show="item_search.length > 0"
      class="clear-search-icon-times"
      @click="clearSearchInput"
    >
      <i class="fas fa-times"></i>
    </span>
    <div v-show="item_search.length > 0" class="list-item-search-result">
      <section v-if="reactiveItemData.is_item_searching" class="pt-5 mt-4">
        <LoadingIndicator />
      </section>

      <section v-else-if="reactiveItemData.custom_err != ''" class="pt-5 mt-4">
        <HandleMsg
          infotype="error"
          customClass="bg-white text-center"
          :msg="reactiveItemData.custom_err"
        />
      </section>

      <section v-else-if="reactiveItemData.custom_success != ''" class="pt-5 mt-4">
        <HandleMsg
          infotype="success"
          customClass="bg-white text-center"
          :msg="reactiveItemData.custom_success"
        />
      </section>

      <section
        v-else-if="
          !reactiveItemData.is_item_searching &&
          reactiveItemData.item_search_res.length > 0
        "
      >
        <div
          v-for="(item, index) in reactiveItemData.item_search_res"
          :key="index"
          class="row list-item-detail-wrapper align-items-center"
        >
          <div class="col-7">
            <span>
              <img :src="item.img_url" class="item-img" alt="Item image" />
            </span>
            <span class="pl-2">{{ item.name }}</span>
          </div>

          <div class="col-2 text-right">
            <!-- Bind v-model to item.qty -->
            <input
              v-model="item.qty"
              type="text"
              class="form-control search-res-qty-input"
              placeholder="Qty.."
              maxlength="2"
              autocomplete="off"
              @keypress.enter.prevent
            />
          </div>
          <div class="col-3 text-right">
            <span class="align-middle">
              <AppButton btnStyle="primary" :btnFunc="() => handleItemClick(item)">
                <span><i class="fas fa-plus"></i></span>
              </AppButton>
            </span>
          </div>

          <!-- end div row -->
        </div>
      </section>

      <section v-else class="pt-5 mt-4">
        <p class="text-center">No item found</p>
      </section>
      <!-- end list-item-search-result -->
    </div>
    <!-- end list-item-search-wrapper -->
  </div>
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import { router } from "@inertiajs/vue3";
import { debounce } from "lodash";
import AppButton from "../shared/AppButton";
import LoadingIndicator from "../shared/LoadingIndicator";
import HandleMsg from "../shared/HandleMsg";
import axios from "../api/axios";
import { returnSystemErrorMsg } from "../helper/util";

const item_search = ref("");

const reactiveItemData = reactive({
  is_item_searching: false,
  item_search_res: [], // This will store the list of search results
  custom_err: "",
  custom_success: "",
});

const props = defineProps({
  list_id: {
    type: String,
    default: "0",
  },
  list_name: {
    type: String,
    default: 0,
  },
});

const handleItemClick = async (item) => {
  // Using item.qty to get the correct quantity for the selected item
  const { name, id, qty } = item;
  reactiveItemData.is_item_searching = true;

  try {
    const res = await axios.post("/add-item-list", {
      item_id: id,
      item_name: name,
      item_qty: qty, // Send the individual item quantity
      list_id: props.list_id,
      list_name: props.list_name,
    });

    if (res?.data?.error != "") {
      reactiveItemData.custom_err = res.data.error;
    } else {
      reactiveItemData.custom_success = `${name} added to ${props.list_name} successfully`;
      setTimeout(() => {
        router.get(`/s-list/${props.list_name}/${props.list_id}`);
      }, 2000);
    }
  } catch (err) {
    reactiveItemData.custom_err = returnSystemErrorMsg();
  } finally {
    reactiveItemData.is_item_searching = false;
  }
};

const clearSearchInput = () => {
  item_search.value = "";
  reactiveItemData.item_search_res = [];
  reactiveItemData.custom_err = "";
  reactiveItemData.custom_success = "";
  reactiveItemData.is_item_searching = false;
};

const handleItemSearchForm = async (searched_value) => {
  if (searched_value != "") {
    reactiveItemData.is_item_searching = true;

    try {
      const res = await axios.post("/search-item", {
        searched_item: searched_value,
      });

      if (res?.data?.error != "") {
        reactiveItemData.custom_err = res.data.error;
      } else {
        reactiveItemData.item_search_res = res?.data?.itemData.map((item) => ({
          ...item,
          qty: 1, // Initialize each item's qty to 1
        }));
      }
    } catch (err) {
      reactiveItemData.custom_err = returnSystemErrorMsg();
    } finally {
      reactiveItemData.is_item_searching = false;
    }
  } // End if search text not empty
};

// Watch the search input value for changes.
watch(
  item_search,
  debounce((value) => {
    if (value.trim().length > 1) {
      handleItemSearchForm(value.trim());
    } else {
      clearSearchInput();
    }
  }, 700)
);
</script>
