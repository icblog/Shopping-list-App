<template>
  <Layout pageTitle="signout" backUrl="/">
    <div class="container">
      <div class="row">
        <div class="col-md-10 mx-auto">
          <div class="row">
            <div class="col-md-12">
              <section v-if="processing && respondsMsg == ''">
                <LoadingIndicator />
              </section>
              <section v-if="!processing && respondsMsg == 'code200'">
                <div class="form-wrapper">
                  <HandleMsg
                    :showHeading="false"
                    infotype="success"
                    msg="Sign out successful thank you!"
                    customClass="form-responds-msg"
                  />
                </div>
              </section>
              <section v-if="!processing && respondsMsg == 'code100'">
                <HandleMsg
                  infotype="error"
                  :customHeading="'Error ' + respondsMsg"
                  :msg="returnSystemErrorMsg()"
                  customClass="form-responds-msg"
                />
              </section>
            </div>
          </div>

          <section v-if="!processing && respondsMsg == ''">
            <div class="row">
              <div class="col-md-10 mx-auto">
                <div class="form-wrapper">
                  <h5 class="text-center mb-3">Sign out</h5>
                  <p class="text-center small mb-3">
                    Please note, all fields marked with a * are required
                  </p>
                  <div class="form-group">
                    <div class="row">
                      <div class="col">
                        <label class="form-label" for="signoutoption"
                          >{{ signOutData.label }}*
                          <img
                            v-show="signOutData.label == 'Enter badge letter'"
                            class="badge-img"
                            src="/imgs/badge.jpg"
                            alt="badge"
                        /></label>
                      </div>
                      <div class="col pb-2">
                        <AppButton
                          :btnFunc="
                            () =>
                              changeSignOutOption(signOutData.signOutForm.signoutoption)
                          "
                          customClass="primary-btn"
                        >
                          Change option
                        </AppButton>
                      </div>
                    </div>

                    <input
                      ref="firstInput"
                      v-model="searchvalue"
                      type="text"
                      class="form-control"
                      id="signoutoption"
                      name="signoutoption"
                      maxlength="255"
                      autocomplete="off"
                      @keypress.enter.prevent
                    />
                  </div>
                </div>

                <div class="find-visitor-signin-result-div">
                  <section v-if="signOutData.isSearching">
                    <LoadingIndicator />
                  </section>
                  <section v-else>
                    <div
                      v-show="signOutData.visitorsSigninData.length > 0"
                      v-for="(visitor, vistorIndex) in signOutData.visitorsSigninData"
                    >
                      <div class="row" :key="vistorIndex">
                        <div class="col">
                          <p>{{ visitor.fname }}</p>
                        </div>
                        <div class="col">
                          <p>{{ visitor.lname }}</p>
                        </div>

                        <div class="col text-right">
                          <AppButton
                            customClass="primary-btn"
                            :btnFunc="() => handleSignOutVistorBtnClick(visitor.id)"
                          >
                            Sign Out
                          </AppButton>
                        </div>
                      </div>
                    </div>

                    <div
                      v-show="
                        signOutData.isSearchComplete &&
                        signOutData.visitorsSigninData.length <= 0
                      "
                      class="mt-4"
                    >
                      <HandleMsg
                        infotype="error"
                        :customHeading="'Error code001'"
                        :msg="returnCanNotFindVistorErrorMsg()"
                        customClass="form-responds-msg"
                      />
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { reactive, ref, onMounted, watch } from "vue";
import { router } from "@inertiajs/vue3";
import { debounce } from "lodash";
import axios from "../api/axios";
import { focusOnFirstInput, returnSystemErrorMsg, toSqlDatetime} from "../helper/util";
import Layout from "../shared/Layout";
import AppButton from "../shared/AppButton";
import LoadingIndicator from "../shared/LoadingIndicator.vue";
import HandleMsg from "../shared/HandleMsg";

let processing = ref(false),
  searchvalue = ref(""),
  firstInput = ref(null);

const props = defineProps({
  respondsMsg: String,
  visitorAlreadySignedIn: Boolean,
});

const signOutData = reactive({
  signOutForm: {
    signoutoption: "badge",
    searchedWordValue: "",
  },
  actionData: {
    action: "alreadysignedIn",
    currentDataTime: toSqlDatetime(new Date()),
  },
  label: "Enter badge letter",
  isSearchComplete: false,
  isSearching: false,
  customErr: "",
  visitorsSigninData: [],
  visitorAlreadySignedIn: props.visitorAlreadySignedIn,
});

const handleVisitorAlreadySignedIn = () => {
  if (signOutData.visitorAlreadySignedIn == true) {
    processing.value = true;

    setTimeout(() => {
      router.post("/handle-signout", signOutData.actionData, {
        onSuccess: () => {
          if (props.respondsMsg == "code200") {
            setTimeout(() => {
              router.visit("/");
            }, 1600);
          }
        },
        onFinish: () => {
          processing.value = false;
        },
        onError: (errors) => {
          assignServerErrors(errors);
        },
      });
    }, 500);
  }
};
const handleSignOutVistorBtnClick = (signInVistorId) => {
  signOutData.actionData.action = "endSignedIn";
  signOutData.actionData.signInVistorId = signInVistorId;
  signOutData.visitorAlreadySignedIn = true;
  //Call above function
  handleVisitorAlreadySignedIn();
};

const returnCanNotFindVistorErrorMsg = () => {
  let lnameOrBadge = "badge";
  if (signOutData.label.indexOf("badge") > 0) {
    lnameOrBadge = "last name";
  }
  return (
    "Sorry we can not find you, please click on change option and try using your <strong>" +
    lnameOrBadge +
    "</strong> or see a member of the security team thank you."
  );
};

const changeSignOutOption = () => {
  //This will hide after search error div if any
  if (signOutData.isSearchComplete) {
    signOutData.isSearchComplete = false;
    searchvalue.value = "";
  }
  //Change the label
  if (signOutData.signOutForm.signoutoption == "lastname") {
    signOutData.label = "Enter badge letter";
    signOutData.signOutForm.signoutoption = "badge";
  } else if (signOutData.signOutForm.signoutoption == "badge") {
    signOutData.label = "Enter your last name";
    signOutData.signOutForm.signoutoption = "lastname";
  }
};

const handleFindVisitorform = async (searchedWordValue) => {
  if (searchedWordValue != "") {
    signOutData.signOutForm.searchedWordValue = searchedWordValue;

    signOutData.isSearching = true;

    if (signOutData.isSearchComplete) {
      signOutData.isSearchComplete = false;
    }

    try {
      const res = await axios.post("/find-visitor-signedin", signOutData.signOutForm);

      if (res?.data?.error != "") {
        signOutData.customErr = res.data.error;
      } else {
        signOutData.visitorsSigninData = res?.data?.visitorsSigninData;
      }
    } catch (err) {
      signOutData.customErr = returnSystemErrorMsg();
      //console.log(err);
    } finally {
      signOutData.isSearching = false;
      signOutData.isSearchComplete = true;
    }
  } else {
    if (signOutData.visitorsSigninData.length > 0) {
      signOutData.visitorsSigninData = [];
      signOutData.isSearchComplete = false;
    }
  } //end if searchedWordValue is not empty
};

onMounted(() => {
  handleVisitorAlreadySignedIn();
  focusOnFirstInput(firstInput);
});

watch(
  searchvalue,
  debounce((value) => {
    handleFindVisitorform(value);
  }, 700)
);
</script>
