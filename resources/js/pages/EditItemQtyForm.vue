<template>
  <div class="form-wrapper">
    <section v-if="edit_item_qty_data.is_processing"><LoadingIndicator /></section>
    <section v-if="!edit_item_qty_data.is_processing">
      <form @submit.prevent="handleFormSubmit">
        <div class="row mb-1">
          <div class="col">
            <label class="form-label">
              <span v-if="showFormErr()" class="text-danger bolded small">{{
                edit_item_qty_data.err_msg
              }}</span>
              <span
                v-else-if="edit_item_qty_data.success_msg != ''"
                class="text-success bolded"
                >{{ edit_item_qty_data.success_msg }}</span
              >
              <span v-else>New qty*</span>
            </label>
          </div>
          <div class="col">
            <img
              :src="
                grouped_result[edited_item_storage_name][edited_item_index]['img_url']
              "
              class="s-list-item-img"
              alt="Item image"
            />
            <span class="ml-3 mt-2">
              {{ grouped_result[edited_item_storage_name][edited_item_index]["name"] }}
            </span>
          </div>
        </div>

        <div v-show="edit_item_qty_data.success_msg == ''" class="input-group mb-3">
          <input
            type="text"
            v-model="edit_item_qty_data.qty"
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
import AppButton from "../shared/AppButton";
import LoadingIndicator from "../shared/LoadingIndicator";
import axios from "../api/axios";
import { returnSystemErrorMsg } from "../helper/util";
const emit = defineEmits(["updateItemQty"]);
const props = defineProps({
  grouped_result: {
    type: Object,
    default: {},
  },
  edited_item_storage_name: {
    type: String,
    default: "",
  },
  edited_item_index: {
    type: Number,
    default: 0,
  },
});
const edit_item_qty_data = reactive({
  qty:
    props.grouped_result[props.edited_item_storage_name][props.edited_item_index]["qty"],
  is_processing: false,
  err_msg: "",
  success_msg: "",
});
const showFormErr = () => {
  // console.log(props.grouped_result[props.edited_item_storage_name]);
  if (edit_item_qty_data.err_msg != "") {
    return true;
  } else {
    return false;
  }
};

const hideFormErr = () => {
  edit_item_qty_data.err_msg = "";
};

const handleFormSubmit = () => {
  let abort = false;
  if (edit_item_qty_data.qty == "") {
    abort = true;
    edit_item_qty_data.err_msg = "*Please enter item qty before saving thanks";
  }
  if (edit_item_qty_data.qty == 0) {
    abort = true;
    edit_item_qty_data.err_msg = "*Item qty can not be zero";
  }
  if (!abort) {
    //Post the form
    edit_item_qty_data.is_processing = true;
    setTimeout(async () => {
      try {
        const res = await axios.post("/update-item-qty", {
          data_id:
            props.grouped_result[props.edited_item_storage_name][props.edited_item_index][
              "id"
            ],
          data_qty: edit_item_qty_data.qty,
        });

        if (res?.data?.error != "") {
          edit_item_qty_data.err_msg = res?.data?.error;
        } else {
          edit_item_qty_data.success_msg = "item qty updated successfully";

          setTimeout(() => {
            emit("updateItemQty", edit_item_qty_data.qty);
            edit_item_qty_data.qty = "";
          }, 500);
        }
      } catch (err) {
        edit_item_qty_data.err_msg = returnSystemErrorMsg();
      } finally {
        edit_item_qty_data.is_processing = false;
      }
    }, 1000);
  }
};
</script>
