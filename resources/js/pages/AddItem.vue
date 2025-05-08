<template>
  <Layout pageTitle="add-item" linkUrl="/view-items" linkName="View system Items">
    <div class="container">
      <div class="row">
        <div class="col-md-9 mx-auto">
          <div class="form-wrapper">
            <section v-show="add_item_data.is_form_processing">
              <LoadingIndicator />
            </section>

            <section v-show="!add_item_data.is_form_processing">
              <div v-if="add_item_data.item_n_url_success != ''">
                <HandleMsg
                  infotype="success"
                  :msg="add_item_data.item_n_url_success"
                  customClass="bg-white mb-4"
                />
              </div>

              <form v-else @submit.prevent="handleForm">
                <h6>Add item to system</h6>
                <p class="small">
                  Enter name, url is optional. Click on the plus button to add more item
                  to the system or minus button to remove item before saving thanks.
                  <br /><span class="bolded"
                    >!Please note that any item you add here will be added to the
                    system-wide inventory and not a specific list.</span
                  >
                </p>
                <div class="col-md-12 pb-3">
                  <div class="row">
                    <div
                      v-for="(name_url, name_url_index) in add_item_data.formData
                        .item_n_url"
                      class="mb-3"
                    >
                      <div class="row">
                        <div class="col-md-12">
                          <OptionElementInput
                            defaultOptionSelected=""
                            labelName="Select storage*"
                            :allowSearch="false"
                            :labelPrepend="false"
                            whatToget="id"
                            arrType="obj"
                            :disabledInput="true"
                            :resultObj="storage_data"
                            @updateSelectedOptionInput="
                              (selected_storage) =>
                                handleSelectedStorage(selected_storage, name_url_index)
                            "
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <label class="form-label" for="name">Item name*</label>
                          <input
                            v-model="name_url.name"
                            type="text"
                            class="form-control"
                            maxlength="50"
                            placeholder="Enter item name"
                            @focus="() => removeAddPhoneFormErr()"
                          />
                        </div>

                        <div class="col">
                          <label class="form-label" for="name"
                            >Image link <span class="small italic">(optinal)</span></label
                          >
                          <div class="input-group">
                            <input
                              v-model="name_url.url"
                              type="text"
                              maxlength="255"
                              class="form-control"
                              placeholder="Image link"
                              @focus="() => removeAddPhoneFormErr()"
                            />

                            <div class="input-group-append">
                              <span class="ml-2 mr-2">
                                <AppButton
                                  btnType="button"
                                  customClass="btn-primary"
                                  :btnFunc="addField"
                                >
                                  <i class="fa fa-plus" aria-hidden="true"></i>
                                </AppButton>
                              </span>
                              <span v-show="add_item_data.formData.item_n_url.length > 1">
                                <AppButton
                                  btnType="button"
                                  customClass="btn-danger"
                                  :btnFunc="() => removeField(name_url_index)"
                                >
                                  <i class="fa fa-minus" aria-hidden="true"></i>
                                </AppButton>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>

                    <HandleMsg
                      v-show="add_item_data.item_n_url_err != ''"
                      infotype="error"
                      :msg="add_item_data.item_n_url_err"
                      customClass="bg-white"
                    />
                    <AppButton :fullBtn="true" btnType="submit" customClass="primary-btn">
                      Save
                    </AppButton>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script setup>
import { reactive } from "vue";
import { router } from "@inertiajs/vue3";
import HandleMsg from "../shared/HandleMsg";
import Layout from "../shared/Layout";
import axios from "../api/axios";
import AppButton from "../shared/AppButton";
import LoadingIndicator from "../shared/LoadingIndicator";
import OptionElementInput from "../shared/OptionElementInput";
const props = defineProps({
  errors: Object,
  storage_data: {
    type: Object,
    default: {},
  },
});

const add_item_data = reactive({
  formData: {
    item_n_url: [{ name: "", url: "", storage: "" }],
  },

  item_n_url_err: "",
  is_form_processing: false,
  item_n_url_success: "",
});

const handleSelectedStorage = (selected_storage, index) => {
  //Remove any error
  removeAddPhoneFormErr();
  //selected_storage is an object containing the selected storage id & name
  add_item_data.formData.item_n_url[index].storage = selected_storage.id;
};
const removeAddPhoneFormErr = () => {
  add_item_data.item_n_url_err = "";
};

const addField = () => {
  if (add_item_data.formData.item_n_url.length <= 9) {
    add_item_data.formData.item_n_url.push({ name: "", url: "", storage: "" });
  }
};

const removeField = (index) => {
  add_item_data.formData.item_n_url.splice(index, 1);
};

const handleForm = () => {
  let abort = false;

  add_item_data.formData.item_n_url.forEach((item) => {
    if (item.name == "" || item.storage == "") {
      abort = true;
      add_item_data.item_n_url_err =
        "Please check you have filled in the name correctly and selected a storage";
    }
  });

  if (!abort) {
    add_item_data.is_form_processing = true;
    setTimeout(async () => {
      try {
        const res = await axios.post("/save-items", add_item_data.formData);
        if (res.data?.error != "") {
          add_item_data.item_n_url_err = res.data?.error;
        } else {
          add_item_data.item_n_url_success = "Items/item added successfully";
          setTimeout(() => {
            router.get("/view-items");
          }, 2000);
        }
      } catch (err) {
        add_item_data.item_n_url_err = returnSystemErrorMsg();
      } finally {
        add_item_data.is_form_processing = false;
      }
    }, 500);
  } //end if abort is false
};
</script>
