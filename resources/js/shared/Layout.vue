<template>
  <Head>
    <title>
      {{ appName + " | " + pageTitle }}
    </title>
  </Head>
  <Header :linkUrl="linkUrl" :linkName="linkName" />
  <div class="content-wrapper">
    <slot />
  </div>
  <Footer />
</template>
<script>
//appDataObj.appName variable comes from views/app.blade.php and it's from .env file
const appName = appDataObj.appName;
</script>
<script setup>
import Header from "./Header";
import Footer from "./Footer";
import { Head } from "@inertiajs/vue3";

defineProps({
  pageTitle: {
    type: String,
    default: "",
  },

  linkUrl: {
    type: String,
    default: "/add-items",
  },
  linkName: {
    type: String,
    default: "Add items to system",
  },
});
</script>
